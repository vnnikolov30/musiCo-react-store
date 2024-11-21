const express = require("express");
const database = require("./connect");
const ObjectId = require("mongodb").ObjectId;
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config({ path: "./config.env" });

let userRoutes = express.Router();
const SALT_ROUNDS = 6;

//Create user
userRoutes.route("/users").post(async (request, response) => {
  let db = database.getDb();
  const takenEmail = await db
    .collection("users")
    .findOne({ email: request.body.email });

  if (takenEmail) {
    response.json({ message: "The email is already registered" });
  } else {
    const pwHash = await bcrypt.hash(request.body.password, SALT_ROUNDS);
    let MongoObject = {
      name: request.body.name,
      email: request.body.email,
      password: pwHash,
      joinDate: new Date(),
    };

    let data = await db.collection("users").insertOne(MongoObject);
    response.json(data);
  }
});

// Retrieve all
userRoutes.route("/users").get(async (request, response) => {
  let db = database.getDb();
  let data = await db.collection("users").find({}).toArray();
  if (data.length > 0) {
    response.json(data);
  } else {
    throw new Error("No Data Found!");
  }
});

//Retrieve One
userRoutes.route("/users/:id").get(async (request, response) => {
  let db = database.getDb();
  let data = await db
    .collection("users")
    .findOne({ _id: new ObjectId(request.params.id) });
  if (Object.keys(data).length > 0) {
    response.json(data);
  } else {
    throw new Error("No Data Found!");
  }
});

//LOGIN

userRoutes.route("/users/login").post(async (request, response) => {
  let db = database.getDb();
  const user = await db
    .collection("users")
    .findOne({ email: request.body.email });

  if (user) {
    let confirmation = await bcrypt.compare(
      request.body.password,
      user.password
    );

    if (confirmation) {
        const token = jwt.sign(user, process.env.SECRETKEY, {expiresIn: "1h"})
      response.json({ success: true, token });
    } else {
      response.json({ success: false, message: "Incorrect Pasword!" });
    }
  } else {
    response.json({ success: false, message: "User not found" });
  }
});

module.exports = userRoutes;
