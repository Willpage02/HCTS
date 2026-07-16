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
          customer.service,
          new Date().toLocaleDateString(),

        ]],

      },

    });

    res.status(200).json({

      success: true,
      message: "Lead added to spreadsheet",

    });

  }

  catch (error) {

    console.error("Google Sheets Error:");
    console.error(error);

    res.status(500).json({

      success: false,
      message: "Failed to save lead",
      error: error.message,

    });

  }

});

/* -------------------------------- */
/* Stripe Checkout Session          */
/* -------------------------------- */

app.post("/api/create-checkout-session", async (req, res) => {

  try {

    const { service, bins } = req.body;

    let lineItems = [];

    if (service === "booking") {

      lineItems.push({

        price: process.env.ONE_TIME_PRICE_ID,
        quantity: 1,

      });

    }

    else if (service === "subscription") {

      lineItems.push({

        price: process.env.MONTHLY_PRICE_ID,
        quantity: 1,

      });

    }

    else if (service === "quarterly") {

      lineItems.push({

        price: process.env.QUARTERLY_PRICE_ID,
        quantity: 1,

      });

    }

    else {

      return res.status(400).json({

        message: "Invalid service type",

      });

    }

    const extraBins = Number(bins) - 1;

    if (extraBins > 0) {

      lineItems.push({

        price: process.env.MULTI_BIN_PRICE_ID,
        quantity: extraBins,

      });

    }

    const session = await stripe.checkout.sessions.create({

      mode:
        service === "subscription"
          ? "subscription"
          : "payment",

      payment_method_types: ["card"],

      line_items: lineItems,

      success_url: "http://localhost:5173/success",

      cancel_url: "http://localhost:5173/cancel",

    });

    res.json({

      url: session.url,

    });

  }

  catch (error) {

    console.error("Stripe Error:");
    console.error(error);

    res.status(500).json({

      message: "Stripe session failed",
      error: error.message,

    });

  }

});

/* -------------------------------- */
/* Start Server                     */
/* -------------------------------- */

app.listen(5000, () => {

  console.log("Server running on port 5000");

});