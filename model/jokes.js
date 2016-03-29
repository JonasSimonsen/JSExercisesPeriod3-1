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

var ObjectID = require("mongodb").ObjectID;

exports.editJoke = function(jokeToEdit, callback) {
    jokeToEdit
    var db = connection.get();
    db.connection("jokes").updateOne({"_id": jokeToEdit._id}, jokeToEdit,function(err, data) {
        callback(err, data);
    });

};

exports.deleteJoke = function(id, callback) {
};

exports.randomJoke = function randomJoke (callback) {
};