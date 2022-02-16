const Movie = require("./movieModel");

    // build function to add a new entry to our database
exports.addMovie = async (req, res) => {
    try {
        const newMovie = await Movie.create(req.body);
        res.status(200).send({ movie: newMovie });
    } catch (error) {
        console.log(error);
        res.status(500).send({ error: error.message });
    }
};

    // will find everything in this database
exports.listMovies = async (req, res) => {
    try {
        const movies = await Movie.find({});
        res.status(200).send({ movies });
    } catch (error) {
        console.log(error);
        res.status(500).send({ err: error.message });
    }
};

    // updates one movie title
exports.updateMovie = async (req, res) => {
    try {
        const movies = await Movie.updateOne({ title: req.body.title},
            { $set: {title: req.body.newTitle} });
            res.status(200).send({ movies });
    } catch (error) {
        console.log(error);
        res.status(500).send({ err: error.message });
    }
};

    // deletes one movie
exports.deleteMovie = async (req, res) => {
    try {
        const movies = await Movie.deleteOne(req.body);
        res.status(200).send({ movies });
    } catch (error) {
        console.log(error);
        res.status(500).send({ err: error.message });
    }
};