"use client";
import Image from "next/image";
import { useState } from "react";
export default function Home() {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);
  const API_KEY = "16c3147e7167660a2048c681716e8b15";
  const apiUrl = "https://api.openweathermap.org/data/2.5/weather";

  const fetchWeather = async () => {
    try {
      const response = await fetch(
        `${apiUrl}?q=${city}&appid=${API_KEY}&units=metric`
      );
      const data = await response.json();
      setWeatherData(data);
      console.log(data);
      setError(null);
    } catch (err) {
      console.error("Error fetching weather data:", err);
      setError(err.message);
      setWeatherData(null);
    }
  };
  return (
    <div className="container mt-28 ml-[25vw] bg-opacity-50 bg-black justify-center items-center h-[70vh] w-[50vw] rounded-3xl">
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
          className="ml-4 p-3 w-24 bg-gray-800 rounded-full text-white  disabled:bg-gray-600"
          disabled={city.length<2}
        >
          Submit
        </button>
      </div>
      {weatherData ? (
        <div className="data ml-44 mt-5 p-2">
          <p className="text-3xl font-bold">
            Weather in {weatherData.name},{weatherData.sys.country}
          </p>
          <p className="text-3xl text-white font-bold mt-6">
            {weatherData.main.temp}°C
          </p>
          <p className="text-lg text-white font-bold mt-6">
            Current Climate :{weatherData.weather[0].description}
          </p>
          <p className="text-lg text-white  font-semibold">
            Humidity: {weatherData.main.humidity}
          </p>
          <p className="text-lg text-white font-semibold">
            Wind Speed: {weatherData.wind.speed}
          </p>
        </div>
      ) : (
        <p className="ml-14 mt-4 text-white text-lg"> Loading.. </p>
      )}
      <footer>
        <div className="footer  ">
          <div className="icons ">
            <p class="text-black text text-center ml-52 mt-40 sm:text-left">
              © 2025 Weather-app —
              <a
                href="#"
                rel="noopener noreferrer"
                className="text-black ml-1"
                target="_blank"
              >
                Kumail-ahmad
              </a>
            </p>
            <span className="social-icons flex p-3 ml-60  flex-row gap-5">
              <a
                href="https://github.com/kumail-ahmad"
                className="github"
                target="_blank"
              >
                <svg fill="currentColor" viewBox="0 0 24 24" class="w-5 h-5">
                  <path d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.166 6.84 9.49.5.09.66-.22.66-.48v-1.7c-2.78.61-3.37-1.34-3.37-1.34-.45-1.16-1.1-1.47-1.1-1.47-.9-.61.07-.6.07-.6 1 .07 1.53 1.02 1.53 1.02.89 1.52 2.34 1.08 2.91.83.09-.65.35-1.09.64-1.34-2.22-.25-4.55-1.11-4.55-4.93 0-1.09.39-1.99 1.03-2.69-.1-.25-.45-1.26.1-2.62 0 0 .84-.27 2.75 1.02a9.55 9.55 0 015 0c1.91-1.29 2.75-1.02 2.75-1.02.55 1.36.2 2.37.1 2.62.64.7 1.03 1.6 1.03 2.69 0 3.83-2.33 4.68-4.55 4.93.36.31.69.93.69 1.87v2.77c0 .26.16.58.67.48A9.98 9.98 0 0022 12c0-5.52-4.48-10-10-10z"></path>
                </svg>
              </a>
              <a
                href="https://x.com/elonmusk?mx=2"
                className="twitter"
                target="_blank"
              >
                <svg
                  fill="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                </svg>
              </a>
              <a
                href="https://www.instagram.com/instagram?igsh=MTdybm9oeXdiY3Qzbg=="
                className="instagram"
                target="_blank"
              >
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/in/kumal-ahmad-819678285?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
                className="linkedin"
                target="_blank"
              >
                <svg
                  fill="currentColor"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="0"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="none"
                    d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                  ></path>
                  <circle cx="4" cy="4" r="2" stroke="none"></circle>
                </svg>
              </a>
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}
