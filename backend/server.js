const connect = require("./connect");
const express = require("express");
const cors = require("cors");
const instruments = require("./instrumentsRoutes");

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());
app.use(instruments);

app.listen(PORT, () => {
  connect.connectToServer();
  console.log(`server is runing on port ${PORT}`);
});
