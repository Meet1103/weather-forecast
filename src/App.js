// React Imports
import React, { useEffect, useRef, useState } from "react";

// React Toastify Imports
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Component Imports
import Searchbar from "./components/Searchbar";
import WeatherReport from "./components/WeatherReport";
import Loading from "./components/Loading";

function App() {
  // loading State for changing loading status
  const [loading, setLoading] = useState(false);

  // weatherData State for storing weather details fetched from API
  const [weatherData, setWeatherData] = useState();

  // location State for storing the user searched city name
  const [location, setLocation] = useState("Mumbai");

  // Search Input Ref
  const inputRef = useRef();

  // fetchWeatherData function for fetching weather details from open weather API and updating state values
  const fetchWeatherData = async () => {
    try {
      setLoading(true);

      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${process.env.REACT_APP_WEATHER_API_KEY}`
      );
      const data = await response.json();

      if (data?.message === "city not found") {
        toast.error("No such city found", {
          position: "bottom-right",
          autoClose: 5000,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          theme: "dark",
        });
        setLoading(false);
        return;
      }

      setWeatherData(data);
      setLoading(false);
    } catch (error) {
      toast.error(
        "Something went wrong. Try checking your internet connection",
        {
          position: "bottom-right",
          autoClose: 5000,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          theme: "dark",
        }
      );
      setLoading(false);
    }
  };

  // inputFocus function to focus on search input field
  const inputFocus = () => {
    inputRef.current.focus();
  };

  useEffect(() => {
    inputFocus();
    fetchWeatherData();
  }, [location]);

  // handleLocationSearch function to update location state with user search city
  const handleLocationSearch = (city) => {
    setLocation(city);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen w-screen overflow-y-auto px-4 lg:px-0 bg-gradient-to-r from-purple-500 to-pink-500">
      <Searchbar
        inputRef={inputRef}
        handleLocationSearch={handleLocationSearch}
      />
      {!loading ? <WeatherReport weatherData={weatherData} /> : <Loading />}
      <ToastContainer />
    </div>
  );
}

export default App;
