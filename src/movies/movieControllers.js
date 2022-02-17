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
        const movies = await Movie.find( {} );
        res.status(200).send({ movies });
    } catch (error) {
        console.log(error);
        res.status(500).send({ err: error.message });
    }
};

    // finds movie depending on what we ask
exports.findMovie = async (req, res) => {
    try {
        if (req.body.title) {
            const movie = await Movie.find(
                { title: req.body.title });
            res.status(200).send({ movie });
        }
        else if (req.body.actors) {
            const movie = await Movie.find(
                { actors: req.body.actors });
            res.status(200).send({ movie });
        }
        else if (req.body.genre) {
            const movie = await Movie.find(
                { genre: req.body.genre });
            res.status(200).send({ movie });
        }
        else if (req.body.year) {
            const movie = await Movie.find(
                { year: req.body.year });
            res.status(200).send({ movie });
        }
        else {
            res.status(400).send({ error: "COULD NOT FIND"});
        }
    } catch (error) {
        console.log(error);
        res.status(500).send({ err: error.message });
    }
};

    // updates movie data
exports.updateMovie = async (req, res) => {
    try {
        if (req.body.newTitle) {
            const movies = await Movie.updateOne(
                { title: req.body.title },
                { $set: {title: req.body.newTitle} });
            res.status(200).send({ movies });
        }
        else if (req.body.newActors) {
            const movies = await Movie.updateOne(
                { title: req.body.title },
                { $set: {actors: req.body.newActors} });
            res.status(200).send({ movies });
        }
        else if (req.body.newGenre) {
            const movies = await Movie.updateOne(
                { title: req.body.title },
                { $set: {genre: req.body.newGenre} });
            res.status(200).send({ movies });
        }
        else if (req.body.newYear) {
            const movies = await Movie.updateOne(
                { title: req.body.title },
                { $set: {year: req.body.newYear} });
            res.status(200).send({ movies });
        }
        else {
            res.status(400).send({ error: "NOT FOUND"});
        }
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