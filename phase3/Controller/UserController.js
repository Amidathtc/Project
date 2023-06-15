const express = require("express");
const UserModel = require("../model/UserModel");

// get all Cars

const getAllCars = async (req, res) => {
  try {
    const getCars = await UserModel.find();
    res.status(200).json({
      message: "gotten all Cars",
      data: getCars,
    });
  } catch (error) {
    res.status(400).json({
      message: "couldn't get all users",
    });
  }
};

// create a newCar

const newCar = async (req, res) => {
  try {
    const { name, Brand, color, PlateNum, countryMade } = req.body;

    const createCar = await UserModel.create({
      name,
      Brand,
      color,
      PlateNum,
      countryMade,
    });
    res.status(201).json({
        message:"created a new Car",
        data: createCar,
    });
  } catch (error) {
    res.status(400).json({
        message: "couldn't create new Car"
    });
  }
};
