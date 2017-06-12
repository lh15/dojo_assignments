var mongoose = require('mongoose');
var Person = mongoose.model('Person');

module.exports = {
    index: function (req, res) {
        Person.find({}, function (err, persons) {
            if (err) {
                return handleError(err);
            }
            // console.log(persons)
            var persons = persons;
            // console.log(persons)
            res.json({ persons: persons });
        })
    },
    new: function (req, res) {
        var person_name = req.params.name;
        var newPerson = new Person({ name: person_name });
        newPerson.save(function (err) {
            if (err) {
                console.log(err);
                res.json({ errors: newPerson.errors });
            } else {
                console.log("success");
                res.json({ success: "successfully added " + person_name + " to the API" });
            }
        })
    },
    remove: function (req, res) {
        var person_name = req.params.name;
        Person.remove({ name: req.person_name.name }, function (err, result) {
            if (err) {
                console.log(err);
                res.json({ errors: newPerson.errors });
            } else {
                console.log("success");
                res.json({ success: "successfully deleted " + person_name + " from the API" });
            }
        });
    },
    show: function (req, res) {
        var person_name = req.params.name;
        Person.find({ name: person_name }, function (err, response) {
            if (err) { console.log(err); }
            res.json({ person: response[0] });
        });
    },
  

}