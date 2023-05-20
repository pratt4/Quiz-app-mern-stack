const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

mongoose
  .connect("mongodb://127.0.0.1:27017/react-abc", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB"))
  .catch(console.error);

const Back = require("./models/components");

app.get("/bk", async (req, res) => {
  const bk = await Back.find();

  res.json(bk);
});

app.post("/abc/new", (req, res) => {
  const abc = new Back({
    username: req.body.username,
    password: req.body.password
  });

  abc.save();

  res.json(abc);
});

app.delete("/abc/delete/:id",async (req,res) =>{
  const result = await Back.findByIdAndDelete(req.params.id);

  res.json({ result });
})

app.listen(3001);

//todo - abc
//Todo - Back
//todos - bk
