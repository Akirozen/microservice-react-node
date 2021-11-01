import express from "express";
import cors from "cors";
import { randomBytes } from "crypto";

const app = express();

app.use(express.json()); //? check this one
app.use(express.urlencoded()); //? check this one
app.use(cors());

const posts = {};

app.get("/posts", (req, res) => {
  res.send(posts);
});

app.post("/posts", (req, res) => {
  const id = randomBytes(4).toString("hex");
  const { title } = req.body;

  posts[id] = {
    id,
    title,
  };

  res.status(201).send(posts[id]);
});

app.listen(4000, () => {
  console.log("Connected to: 4000");
});
