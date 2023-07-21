
const mongoose = require("mongoose");

const connect = () => {
  mongoose
    .connect("mongodb+srv://admin:admin12345@cluster0.dkxxeug.mongodb.net/Test?retryWrites=true&w=majority", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("MonDB Connected");
    })
    .catch((err) => {
      console.log(err.message);
    });
};

module.exports = connect;
