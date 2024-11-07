const express = require("express");
const database = require("./connect");
const ObjectId = require("mongodb").ObjectId;

let albumsRoutes = express.Router();

// Retrieve all
albumsRoutes.route("/albums").get(async (request, response) => {
  let db = database.getDb();
  let data = await db.collection("albums").find({}).toArray();
  if (data.length > 0) {
    response.json(data);
  } else {
    throw new Error("No Data Found!");
  }
});


//Retrieve One
albumsRoutes.route("/albums/:id").get(async (request, response) => {
  let db = database.getDb();
  let data = await db
    .collection("albums")
    .findOne({ _id: new ObjectId(request.params.id) });
  if (Object.keys(data).length > 0) {
    response.json(data);
  } else {
    throw new Error("No Data Found!");
  }
});

module.exports = albumsRoutes;
