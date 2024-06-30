

const apiKey = 'd7fc45f4b3c1ebdd5ada6afd67936c4f'
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?q=';
const apiFore = 'api.openweathermap.org/data/2.5/forecast?lat=';

// Imgages for weatherBg
const wbgClouds ='./src/assets/weather_bg/wbg_clouds.jpg'
const wbgRain ='./src/assets/weather_bg/wbg_rain.avif'
const wbgClear ='./src/assets/weather_bg/wbg_sunny.jpg'
const wbgdrizzle ='./src/assets/info_status/drizzle.svg'
const wbgMist ='./src/assets/info_status/mist.svg'


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

    const days2_status = document.querySelector('#days2_status')
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
      weatherIcon.src = './src/assets/weather_status/weather_clouds.svg'
      weatherBg.src = wbgClouds
      body.style.backgroundColor = '#c6d7de';
      days1_status.src = './src/assets/days_status/days_clouds.svg'
      days2_status.src = './src/assets/days_status/days_clouds.svg'
      days3_status.src = './src/assets/days_status/days_clouds.svg'
      days4_status.src = './src/assets/weather_status/weather_clouds.svg'

    } else if (data.weather[0].main == 'Clear') {
      weatherIcon.src = './src/assets/weather_status/weather_sunny.svg'
      weatherBg.src = wbgClear
      body.style.backgroundColor = '#e7dbb7';
      days1_status.src = './src/assets/days_status/days_sunny.svg'
      days2_status.src = './src/assets/days_status/days_sunny.svg'
      days3_status.src = './src/assets/days_status/days_sunny.svg'
      days4_status.src = './src/assets/weather_status/weather_sunny.svg'


    } else if (data.weather[0].main == 'Rain') {
      weatherIcon.src = './src/assets/weather_status/weather_rain.svg'
      weatherBg.src = wbgRain
      body.style.backgroundColor = '#bdcfde';
      days1_status.src = './src/assets/days_status/days_rain.svg'
      days2_status.src = './src/assets/days_status/days_rain.svg'
      days3_status.src = './src/assets/days_status/days_rain.svg'
      days4_status.src = './src/assets/weather_status/weather_rain.svg'

    } else if (data.weather[0].main == 'Drizzle') {
      weatherIcon.src = './src/assets/weather_status/weather_drizzle.svg'
      weatherBg.src = wbgdrizzle
      body.style.backgroundColor = '#cdd1d4';
      days1_status.src = './src/assets/days_status/days_drizzle.svg'
      days2_status.src = './src/assets/days_status/days_drizzle.svg'
      days3_status.src = './src/assets/days_status/days_drizzle.svg'
      days4_status.src = './src/assets/weather_status/weather_drizzle.svg'

    } else if (data.weather[0].main == 'Mist') {
      weatherIcon.src = './src/assets/weather_status/weather_mist.svg'
      weatherBg.src = wbgMist
      body.style.backgroundColor = '#e4e4e9';
      days1_status.src = './src/assets/days_status/days_mist.svg'
      days2_status.src = './src/assets/days_status/days_mist.svg'
      days3_status.src = './src/assets/days_status/days_mist.svg'
      days4_status.src = './src/assets/weather_status/weather_mist.svg'
    }

    document.querySelector('#hideBody').classList.remove('hidden')
  }

}
