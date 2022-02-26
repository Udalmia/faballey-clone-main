const mongoose = require("mongoose");
module.exports = () => {
  return mongoose.connect(
    "mongodb+srv://sachida44:sachida44@cluster0.xiqh3.mongodb.net/faballey"
  );
  // return mongoose.connect("mongodb+srv://sachida44:sachida44@cluster0.xiqh3.mongodb.net/faballey");
  // "mongodb+srv://ravibala-13:bals1999@cluster0.hfo0i.mongodb.net/faballey"
  // "mongodb+srv://prajwal:prajwal@cluster0.p5lz6.mongodb.net/fabelly"
};
