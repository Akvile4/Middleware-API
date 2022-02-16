const bcrypt = require("bcryptjs");

    // will hash the password
exports.hashPass = async (req, res, next) => {
    try {
        // const tempPass = req.body.pass;
        // const hashedPass = await bcrypt.hash(tempPass, 8);
        // req.body.pass = hashedPass;

        req.body.password = await bcrypt.hash(req.body.password, 8);
        next();
    } catch (error) {
        console.log(error);
        res.status(500).send({err: error.message});
    }
};