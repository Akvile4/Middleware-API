const User = require("./userModel");

exports.addUser = async (req, res) => {
    try {
        const newUser = await User.create(req.body);
            // like return statement
        res.status(200).send({ user: newUser });
    } catch (error) {
        console.log(error);
        res.status(500).send({err: error.message});
    }
};

    // will show all users in a database
exports.listUsers = async (req, res) => {
    try {
        const users = await User.find({});
        res.status(200).send({ users });
    } catch (error) {
        console.log(error);
        res.status(500).send({err: error.message});
    }
};

    // updates username
exports.updateUser = async (req, res) => {
    try {
        const user = await User.updateOne({ username: req.body.username },
            { $set: { username: req.body.newUsername } });
            res.status(200).send({ user });
    } catch (error) {
        console.log(error);
        res.status(500).send({err: error.message});
    }
};

    // you can delete by name or email
exports.deleteUser = async (req, res) => {
    try {
        const user = await User.deleteOne(req.body);
        res.status(200).send({ user });
    } catch (error) {
        console.log(error);
        res.status(500).send({err: error.message});
    }
};


// mix express and mongoose