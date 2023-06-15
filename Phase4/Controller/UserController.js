const express = require("express");
const UserModel = require("../model/UserModule");

//get all Users

const getAllUsers = async (req, res) => {
  try {
    const getUsers = await UserModel.find();
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
    const { name, email, password, isFemale, phoneNum, Age } = req.body;

    const createUser = await userModel.create({
      name,
      email,
      password,
      isFemale,
      phoneNum,
      Age
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
