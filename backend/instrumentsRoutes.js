const express = require("express");
const database = require("./connect");
const ObjectId = require("mongodb").ObjectId;

let instrumentsRoutes = express.Router();

// Retrieve all
instrumentsRoutes.route("/instruments").get(async (request, response) => {
  let db = database.getDb();
  let data = await db.collection("instruments").find({}).toArray();
  if (data.length > 0) {
    response.json(data);
  } else {
    throw new Error("No Data Found!");
  }
});


//Retrieve One
instrumentsRoutes.route("/instruments/:id").get(async (request, response) => {
  let db = database.getDb();
  let data = await db
    .collection("instruments")
    .findOne({ _id: new ObjectId(request.params.id) });
  if (Object.keys(data).length > 0) {
    response.json(data);
  } else {
    throw new Error("No Data Found!");
  }
});

module.exports = instrumentsRoutes;
