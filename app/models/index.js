const dbConfig = require("../config/db.config.js");

const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const db = {};
db.mongoose = mongoose;
db.url = dbConfig.url;
db.orders = require("./order.model.js")(mongoose);
db.deliveryDays = require("./deliveryDay.model.js")(mongoose);
db.packageTypes = require("./packageType.model.js")(mongoose);
db.configurations = require("./configuration.model.js")(mongoose);
db.areas = require("./area.model.js")(mongoose);
db.categories = require("./category.model.js")(mongoose);
db.users = require("./user.model.js")(mongoose);

module.exports = db;