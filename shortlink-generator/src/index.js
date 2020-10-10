const express = require("express")
const app = express()
const mongoose = require("mongoose");
const routes = require("./routes");
const config = require("config");
const http = require("http");
const cors = require("cors");

app.disable("x-powered-by");

const corsOption = {
    origin: true,
    credentials: true,
    exposedHeaders: "x-access-token",
  };
  app.use(cors(corsOption));
  app.use(express.json());
  app.use(express.json());

  mongoose.connect(
    config.get("DBURL"),
    {
      useFindAndModify: false,
      useCreateIndex: true,
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
    (err) => {
      if (err) {
        console.log("Error Connecting Database");
        console.log(err);
        process.exit(1);
      }
      console.log("DB Connected");
    }
  );
  app.use("/user", routes.user);

  app.get("/",(req,res)=> {res.redirect("https://github.com/Lucifer-N")})

  app.post("/", (req, res) => {
    res.redirect("https://github.com/Lucifer-N");
  });
  app.get("*", (req, res) => {
    res.redirect("https://github.com/Lucifer-N");
  });
  app.post("*", (req, res) => {
    res.redirect("https://github.com/Lucifer-N");
  });
  
app.listen(4001, ()=> {console.log("listening on portP")})