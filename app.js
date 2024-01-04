const express = require("express");
const bodyParser = require("body-parser");
const SibApiV3Sdk = require('sib-api-v3-sdk');

const app = express();

// API Key Placement (using example's approach)
let defaultClient = SibApiV3Sdk.ApiClient.instance;
defaultClient.authentications['api-key'].apiKey = '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';

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", function (req, res) {
    res.sendFile(__dirname + "/signup.html");
});

app.post("/", function (req, res) {
    const Fname = req.body.FName;
    const Lname = req.body.LName;
    const mail = req.body.email;

    // console.log(Fname);

    let apiInstance = new SibApiV3Sdk.ContactsApi();

    // Simplified request body (initially)
    let createContact = {
        email: mail,
        listIds: [3],
        attributes: {
            "FIRSTNAME": Fname,
            "LASTNAME": Lname
        }
    };

    // Conditionally add attributes if needed
    // if (true) {
    //     createContact.attributes = {
    //         "FNAME": Fname,
    //         "LNAME": Lname
    //     };
    // }

    // Logging for debugging
    // console.log("Request body:", createContact);

    apiInstance.createContact(createContact)
    .then(function (data) {
        console.log('API called successfully. Returned data: ' + JSON.stringify(data));
        res.sendFile(__dirname + "/fetched.html");
    })
    .catch(function (error) {
        console.error("API error:", error);
        res.sendFile(__dirname + "/failed.html");
    });
});

app.listen(process.env.PORT || "3001", function () {
    console.log("Server is running on port 3001");
});

// api key
// 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