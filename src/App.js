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
    <div>
      <div className="flex flex-col justify-center">
        <div className="bg-pink-300 w-80">
          <input
            placeholder="cityname"
            value={search}
            onChange={(event) => {
              setSearch(event.target.value);
            }}
          ></input>
          {/* {city.name} */}
        </div>

        {!city ? (
          <p>No Data Found</p>
        ) : (
          <div className="bg-green-200">{search}
          <div><p>{city.temp}</p></div>
          
          </div>
          
        )}
      </div>
    </div>
  );
};

export default App;
// htt/ps://api.openweathermap.org/data/2.5/weather?q={city name}&appid=14780bfe5c2d8078a0f1fdf12c8343a2
