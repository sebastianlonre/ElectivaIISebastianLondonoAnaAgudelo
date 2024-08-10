const express = require("express");
const app = express();
const port = 3000;
const router = require("./routes/apiRoutes");

app.use("/api", router);

app.listen(port, () => {
  console.log(`La app esta escuchando en <http://localhost>:${port}`);
});