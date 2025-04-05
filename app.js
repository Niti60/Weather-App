let citysearch = document.querySelector("#citysearch");
let city = document.querySelector("#city");
let temp = document.querySelector("#temp");
let description = document.querySelector(".description");
let clouds = document.querySelector("#clouds");
let Humidity = document.querySelector("#Humidity");
let Pressure = document.querySelector("#Pressure");
let form = document.querySelector("form");
let errmsg = document.querySelector(".errmsg");
let degree = document.querySelector(".degree");
form.addEventListener("submit",(e)=>{
    e.preventDefault()
    if (citysearch.value !== "") {
        weather()
    }
})


// let url = 'https://api.openweathermap.org/data/2.5/weather?q=' + citysearch.value + '&appid=' + id;

const weather = () => {
    let cityApi = citysearch.value;
    console.log(cityApi)
    let id = '234da90184fc662db6eeea726c0681b9';
let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityApi}&appid=${id}`;
 fetch(url)
.then((response) => response.json())
.then((data) =>{
    console.log(data)
    if(data.cod == 400||data.cod == 404){
        errmsg.classList.add("active");
        setTimeout(()=>{  
            errmsg.classList.remove("active")
        },2000)
    }
    else if(data.cod == 200){
       document.querySelector("#Cname").innerHTML = data.name;
       city.querySelector("img").src='https://flagsapi.com/'+data.sys.country+'/shiny/64.png'
       temp.querySelector("img").src = 'https://openweathermap.org/img/wn/'+data.weather[0].icon+'@4x.png'
       description.innerHTML = data.weather[0].description;
       degree.innerHTML = Math.round(data.main.temp - 273.15) + '°C';
       clouds.innerHTML = data.clouds.all + '%';
        Humidity.innerHTML = data.main.humidity + '%';
        Pressure.innerHTML = data.main.pressure + '  hPa';
        citysearch.value =""
    }
})

}
