///////////////WEATHER OBJECT API//////////////////
let weather = {
    apiKey: "772a5938a64f5d0f8aa3e42401341db0",
    fetchWeather: function (city) {
        fetch("https://api.openweathermap.org/data/2.5/weather?q="
            + city
            + "&units=imperial&appid="
            + this.apiKey
        )
            .then((response) => response.json())
            .then((data) => this.displayWeather(data))
    },
    displayWeather: function (data) {
        const { name } = data;
        const { icon, description } = data.weather[0];
        const { temp, humidity } = data.main;
        console.log(name, icon, description, temp)
        document.querySelector(".temp-city").innerHTML = "Weather in " + name + " is:";
        document.querySelector(".temp-degree").innerHTML = temp;
        document.querySelector(".temp-description").innerHTML = description;
        document.querySelector(".icon").src = "https://openweathermap.org/img/wn/" + icon + ".png";
    },
    search: function () {
        this.fetchWeather(document.querySelector(".search-bar").value);
    }
}


//add joke button query here and joke html button
const jokeBtn = document.querySelector(".joke-btn")
const jokeSection = document.querySelector(".joke-section")
//declare joke variable = object
async function fetchJoke() {
    const response = await fetch("https://icanhazdadjoke.com", {
        headers: {
            Accept: "application/json",
        },
    });

    const data = await response.json();
    return data

}

async function handleClick(){
    const {joke} = await fetchJoke();
    jokeSection.textContent = joke;
}

jokeBtn.addEventListener("click", handleClick)


// fetchJoke()

//create handleClick function for
// async function handleClick(){
//     const {joke} = await fetchJoke();
//     console.log(joke)
// }

// jokeBtn.addEventListener("click", handleClick)




////this button below will have to have all apis passed into it. 

document.querySelector('.search button').addEventListener("click", function () {
    weather.search();
})

document
    .querySelector(".search-bar")
    .addEventListener("keyup", function (event) {
        if (event.key == "Enter") {
            weather.search();
        }
    });