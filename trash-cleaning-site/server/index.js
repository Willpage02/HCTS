const express = require("express");
const cors = require("cors");
require("dotenv").config();

const { google } = require("googleapis");

const app = express();

app.use(cors());
app.use(express.json());


// Google Sheets authentication

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



// Receive customer leads

app.post("/api/leads", async (req, res) => {

  try {

    const customer = req.body;


    console.log(
      "New Customer:",
      customer
    );


    console.log(
      "Using Spreadsheet ID:",
      process.env.GOOGLE_SHEET_ID
    );


    const response = await sheets.spreadsheets.values.append({

      spreadsheetId:
        process.env.GOOGLE_SHEET_ID,


      range: "Sheet1!A:G",


      valueInputOption: "USER_ENTERED",


      resource: {

        values: [

          [

            customer.name,

            customer.email,

            customer.phone,

            customer.address,

            customer.bins,

            customer.service,

            new Date().toLocaleDateString(),

          ],

        ],

      },

    });


    console.log(
      "Google Sheets Success:",
      response.data
    );


    res.status(200).json({

      success: true,

      message: "Lead added to spreadsheet",

    });



  } catch (error) {


    console.error(
      "FULL GOOGLE SHEETS ERROR:"
    );


    console.error(error);


    res.status(500).json({

      success: false,

      message: "Failed to save lead",

      error: error.message,

    });


  }

});



app.listen(
  5000,
  () => {

    console.log(
      "Server running on port 5000"
    );

  }
);