import { useState, useEffect } from "react";

const param = {
  url: "https://api.openweathermap.org/data/2.5/",
  appid: "215654f419acb8e244cf8872fbd4a03a",
};

export const Weather = (props) => {
  const [data, setData] = useState();

  const showWeather = (data) => {
    setData(data);
  };

  useEffect(() => {
    fetch(
      `${param.url}weather?q=${props.name}&units=metric&APPID=${param.appid}`
    )
      .then((weather) => {
        const weatherToJson = weather.json();
        return weatherToJson;
      })
      .then(showWeather);
  }, [props]);

  return (
    <>
      {data && data.main ? (
        <>
          <div className="weather-temperature">
            <div className="temperature-description">
              <p className="temperature">{Math.round(data.main.temp)}&deg;</p>
              <p className="city">{props.name}</p>
            </div>
            <hr />
            <div className="temperature-description">
              <p className="disclaimer">{data.weather[0]["description"]}</p>
              <img
                className="weatherIco"
                src={`https://openweathermap.org/img/wn/${data.weather[0]["icon"]}@2x.png`}
              />
            </div>
          </div>
          <div className="description">
            <p className="wind-spead">
              Wind speed:{<br />}
              {data.wind.speed} m/s
            </p>
            <hr />
            <p className="humidity">
              Humidity:{<br />}
              {data.main.humidity} %
            </p>
            <hr />
            <p className="visibility">
              Visibility:{<br />}
              {Math.round(data.visibility / 1000)} km
            </p>
            <hr />
            <p className="pressure">
              Pressure:{<br />}
              {data.main.pressure} hPa
            </p>
          </div>
        </>
      ) : (
        <>
          <div className="weather-temperature">
            <div className="temperature-description">
              <p className="temperature">{Math.round(10.1)}&deg;</p>
              <p className="city">{props.name}</p>
            </div>
            <hr />
            <div className="temperature-description">
              <p className="disclaimer">Clouds</p>
              <img className="weatherIco" src="/icon.png" />
            </div>
          </div>
          <div className="description">
            <p className="wind-spead">
              Wind speed:
              <br />
              10 m/s
            </p>
            <hr />
            <p className="humidity">Humidity:{<br />}10 %</p>
            <hr />
            <p className="visibility">
              Visibility:{<br />}
              {Math.round(1290 / 1000)} km
            </p>
            <hr />
            <p className="pressure">
              Pressure:
              <br />
              10 hPa
            </p>
          </div>
        </>
      )}
    </>
  );
};

