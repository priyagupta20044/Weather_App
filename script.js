
    const apikey = "b9ffe551747afda39e9a10678a05a01a";
    const apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
    const searchbox = document.querySelector(" .search input");
    const searchbtn = document.querySelector(" .search button");
    const weathericon = document.querySelector(" .weathericon");


    
    async function checkweather(city){
        const response = await fetch(apiurl + city + `&appid=${apikey}`); 
        
        // console.log(data);
        if (response.status == 404){
            document.querySelector(".error").style.display = "block";
            document.querySelector(".weather").style.display = "none";
        }
        else{
            var data = await response.json();
            document.querySelector(".error").style.display = "none";
            document.querySelector(".city").innerHTML = data.name;
            document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
            document.querySelector(".humidity").innerHTML = data.main.humidity  + " %";
            document.querySelector(".wind").innerHTML = data.wind.speed + " Km/Hr"; 

            if (data.weather[0].main =="Clouds"){
                weathericon.src = "image/clouds.png" ;
            }
            else if (data.weather[0].main =="Clear"){
                weathericon.src = "image/clear.png" ;
            }
            else if (data.weather[0].main =="Drizzle"){
                weathericon.src = "image/drizzle.png" ;
            }
            else if (data.weather[0].main =="Mist"){
                weathericon.src = "image/mist.png" ;
            }
            else if (data.weather[0].main =="Rain"){
                weathericon.src = "image/rain.png" ;
            }
            else if (data.weather[0].main =="Snow"){
                weathericon.src = "image/snow.png" ;
            }

            document.querySelector(".weather").style.display="block"
        }
    }

    searchbtn.addEventListener("click", ()=>{
        checkweather(searchbox.value);
    })
