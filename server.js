const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });

const app = require("./app");

// console.log(app.get("env"));
// console.log(process.env);

mongoose
  .connect(process.env.CONN_STR, {
    useNewUrlParser: true,
  })
  .then((conn) => {
    // console.log(conn);
    console.log("db connection successful");
  })
  .catch((error) => {
    console.log("Some error has occured");
  });

// testMovie
//   .save()
//   .then((doc) => {
//     console.log(doc);
//   })
//   .catch((err) => {
//     console.log("Error occured", err);
//   });

const port = process.env.PORT;
 
app.listen(port, () => {
  console.log("server has started...");
});
