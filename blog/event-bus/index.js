import express from "express";
import cors from "cors";
import axios from "axios";

const app = express();

app.use(express.json()); //? check this one
// app.use(express.urlencoded()); //? check this one
app.use(cors());

app.post("/events", (req, res) => {
  const event = req.body;

  axios.post("http://localhost:4000/events", event);
  axios.post("http://localhost:4001/events", event);
  axios.post("http://localhost:4002/events", event);

  res.send({ status: ok });
});

app.listen(4003, () => {
  console.log("Connected to: 4005");
});
