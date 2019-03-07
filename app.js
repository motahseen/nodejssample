const express = require("express");
let app = new express();

app.get("/", function(req, res) {
   res.send("hello, from node  sample.");
});

app.get("/about", function(req, res) {
    res.send("About this web app.");
});

app.get("/contact", function(req, res) {
    res.send("motahseen");
})
let port = 12345;
app.listen(port, function() {
    console.log("Server started listening at localhost;" + port);
});