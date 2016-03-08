/**
 * Created by jonassimonsen on 08/03/2016.
 */


var connect = require("../db/db")

exports.allJokes =  function(callback) {
    var db = connect.get();
    db.collection("jokes").find({}).toArray(function(err,data){
        if (err) {
            callback(err);
        } else {
            callback(null,data);
        }
    });
};

exports.findJoke =  function(id, callback) {

};

exports.editJoke = function(jokeToEdit, callback) {

};

exports.deleteJoke = function(id, callback) {
};

exports.randomJoke = function randomJoke (callback) {
};