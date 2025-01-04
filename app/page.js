"use client";
import Image from "next/image";
import { useState } from "react";
export default function Home() {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState({ name: "Default City" });

  const API_KEY = "16c3147e7167660a2048c681716e8b15";
  const apiUrl = "https://api.openweathermap.org/data/2.5/weather";
  const fetchWeather = async () => {
    const response = await fetch(`${apiUrl}?q=${city}&appid=${API_KEY}`);
    const data = await response.json();
    setWeatherData(data);
    console.log(data);
    console.log(weatherData.sys.country);
  };

  return (
    <div className="container mt-32 ml-[25vw] bg-opacity-50 bg-black justify-center items-center h-[70vh] w-[50vw] rounded-3xl">
      <div className="search ml-40  ">
        <input
          type="text"
          className="rounded-full bg-black-400 mt-4 p-3 w-96"
          placeholder="Enter the city"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button
          onClick={fetchWeather}
          className="ml-4 p-3 bg-blue-500 rounded-full text-white hover:bg-blue-700"
        >
          Submit
        </button>
      </div>
      
      <div className="data ml-44 mt-3 p-2">
        <p className="text-3xl font-bold">Weather in {weatherData.name}</p>
        <p className="text-3xl font-bold">°C</p>
        <p className="text-xl font-bold">Sunny</p>
        <p className="text-xl font-semibold">Humidity:</p>
        <p className="text-xl font-semibold">Wind Speed: </p>
      </div>
      <div className="icons flex flex-row ml-72 gap-4">
        <div className="facebook">fb</div>
        <div className="facebook">fb</div>
        <div className="facebook">fb</div>
      </div>
    </div>
  );
}
