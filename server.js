const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const jwt = require('./app/_helpers/jwt');
const errorHandler = require('./app/_helpers/error-handler');


var corsOptions = {
  origin: "http://localhost:8081",
  origin: "http://localhost:4200"
};

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse requests of content-type - application/json
app.use(bodyParser.json());
app.use(cors(corsOptions));

// use JWT auth to secure the api
app.use(jwt());

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to meushan node.js application." });
});

require("./app/routes/delivaryDay.routes")(app);
require("./app/routes/packageType.routes")(app);
require("./app/routes/order.routes")(app);
require("./app/routes/configuration.routes")(app);
require("./app/routes/area.routes")(app);
require("./app/routes/category.routes")(app);
require("./app/routes/user.routes")(app);

// global error handler
app.use(errorHandler);

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

const db = require("./app/models");
db.mongoose
  .connect(db.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("Connected to the database!");
  })
  .catch(err => {
    console.log("Cannot connect to the database!", err);
    process.exit();
  });