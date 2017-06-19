var mongoose = require('mongoose');
var Player = mongoose.model('Player');
module.exports = {
    // TODO: make controllers for players. add, update index to show and delete
    index: function (req, res) {
        Player.find({}, function (err, players) {
            if (err) {
                console.log(err);
                res.json({ errors: err });
            } else {
                console.log("success");
                res.json({ players: players });
            }
        });
    },
    player: function (req, res) {
        var newPlayer = new Player({ name: req.body.name, position: req.body.position });
        newPlayer.save(function (err) {
            if (err) {
                console.log(err);
                res.json({ errors: err });
            } else {
                console.log("success");
                res.json({ message: "success" });
            }
        })
    },
    update_player: function (req, res) {
        console.log("reached update_player");
        console.log();
        var player_id = req.params.id;
        console.log(player_id);
        if (req.body.gameNum === 1) {
            Player.update({ _id: player_id }, { $set: { game_1: { status: req.body.status } } }, function (err, message) {
                if (err) {
                    console.log(err);
                    res.json({ errors: err });
                } else {
                    console.log("deleted");
                    res.json({ message: "success" });
                }
            });
        } else if (req.body.gameNum === 2) {
            Player.update({ _id: player_id }, { $set: { game_2: { status: req.body.status } } }, function (err, message) {
                if (err) {
                    console.log(err);
                    res.json({ errors: err });
                } else {
                    console.log("deleted");
                    res.json({ message: "success" });
                }
            });
        } else if (req.body.gameNum === 3) {
            Player.update({ _id: player_id }, { $set: { game_3: { status: req.body.status } } }, function (err, message) {
                if (err) {
                    console.log(err);
                    res.json({ errors: err });
                } else {
                    console.log("deleted");
                    res.json({ message: "success" });
                }
            });
        }


    },
    delete_player: function (req, res) {
        console.log("reached delete_player");
        var player_id = req.params.id;
        Player.remove({ _id: player_id }, function (err, message) {
            if (err) {
                console.log(err);
                res.json({ errors: err });
            } else {
                console.log("deleted");
                res.json({ message: "success" });
            }
        });
    },
}