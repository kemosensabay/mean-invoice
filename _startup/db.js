const mongoose = require("mongoose");

module.exports = function () {
  const db = process.env.MONGODB_URI;

  mongoose.set("useCreateIndex", true);
  mongoose.set("useNewUrlParser", true);
  mongoose.set("useUnifiedTopology", true);

  mongoose
    .connect(db)
    .then(() => {
      console.log("Connected to database successfully");
    })
    .catch(() => {
      console.log("Database connection failed");
    });
};
