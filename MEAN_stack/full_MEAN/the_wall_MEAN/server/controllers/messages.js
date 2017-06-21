var mongoose = require('mongoose');
var Message = mongoose.model('Message');
var Comment = mongoose.model('Comment');
module.exports = {
    index: function (req, res) {
        Message.find({}).populate('_author').populate({path: '_comments', populate: { path: '_author' }}).exec(function (err, messages) {
                if (err) {
                    console.log(err);
                    res.json({ errors: err });
                } else {
                    console.log("success");
                    res.json({ messages: messages });
                }
            });
    },
    message: function (req, res) {
        var newMessage = new Message({ _author: req.body.author, message: req.body.message });
        newMessage.save(function (err) {
            if (err) {
                console.log(err);
                res.json({ errors: err });
            } else {
                console.log("success");
                res.json({ message: "success" });
            }
        })
    },
    comment: function (req, res) {
        var message_id = req.params.id;
        Message.findOne({ _id: message_id }, function (err, message) {
            console.log(req.body);
            var newComment = new Comment({ _author: req.body.author, text: req.body.text });
            newComment._message = message._id;
            Message.update({ _id: message._id }, { $push: { "_comments": newComment } }, function (err) {

            });
            newComment.save(function (err) {
                if (err) {
                    console.log(err);
                    res.json({ errors: err });
                } else {
                    console.log("comment added");
                    res.json({ message: "success" });
                }
            });
        });
    },
    delete_message: function (req, res) {
        console.log("reached delete_message");
        var message_id = req.params.id;
        Message.remove({ _id: message_id }, function (err, message) {
            if (err) {
                console.log(err);
                res.json({ errors: err });
            } else {
                console.log("deleted");
                res.json({ message: "success" });
            }
        });
    },
    delete_comment: function (req, res) {
        console.log("reached delete_comment");
        var comment_id = req.params.id;
        Comment.remove({ _id: comment_id }, function (err, comment) {
            if (err) {
                console.log(err);
                res.json({ errors: err });
            } else {
                console.log("deleted");
                res.json({ message: "success" });
            }
        });
    }

}