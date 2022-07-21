const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../user/model");

exports.hashPass = async (req, res, next) => {
  try {
    // const tempPass = req.body.password; //grabbed password variable from body, and stored it locally
    // const hashedPass = await bcrypt.hash(tempPass, 8); //hashed the password and stored it in a new constant
    // req.body.password = hashedPass; //stored freshly hashed password back in the req body
    // writing line 5,6,7 above in a dryer form, we have all the 3 lines condensed into 1 line;
    if (req.body.password) {
      req.body.password = await bcript.hash(req.body.password, 8); //all steps above, condensed into 1 line
    } else if (req.body.updateObj.password) {
      req.body.update.password = await bcrypt.hash(
        reg.body.updateObj.password,
        8
      );
    }

    next(); //moves onto next middleware/controller in endpoint
  } catch (error) {
    console.log(error);
    res.send({ error });
  }
};
