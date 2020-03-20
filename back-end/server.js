const express = require("express");
const mongodb = require("mongodb");
const path = require("path");

const port = 8080;

const app = express();
app.use(require("cors")());
app.use(require("body-parser").json());
app.use(express.static(path.join(path.dirname(__dirname), "\\front-end")));
// const uri = mongodb+srv://ayushi:<ayushifindwg>@findwg-chzbf.mongodb.net/findWG?retryWrites=true&w=majority
//
// mongodb.MongoClient.connect(uri, (err, db) => {
//     const collection = db.collection("cities");
//
// }

app.get("/", (req, res) => {

});

app.get("/:city", (req, res) => {
    console.log(`[GET REQUEST TO /${city}] Sending back information about the user ${city}`);
});

app.put("/", (req, res) => {
    res.send("Don't you dare")
});

var listener = app.listen(port, () => {
    console.log("Your app is listening on port " + listener.address().port);
});
