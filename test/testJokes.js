/**
 * Created by jonassimonsen on 08/03/2016.
 */
var expect = require("chai").expect;
var jokes = require("../model/jokes");
var connection = require("../db/db");

var testJokes = [
    {
        "joke": " aaa",
        "type": ["short", "alcohol", "quote"],
        "reference": {"author": "Someone", "link": ""},
        "lastEdited": new Date()
    }, {

        "joke": " bbb",
        "type": ["short", "alcohol", "quote"],
        "reference": {"author": "Someone", "link": ""},
        "lastEdited": new Date()
    }
    ];

describe("The Jokes Factory", function () {

    before(function (done) {
        connection.connect("mongodb://localhost:27017/test", function() {
            done();
        });
    });

    beforeEach(function(done) {
        var db = connection.get();
        db.collection("jokes").deleteMany({},function(err,data) {
            if(err) {
                throw new Error(err);
            }
            db.collection("jokes").insertMany(testJokes, function(err, date) {
                if(err) {
                    throw new Error(err);
                }
                done();
            });

        })
    });

    it("Should find two jokes", function(done){
        jokes.allJokes(function (err,data ) {
            expect(data.length).to.be.equal(2);
            done();
        })
    });

});


