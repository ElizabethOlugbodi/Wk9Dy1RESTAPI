require("./db/connection"); //instantly run database connection
const express = require("express"); //pull in all of express module
const app = express(); //create webserver constant to manipulate
const port = process.env.PORT || 5001; //store either supplied port or 5001
const userRouter = require("./user/routes");
app.use(express.json()); //passes all requests as if they are JSON, sends all responses as JSON
app.use(userRouter); // tells the server to use userRouter for routing (finding an endpoint),
// which is hopefully imported from the routes file at the top with the other imports
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
// listening on port 5001 or provided port on current location (localhost)
