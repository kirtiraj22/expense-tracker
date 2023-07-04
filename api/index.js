const express = require("express");
const cors = require("cors");
const app = express();
const port = 4040;

app.use(cors());
app.use(express.json());
app.get("/api/test", (req, res) => {
  res.json("test ok2");
});

app.post("/api/transaction", (req, res) => {
  res.json(req.body);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
