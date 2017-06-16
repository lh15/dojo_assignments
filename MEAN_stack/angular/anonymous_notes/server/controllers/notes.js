var mongoose = require('mongoose');
var Note = mongoose.model('Note');
module.exports = {
    index: function (req, res) {
        Note.find({}, function (err, notes) {
            if (err) {
                console.log(err);
                res.json({ errors: err });
            } else {
                console.log("success");
                res.json({ notes: notes });
            }
        });
    },
    note: function (req, res) {
        var newNote = new Note({ note: req.body.note });
        newNote.save(function (err) {
            if (err) {
                console.log(err);
                res.json({ errors: err });
            } else {
                console.log("success");
                res.json({ message: "success" });
            }
        })
    },

}