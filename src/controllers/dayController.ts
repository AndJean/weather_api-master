/** @format */

import { Request, Response } from "express";
import {
  generateDubaiDayData,
  generateDublinDayData,
  generateLondonDayData,
  generateMilanDayData,
  generateParisDayData,
} from "../services/dayService.js";

/**
 * Gets the weather data for a city
 * @param req the request object
 * @param res the response object
 * @param city the city parameter as a string
 */
export const getDays = async (req: Request, res: Response) => {
  // We will use a try catch block to catch any errors
  try {
    // Get the city param from the request
    const { city } = req.params;

    console.log(city);

    // We will create a variable with a type of WeatherData
    let finalDayData: DayData;

    // We will use an if statement to check which city was passed in
    if (city === "london") {
      console.log(generateLondonDayData());
      finalDayData = generateLondonDayData();
    } else if (city === "dublin") {
      finalDayData = generateDublinDayData();
    } else if (city === "paris") {
      finalDayData = generateParisDayData();
    } else if (city === "milan") {
      finalDayData = generateMilanDayData();
    } else if (city === "dubai") {
      finalDayData = generateDubaiDayData();
    } else {
      // If the city is not london or dublin, we will throw an error
      res.status(404).send("City not found");
    }

    // We will return the weather data as JSON
    res.status(200).json(finalDayData);
  } catch (error) {
    // If there is an error, we will log it and send a 500 status code
    res.status(500).send("Error in fetching weather data");
  }
};
