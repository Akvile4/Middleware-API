require("./db/connection");
const express = require("express");
const userRouter = require("./user/userRoutes");
const movieRouter = require("./movies/movieRoutes");
const app = express();
const port = 5001;

    // handles json data
app.use(express.json());

app.use(userRouter);

app.use(movieRouter);

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
});


//  all express