

const apiKey = '784b1dea852135a0d7523cf5067fbd61';

async function fetchWeatherData(city) {
    try {
        const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`
        );

        if (!response.ok) {
            throw new Error('Weather data not available');
        }

        const data = await response.json();

        console.log(data);

        fetchDisplayData(data);

    } catch (error) {
        console.error('Error fetching weather data:', error.message);
    }


}


 



  const cityElement = document.querySelector(".city");
  const date= document.querySelector(".date");
  const weather= document.querySelector(".description-text");
  const weatherIcon= document.querySelector(".description i");
  const temperature = document.querySelector(".tem")
  

  const windSpeed = document.querySelector(".wind-speed");
  const humidity= document.querySelector(".humidity");
  const visibility= document.querySelector(".visibility-distance");
  

  

  function fetchDisplayData(data){
        
      cityElement.textContent = data.name;
      temperature.textContent =`${Math.round( data.main.temp)}°`;
      windSpeed.textContent = `${data.wind.speed} km/h`;
      humidity.textContent = `${data.main.humidity}% `;
      visibility.textContent = `${data.visibility /1000} km`;
      weather.textContent = `${data.weather[0].description}`;

      const currentDate = new Date();
      date.textContent = currentDate.toDateString();


      const weatherIconName = getWeatherIconName(data.weather[0].main);
      weatherIcon.innerHTML = ` <i class="material-icons">${weatherIconName}</i>`;
  }









  const formElement = document.querySelector(".search-form");
  const inputBox = document.querySelector(".city-input");


   formElement.addEventListener( 'submit', function(e){

            e.preventDefault();

            const city = inputBox.value;
            if(city!==" "){
                fetchWeatherData(city);

            }



   });




     














    function getWeatherIconName(weatherCondition){

                const iconMap = {
                    
                    Clear: "wb-sunny",
                    Clouds: "wb-cloudy",
                    Rain: "umbrella",
                    Thunderstom: "flash_on",
                    Deizzle: "grain",
                    Snow: "ac_unit",
                    Mist: "cloud",
                    Smoke: "cloud",
                    Haze: "cloud",
                    Fog: "cloud",
     

  };

     return iconMap[weatherCondition]  || "help"     


    }







    


    // document.addEventListener('DOMContentLoaded', function () {
    //     // Get the element containing your name
    //     var yourNameElement = document.getElementById('yourName');
      
    //     // Show your name
    //     yourNameElement.style.display = 'block';
        
      
    //     // Hide your name after 5 seconds
    //     setTimeout(function () {
    //       yourNameElement.style.display = 'none';
    //     }, 5000);

    //   });
      
     
      
const yourNameElement = document.getElementById('yourName');


let isVisible = true;


function toggleVisibility() {

    if (isVisible) {
        yourNameElement.style.display = 'none';
    } else {
        yourNameElement.style.display = 'block';
    }

    isVisible = !isVisible;
}

setInterval(toggleVisibility, 4000);