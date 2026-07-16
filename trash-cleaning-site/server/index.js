const express = require("express");
const cors = require("cors");
require("dotenv").config();

const Stripe = require("stripe");
const stripe = Stripe(process.env.STRIPE_SECRET_KEY);

const { google } = require("googleapis");

const app = express();

app.use(cors());
app.use(express.json());



/* -------------------------------- */
/* Google Sheets Authentication     */
/* -------------------------------- */

const auth = new google.auth.GoogleAuth({

  keyFile: "./credentials.json",

  scopes: [
    "https://www.googleapis.com/auth/spreadsheets",
  ],

});


const sheets = google.sheets({

  version: "v4",

  auth,

});



/* -------------------------------- */
/* Save Lead to Google Sheets       */
/* -------------------------------- */

app.post("/api/leads", async (req, res) => {


  try {


    const customer = req.body;


    console.log("New Customer:", customer);



    await sheets.spreadsheets.values.append({

      spreadsheetId: process.env.GOOGLE_SHEET_ID,

      range: "Sheet1!A:G",

      valueInputOption: "USER_ENTERED",

      resource: {

        values: [[

          customer.name,
          customer.email,
          customer.phone,
          customer.address,
          customer.bins,
          customer.serviceName,
          new Date().toLocaleDateString(),

        ]],

      },


    });



    res.status(200).json({

      success: true,

      message: "Lead added to spreadsheet",

    });



  }


  catch(error){


    console.error("Google Sheets Error:");
    console.error(error);



    res.status(500).json({

      success:false,

      message:"Failed to save lead",

      error:error.message,

    });


  }


});







/* -------------------------------- */
/* Stripe Checkout Session          */
/* -------------------------------- */


app.post("/api/create-checkout-session", async (req,res)=>{


  try{


    const { service } = req.body;



    if(!service || !service.stripePriceId){


      return res.status(400).json({

        message:"Missing Stripe price ID",

      });


    }



    console.log(
      "Creating Stripe checkout:",
      service.title,
      service.stripePriceId
    );



    const session = await stripe.checkout.sessions.create({



      mode:
        service.type === "subscription"
          ? "subscription"
          : "payment",



      customer_creation: "always",



      payment_method_types:[

        "card"

      ],



      line_items:[

        {

          price: service.stripePriceId,

          quantity:1,

        }

      ],



      metadata:{

        serviceName: service.title,

        serviceType: service.type,

        bins: String(service.bins),

      },



      success_url:
        "https://honeycombtrash.com/success",



      cancel_url:
        "https://honeycombtrash.com/cancel",



    });



    res.json({

      url:session.url,

    });



  }


  catch(error){


    console.error("Stripe Error:");

    console.error(error);



    res.status(500).json({

      message:"Stripe session failed",

      error:error.message,

    });


  }


});







/* -------------------------------- */
/* Stripe Customer Portal           */
/* -------------------------------- */

app.post("/api/create-customer-portal", async (req,res)=>{


  try{


    const { customerId } = req.body;



    if(!customerId){


      return res.status(400).json({

        message:"Missing Stripe customer ID",

      });


    }



    const session = await stripe.billingPortal.sessions.create({

      customer: customerId,

      return_url:
        "https://honeycombtrash.com",

    });



    res.json({

      url: session.url,

    });



  }


  catch(error){


    console.error("Portal Error:");

    console.error(error);



    res.status(500).json({

      message:"Failed to create customer portal",

      error:error.message,

    });


  }


});







/* -------------------------------- */
/* Start Server                     */
/* -------------------------------- */

app.listen(5000,()=>{


  console.log(
    "Server running on port 5000"
  );


});