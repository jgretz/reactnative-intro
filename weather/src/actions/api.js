// imports
import _ from 'lodash';

// constants
const WEATHER_API_KEY = "4565514e8c88db119c618f97893723d6";
const ROOT_URL = `http://openweathermap.org/data/2.5/weather?appid=${WEATHER_API_KEY}`;

// logic
export default (latitude, longitude) => {
  const url = `${ROOT_URL}&lat=${latitude}&lon=${longitude}`;

  return fetch(url).then((response) => {
    return response.json();
  })
  .then((json) => {
    return {
      city: json.name,
      temperature: `${Math.round(json.main.temp * 9 / 5 - 459.67)} ˚F`,
      description: _.capitalize(json.weather[0].description)
    }
  });
}
