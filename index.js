const express = require('express')
const bodyParser = require("body-parser");
const path = require("path");
const app = express();

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());


let customers = [{
    customerName: "Stanley",
    customerEmail: "stan@gmail.com",
    customerID: "0001",
    phoneNumber: "123-456-7890",

},
{
    customerName: "Stanley",
    customerEmail: "stan@gmail.com",
    customerID: "0002",
    phoneNumber: "123-456-7890",

},
{
    customerName: "Stanley",
    customerEmail: "stan@gmail.com",
    customerID: "0003",
    phoneNumber: "123-456-7890",

},
{
    customerName: "Stanley",
    customerEmail: "stan@gmail.com",
    customerID: "0004",
    phoneNumber: "123-456-7890",

}];

let waitingCustomers = [
    {
        customerName: "Patience",
        customerEmail: "patience@gmail.com",
        customerID: "0100",
        phoneNumber: "123-456-7890",

    }
]

PORT = process.env.PORT || 7500;

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "home.html"));
});

app.get("/reserve", (req, res) => {
    res.sendFile(path.join(__dirname, "reserve.html"));
});

app.get("/tables", (req, res) => {
    res.sendFile(path.join(__dirname, "tables.html"));
});

app.get("/api/customers", (req, res) => {
    return res.json(customers);
});

app.get("/api/waitlist", (req, res) => {
    return res.json(waitingCustomers);
});

// Create New customers - takes in JSON input
app.post("/api/customers", (req, res) => {
    var newCustomer = req.body;

    console.log(newCustomer);
    if(customers.length < 5) {
        customers.push(newCustomer);
        res.json(newCustomer);
    } else {
        waitingCustomers.push(newCustomer)
        res.json(newCustomer);
    }

});

app.listen(PORT, () => console.log(`app listening on ${PORT}!`))