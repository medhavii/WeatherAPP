import React, { useEffect, useState } from "react";
import { Route, Link, Router } from "react-router-dom";

const App = () => {
  const [city, setCity] = useState(null);
  const [search, setSearch] = useState("Mumbai");

  useEffect(() => {
    const fetchApi = async () => {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=14780bfe5c2d8078a0f1fdf12c8343a2`;
      const response = await fetch(url);
      const resJson = await response.json();
      setCity(resJson.main);
    };
    fetchApi();
  }, [search]);
  return (
    <div
      className="w-screen h-screen bg-no-repeat bg-center flex flex-col justify-center"
      style={{
        backgroundImage: ` url('https://img.freepik.com/free-psd/3d-background-with-podium-monsoon-season-sales_23-2150323230.jpg?w=740&t=st=1685274605~exp=1685275205~hmac=4a89c45bb95b6e838cb8433157b7e2a8f78b0a1d51f7d1c01ccab1ca0c1080a6')`,
      }}
    >
      <div className="flex justify-center ">
        <div className="flex-col">
          {/* <div className="font-bold ml-24 mb-10 font-sans text-purple-700">
            <p>Weather App</p>
          </div> */}
          <div className=" w-80 flex justify-center">
            <input
              className="opacity-100"
              placeholder="cityname"
              value={search}
              onChange={(event) => {
                setSearch(event.target.value);
              }}
            ></input>
          </div>

          {!city ? (
            <p>No Data Found</p>
          ) : (
            <div className="w-80 flex justify-center font-semibold mt-4 text-slate-700">
              <div className="flex-col">
                <p>City: {search}</p>

                <p>Temperature: {city.temp}°C</p>
                <p>Feels Like: {city.feels_like}°C</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default App;
