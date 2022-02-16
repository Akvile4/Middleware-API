const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        unique: true,
    },
    actors: [
        {
            type: String,
            default: "undefined",
        },
    ],
    genre: {
        type: String,
        required: true,
    },
    year: {
        type: Number,
        default: "undefined",
    },
});

const Movie = mongoose.model("Movie", movieSchema);

module.exports = Movie;