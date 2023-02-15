import { useHttp } from "./use-http";

const getCityUrl = (city) =>
  `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${
    import.meta.env.VITE_OPENWEATHERMAP_API_KEY
  }&units=metric`;

const useCurrentWeather = (city) => {
  const { data, status } = useHttp(getCityUrl(city));

  if (!data) return [null, { status }];

  const {
    main: { temp, temp_max: maxTemp, temp_min: minTemp, humidity, pressure },
    wind: { speed: windSpeed },
    visibility,
    weather,
  } = data;

  const { main: weatherType } = weather[0];

  return [
    {
      weatherType,
      temp,
      maxTemp,
      minTemp,
      humidity,
      pressure,
      windSpeed,
      visibility,
    },
    { status },
  ];
};

export default useCurrentWeather;
