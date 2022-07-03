"use strict"

const elForm = document.querySelector(".form");
const elInput = document.querySelector(".form__input");
const weathers = document.querySelector(".cards")


elForm.addEventListener ("submit", function (evt){
  evt.preventDefault()

  const location = elInput.value;
  getLocationData(location);

});

const renderWeather = function (data){
  const html = `

  <h1 class="text-center">${data.name}</h1>
  <p class= "text-center fw-semibold" >${data.main.temp} ℃</p>
  <p class= "text-center fw-semibold" >${data.wind.speed} km/h</p>
  `;

  weathers.innerHTML= null
  weathers.insertAdjacentHTML("beforeend" , html)
}

const getLocationData = async function (location){
  try {
    const request = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=277e160f5af509c9f6e384d7cbe3501c`
      );
      const data = await request.json();

      renderWeather(data)
    } catch (err){
      alert("Xato yozildi")
    }
  }
