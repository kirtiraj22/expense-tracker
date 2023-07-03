const express = require("express");
const app = express();
const port = 4040;
app.get("/api/test", (req, res) => {
  res.json("test ok2");
});

app.post("/api/transaction", (req, res) => {
  res.json(req.body);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
