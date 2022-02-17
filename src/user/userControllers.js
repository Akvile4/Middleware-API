const bcrypt = require("bcryptjs/dist/bcrypt");
const User = require("./userModel");

exports.addUser = async (req, res) => {
    try {
        const newUser = await User.create(req.body);
            // like return statement
        res.status(200).send({ user: newUser });
    } catch (error) {
        console.log(error);
        res.status(500).send({ err: error.message });
    }
};

    // will show all users in a database
exports.listUsers = async (req, res) => {
    try {
        const users = await User.find({});
        res.status(200).send({ users });
    } catch (error) {
        console.log(error);
        res.status(500).send({ err: error.message });
    }
};

exports.findUser = async (req, res) => {
    try {
        const user = await User.find(
            { username: req.body.username });
        res.status(200).send({ user });
    } catch (error) {
        console.log(error);
        res.status(500).send({ err: error.message });
    }
}

    // updates username
exports.updateUser = async (req, res) => {
    try {
        if (req.body.newUsername) {
            const user = await User.updateOne(
                { username: req.body.username },
                { $set: { username: req.body.newUsername } });
                res.status(200).send({ user });
        }
        else if (req.body.newPassword) {
            const user = await User.updateOne(
                { username: req.body.username },
                { $set: { password: req.body.newPasword } });
                res.status(200).send({ user });
        }
        else if (req.body.newEmail) {
            const user = await User.updateOne(
                { email: req.body.email },
                { $set: { email: req.body.newEmail }});
                res.status(200).send({ user });
        }
        else {
            res.status(400).send({ error: "COULD NOT FIND" });
        }
    } catch (error) {
        console.log(error);
        res.status(500).send({ err: error.message });
    }
};

    // you can delete by name or email
exports.deleteUser = async (req, res) => {
    try {
        const user = await User.deleteOne(req.body);
        res.status(200).send({ user });
    } catch (error) {
        console.log(error);
        res.status(500).send({ err: error.message });
    }
};

    // checks if usersname's passwords match
exports.login = async (req, res) => {
    try {
        const user = await User.findOne({ username: req.body.username });
        if (user) {
            const PasswordMatch = await bcrypt.compare( req.body.password, user.password );

            if (PasswordMatch) {
                res.status(200).send({ message: "Your password is correct!!!" });
            }
            else {
                res.status(400).send({ error: "Wrong password!!!" });
            }
        }
        else {
            res.status(400).send({ error: "User does not exist" });
        }
    } catch (error) {
        console.log(error);
        res.status(500).send({ err: error.message });
    }
};


// mix express and mongoose