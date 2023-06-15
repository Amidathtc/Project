const express = require("express");
const userModel = require("../model/UserModule");

//get all Users

const getAllVoters = async (req, res) => {
  try {
    const getUsers = await userModel.find();
    res.status(200).json({
      message: "gotten all Voters",
      data: getUsers,
    });
  } catch (error) {
    res.status(400).json({
      message: "couldn't get all Voters",
    });
  }
};

//create a newuser

const newuser = async (req, res) => {
  try {
    const { name, email, age, isFemale, phoneNum, Address } = req.body;

    const createUser = await userModel.create({
      name,
      email,
      age,
      isFemale,
      phoneNum,
      Address,
    });
    res.status(201).json({
      message: "created a new Voter",
      data: createUser,
    });
  } catch (error) {
    res.status(400).json({
      message: "couldn't create new Voter",
    });
  }
};
