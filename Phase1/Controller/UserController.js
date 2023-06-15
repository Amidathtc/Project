const express = require("express");
const userModel = require("../model/UserModule");

//get all Users

const getAllUsers = async (req, res) => {
  try {
    const getUsers = await userModel.find();
    res.status(200).json({
      message: "gotten all users",
      data: getUsers,
    });
  } catch (error) {
    res.status(400).json({
      message: "couldn't get all users",
    });
  }
};

//create a newuser

const newuser = async (req, res) => {
  try {
    const { name, email, password, isFemale, phoneNum } = req.body;

    const createUser = await userModel.create({
      name,
      email,
      password,
      isFemale,
      phoneNum,
    });
    res.status(201).json({
      message: "created a new User",
      data: createUser,
    });
  } catch (error) {
    res.status(400).json({
      message: "couldn't create new User",
    });
  }
};
