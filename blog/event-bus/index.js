import express from "express";
import cors from "cors";
import axios from "axios";

const app = express();

app.use(express.json()); //? check this one
// app.use(express.urlencoded()); //? check this one
app.use(cors());

const events = [];

app.post("/events", (req, res) => {
  const event = req.body;

  events.push(event);

  axios.post("http://localhost:4000/events", event).catch((err) => {
    console.log(err.message);
  });

  axios.post("http://localhost:4001/events", event).catch((err) => {
    console.log(err.message);
  });

  axios.post("http://localhost:4002/events", event).catch((err) => {
    console.log(err.message);
  });

  axios.post("http://localhost:4003/events", event).catch((err) => {
    console.log(err.message);
  });

  res.send({ status: "ok" });
});

app.get("/events", (req, res) => {
  res.send(events);
});

app.listen(4005, () => {
  console.log("EventBuss online on: 4005");
});
