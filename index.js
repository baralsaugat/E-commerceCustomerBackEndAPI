import express from "express"
const app = express();



const PORT = 8000

app.get("/", function (req, res) {
  res.send("Express is now working");
});

app.listen(PORT);
