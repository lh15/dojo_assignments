var mongoose = require('mongoose');
var Tiger = mongoose.model('Tiger');

module.exports = {
    index: function (req, res) {
        Tiger.find({}, function (err, tigers) {
            if (err) {
                return handleError(err);
            }
            // console.log(tigers)
            var tigers = tigers;
            // console.log(tigers)
            res.render('index', { "tigers": tigers });
        })
    },
    new: function (req, res) {
        res.render('new');
    },
    process_tiger: function (req, res) {
        console.log("POST DATA", req.body);
        var tiger = new Tiger({ name: req.body.name, weight: req.body.weight, color: req.body.color });
        // Try to save that new user to the database (this is the method that actually inserts into the db) and run a callback function with an error (if any) from the operation.
        tiger.save(function (err) {
            // if there is an error console.log that something went wrong!
            if (err) {
                console.log('something went wrong');
            } else { // else console.log that we did well and then redirect to the root route
                console.log('successfully added a tiger!');
                res.redirect('/');
            }
        })
    },
    show_tiger: function (req, res) {
        Tiger.find({ _id: req.params.id }, function (err, response) {
            if (err) { console.log(err); }
            res.render('show', { tiger: response[0] });
        });
    },
    edit: function (req, res) {
        Tiger.find({ _id: req.params.id }, function (err, response) {
            if (err) { console.log(err); }
            res.render('edit', { tiger: response[0] });
        })
    },
    update: function (req, res) {
        Tiger.update({ _id: req.params.id }, req.body, function (err, result) {
            if (err) { console.log(err); }
            res.redirect('/');
        });
    },
    delete: function (req, res) {
        Tiger.remove({ _id: req.params.id }, function (err, result) {
            if (err) { console.log(err); }
            res.redirect('/');
        });
    }

}