/**
 * Created by jonassimonsen on 08/03/2016.
 */
var jokes = require("./model/jokes");
var connection = require("./db/db");

connection.connect("mongodb://localhost:27017/test", function() {
    jokes.allJokes(function(err,data) {
       if(err) {
           console.log("UPPPPPPS call the Police");
       } else {
           console.log(data);
       }
    });
});