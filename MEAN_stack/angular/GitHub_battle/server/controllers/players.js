var mongoose = require('mongoose');
var Player = mongoose.model('Player');
module.exports = {
    index: function (req, res) {
        Player.find({}, function (err, notes) {
            if (err) {
                console.log(err);
                res.json({ errors: err });
            } else {
                console.log("success");
                res.json({ players: players });
            }
        });
    },
    // player: function (req, res) {
    //     var newPlayer = new Player({ note: req.body.note });
    //     newNote.save(function (err) {
    //         if (err) {
    //             console.log(err);
    //             res.json({ errors: err });
    //         } else {
    //             console.log("success");
    //             res.json({ message: "success" });
    //         }
    //     })
    // },
}