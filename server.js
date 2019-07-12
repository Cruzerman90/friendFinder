var express = require("express");
var path = require("path");

var app = express();
var port = process.env.PORT || 3000;


app.use(express.static("app/public"));

require("./app/routing/api-routes")(app);
require("./app/routing/html-routes")(app);

app.listen(port, () => console.log("Listening on port %s", port))