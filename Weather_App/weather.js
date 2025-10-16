// function defaultWeather(){
//   // This function gets default weather data where user currently resides. By using geolocation API
//   if(navigator.geoLocation){
//     navigator.geolocation.getCurrentPosition(success, error);
//   } else {
//     alert("Your browser doesn't support geolocation api");
//   }
// }
// function success(position){
//   let latitude = position.coords.latitude;
//   let longitude = position.coords.longitude;
//   let placeName = document.getElementById('placeName');
//   let icon = document.getElementById('icon');
//   let degree = document.getElementById('degree');
//   let time = document.getElementById('time');
//   let otherDetails = document.querySelectorAll('.other-details');
//   let currentDate = new Date();
//   let year = currentDate.getFullYear();
//   let month = currentDate.getMonth()+1;
//   let day = currentDate.getDate();
//   let shortDayName = (date, locale) => {
//     return date.toLocaleDateString(locale, {weekday: 'short'});
//   }
//   let formattedDate = `${day}/${month}/${year} ${shortDayName(new Date())}`;
//   let weatherDescription = document.getElementById('weather-description');
//   fetch(`http://api.weatherstack.com/current?access_key=b63eaa72b4f1579c8ab0357ca6f11cdb&query=${latitude},${longitude}
// `)
// .then(response => {
//   if(!response.ok){
//     throw new Error(`HTTP error! status : ${response.status}`);
//   }
//   return response.json();
// })
// .then(data => {
//   console.log(data)
//   placeName.textContent = data.location.name;
//   icon.src = data.current.weather_icons;
//   weatherDescription.textContent = data.current.weather_descriptions;
//   degree.textContent = data.current.temperature + "°C";
//   time.textContent = formattedDate;
//   otherDetails[0].textContent = `Humidity: ${data.current.humidity}`;
//   otherDetails[1].textContent = `Wind Speed: ${data.current.wind_speed}`;
//   otherDetails[2].textContent = `Direction: ${data.current.wind_dir}`;
// })
// .catch(error => {
//   console.log(error);
// })
// }
// function error(){
//   alert("Unable to retrieve your location");
// }

function searchPlace(){
  // this function will run after button is clicked
  let search = document.getElementById('search');
  let placeName = document.getElementById('placeName');
  let icon = document.getElementById('icon');
  let degree = document.getElementById('degree');
  let time = document.getElementById('time');
  let otherDetails = document.querySelectorAll('.other-details');
  let currentDate = new Date();
  let year = currentDate.getFullYear();
  let month = currentDate.getMonth()+1;
  let day = currentDate.getDate();
  let shortDayName = (date, locale) => {
    return date.toLocaleDateString(locale, {weekday: 'long'});
  }
  let formattedDate = `${day}/${month}/${year} ${shortDayName(new Date())}`;
  let weatherDescription = document.getElementById('weather-description');

  fetch(`http://api.weatherstack.com/current?access_key=b63eaa72b4f1579c8ab0357ca6f11cdb&query=${search.value}
`)
.then(response => {
  if(!response.ok){
    throw new Error(`HTTP error! status : ${response.status}`);
  }
  return response.json();
})
.then(data => {
  console.log(data)
  placeName.textContent = data.location.name;
  icon.src = data.current.weather_icons;
  weatherDescription.textContent = data.current.weather_descriptions;
  degree.textContent = data.current.temperature + "°C";
  time.textContent = formattedDate;
  otherDetails[0].textContent = `Humidity: ${data.current.humidity}`;
  otherDetails[1].textContent = `Wind Speed: ${data.current.wind_speed}`;
  otherDetails[2].textContent = `Direction: ${data.current.wind_dir}`;
})
.catch(error => {
  console.log(error);
})

}

// defaultWeather()