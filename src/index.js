

const apiKey = 'd7fc45f4b3c1ebdd5ada6afd67936c4f'
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?q=';
const apiFore = 'api.openweathermap.org/data/2.5/forecast?lat=';

// Imgages for weatherStatus
import weatherClouds from '../src/assets/weather_status/weather_clouds.svg'
import weatherRain from '../src/assets/weather_status/weather_rain.svg'
import weatherClear from '../src/assets/weather_status/weather_sunny.svg'
import weatherDrizzle from '../src/assets/weather_status/weather_drizzle.svg'
import weatherMist from '../src/assets/weather_status/weather_mist.svg'

// Imgages for weatherBg
import wbgClouds from '../src/assets/weather_bg/wbg_clouds.jpg'
import wbgRain from '../src/assets/weather_bg/wbg_rain.avif'
import wbgClear from '../src/assets/weather_bg/wbg_sunny.jpg'
import wbgdrizzle from '../src/assets/weather_bg/wbg_drizzle.avif'
import wbgMist from '../src/assets/weather_bg/wbg_mist.avif'

// Imgages for dayStatus
import dayClouds from '../src/assets/days_status/days_clouds.svg'
import dayRain from '../src/assets/days_status/days_rain.svg'
import dayClear from '../src/assets/days_status/days_sunny.svg'
import dayDrizzle from '../src/assets/days_status/days_drizzle.svg'
import dayMist from '../src/assets/days_status/days_mist.svg'





function formatTimezone(offset) {
  const hours = Math.floor(offset / 3600);
  const minutes = Math.abs(offset % 3600 / 60);
  const sign = hours >= 0 ? '+' : '-';
  return `GMT${sign}${Math.abs(hours).toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;
}

function formatUnixTimestamp(timestamp, timezoneOffset) {
  const date = new Date((timestamp + timezoneOffset) * 1000);
  return date.toUTCString().replace('GMT', '').trim();
}

export async function getWeather(city) {
  const weatherIcon = document.querySelector('#weather_status');
  const weatherBg = document.querySelector('#weather_bg');
  const body = document.querySelector('body');

  if (city === '') {
    alert('Please enter a city!');
    document.querySelector('#hideBody').classList.add('hidden')
  } else {
    const response = await fetch(`${apiUrl}${city}&appid=${apiKey}&units=metric`);
    const data = await response.json();

    if (data.name && city.toLowerCase() === data.name.toLowerCase()) {
      console.log(data);
    } else {
      alert('City not found!');
      document.querySelector('#hideBody').classList.add('hidden')
    }



    // Hero section
    document.querySelector('#weather_temp').innerHTML = Math.round(data.main.temp) + '°';
    document.querySelector('#weather_location').innerHTML = data.name
    document.querySelector('#weather_country').innerHTML = data.sys.country
    document.querySelector('#weather_timezone').innerHTML = formatTimezone(data.timezone);
    document.querySelector('#weather_time').innerHTML = formatUnixTimestamp(data.sys.sunrise, data.timezone);


    // Info section
    document.querySelector('#weather_humidity').innerHTML = data.main.humidity + '%';
    document.querySelector('#weather_Wspeed').innerHTML = data.wind.speed + 'm/s';
    document.querySelector('#weather_Tmax').innerHTML = Math.round(data.main.temp_max) + '°';
    document.querySelector('#weather_Tmin').innerHTML = Math.round(data.main.temp_min) + '°';
    document.querySelector('#weather_lat').innerHTML = data.coord.lat
    document.querySelector('#weather_lon').innerHTML = data.coord.lon
    document.querySelector('#weather_pre').innerHTML = Math.round(data.main.pressure);
    document.querySelector('#weather_name').innerHTML = data.weather[0].main
    document.querySelector('#weather_des').innerHTML = data.weather[0].description

    // Days section
    const days1_status = document.querySelector('#days1_status')
    document.querySelector('#days1_temp').innerHTML = Math.round(data.main.temp) + '°';
    document.querySelector('#days1_location').innerHTML = data.name
    document.querySelector('#days1_timezone').innerHTML = formatTimezone(data.timezone);

    document.querySelector('#days2_status').innerHTML = data.weather[0].main
    document.querySelector('#days2_temp').innerHTML = Math.round(data.main.temp) + '°';
    document.querySelector('#days2_location').innerHTML = data.name
    document.querySelector('#days2_timezone').innerHTML = formatTimezone(data.timezone);

    const days3_status = document.querySelector('#days3_status')
    document.querySelector('#days3_temp').innerHTML = Math.round(data.main.temp) + '°';
    document.querySelector('#days3_location').innerHTML = data.name
    document.querySelector('#days3_timezone').innerHTML = formatTimezone(data.timezone);
    document.querySelector('#days3_time').innerHTML = formatUnixTimestamp(data.sys.sunrise, data.timezone);

    const days4_status = document.querySelector('#days4_status')
    document.querySelector('#days4_country').innerHTML = data.sys.country
    document.querySelector('#days4_temp').innerHTML = Math.round(data.main.temp) + '°';



    if (data.weather[0].main == 'Clouds') {
      weatherIcon.src = weatherClouds
      weatherBg.src = wbgClouds
      body.style.backgroundColor = '#c6d7de';
      days1_status.src = dayClouds
      days3_status.src = dayClouds
      days4_status.src = weatherClouds

    } else if (data.weather[0].main == 'Clear') {
      weatherIcon.src = weatherClear
      weatherBg.src = wbgClear
      body.style.backgroundColor = '#e7dbb7';
      days1_status.src = dayClear
      days3_status.src = dayClear
      days4_status.src = weatherClear


    } else if (data.weather[0].main == 'Rain') {
      weatherIcon.src = weatherRain
      weatherBg.src = wbgRain
      body.style.backgroundColor = '#bdcfde';
      days1_status.src = dayRain
      days3_status.src = dayRain
      days4_status.src = weatherRain

    } else if (data.weather[0].main == 'Drizzle') {
      weatherIcon.src =  weatherDrizzle
      weatherBg.src = wbgdrizzle
      body.style.backgroundColor = '#cdd1d4';
      days1_status.src = dayDrizzle
      days3_status.src = dayDrizzle
      days4_status.src = weatherDrizzle

    } else if (data.weather[0].main == 'Mist') {
      weatherIcon.src = weatherMist
      weatherBg.src = wbgMist
      body.style.backgroundColor = '#e4e4e9';
      days1_status.src = dayMist
      days3_status.src = dayMist
      days4_status.src = weatherMist
    }

    document.querySelector('#hideBody').classList.remove('hidden')
  }

}
