const express = require("express");

const app = express();

app.get("/", async (req, res) => res.send("Server is running"));

app.listen(3000, () => console.log("Server running on port 3000"));
