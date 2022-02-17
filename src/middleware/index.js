const bcrypt = require("bcryptjs");
const validator = require("validator")

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

    // checks if email is of correct syntax
exports.emailValid = async (req, res, next) => {
    try {
        if(!(await validator.isEmail(req.body.email))) {
            res.status(500).send({error: "Wrong email address!!!"});
        }
        else {
            next();
        }
    } catch (error) {
        console.log(error);
        res.status(500).send({err: error.message});
    }
}