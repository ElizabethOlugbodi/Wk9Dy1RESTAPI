const bcrypt = require("bcryptjs");

exports.hashPass = async (req, res, next) => {
  try {
    // const tempPass = req.body.password; //grabbed password variable from body, and stored it locally
    // const hashedPass = await bcrypt.hash(tempPass, 8); //hashed the password and stored it in a new constant
    // req.body.password = hashedPass; //stored freshly hashed password back in the req body
    // writing line 5,6,7 above in a dryer form, we have all the 3 lines condensed into 1 line;

    req.body.password = await bcript.hash(req.body.password, 8);
    next(); //moves onto next middleware/controller in endpoint
  } catch (error) {
    console.log(error);
    res.send({ error });
  }
};
