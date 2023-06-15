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
    const { name, Title, Author, Topic } = req.body;

    const createBlog = await userModel.create({
      name,
      Title,
      Author,
      Topic,
    
    });
    res.status(201).json({
      message: "created a new Blog",
      data: createUser,
    });
  } catch (error) {
    res.status(400).json({
      message: "couldn't create new Blog",
    });
  }
};
