const express = require("express");
const Router = new express.Router();
const userModel = require("../Models/UserModel");

//Add new user
Router.post("/user", async (req, res) => {
  const newUser = new userModel(req.body);
  try {
    await newUser.save();
    const allUsers = await userModel.find({});
    if (!allUsers.length) {
      return res.status(200).send({
        msg: "New user has been created successfully",
        success: true,
        data: [],
      });
    }
    res.status(201).send({
      msg: "New user has been created successfully",
      success: true,
      data: allUsers,
    });
  } catch (err) {
    res.status(400).send({ err: "Please check your request" });
  }
});

// Get all users under a category
Router.get("/users", async (req, res) => {
  try {
    const allUsers = await userModel.find({});
    if (!allUsers.length) {
      return res.status(200).send([]);
    }
    res.status(200).send(allUsers);
  } catch (err) {
    res.status(500).send({ err: "Sorry, something went wrong" });
  }
});

module.exports = Router;
