const express = require("express");
const userModel = require("../model/UserModule");

//get all Task

const getAllTask = async (req, res) => {
  try {
    const getUsers = await userModel.find();
    res.status(200).json({
      message: "gotten all tasks",
      data: getUsers,
    });
  } catch (error) {
    res.status(400).json({
      message: "couldn't get all task",
    });
  }
};

//create a newTask

const newuser = async (req, res) => {
  try {
    const { Title, Time, Date, email, phoneNum } = req.body;

    const createUser = await userModel.create({
      Title,
      email,
      Time,
      Date,
      phoneNum,
    });
    res.status(201).json({
      message: "created a new Todo",
      data: createUser,
    });
  } catch (error) {
    res.status(400).json({
      message: "couldn't create new Todo",
    });
  }
};
