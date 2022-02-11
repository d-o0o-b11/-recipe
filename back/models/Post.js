const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
        },
        Desc: {
            type: String,
            required: true,
        },
        photo: {
            type: String,
            required: false,
        },
        username: {
            type: String,
            required: true,
        },
        Video: {
            type: String,
            required: false,
        },
        categories: {
            type: Array,
            // ["life","music"]
            required: false,
        },
    },
    { timestamps: true }
);

module.exports = mongoose.model("Post", PostSchema);