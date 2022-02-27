const mongoose = require("mongoose");
module.exports = () => {
  return mongoose.connect(
    "mongodb+srv://akhilg123:akhilg123@cluster0.75ole.mongodb.net/faballey"
  );
};
