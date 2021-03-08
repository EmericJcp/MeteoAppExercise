const form = document.getElementById('form');
const input = document.getElementById('input');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const url = 'https://api.openweathermap.org/data/2.5/weather?q=' + input.value + '&appid=ff349be070b028d291296e97b0cc432c&units=metric';
    let request = new XMLHttpRequest();

    request.open('GET', url);
    request.responseType = 'json';
    request.send();

    request.onload = () => {
        if(request.readyState === XMLHttpRequest.DONE) {
            if(request.status === 200) {
                let responseStocked = request.response;
                let weatherTemp = responseStocked.main.temp;
                let weatherCountry = responseStocked.sys.country
                let weatherDescription = responseStocked.weather[0].description

                document.getElementById("title").className = "hiddenTitle";
                let temp = document.getElementById('temperature').textContent = weatherTemp + '°';
                let city = document.getElementById('city').textContent = input.value;
                let country = document.getElementById('country').textContent = weatherCountry;
                let description = document.getElementById('description').textContent = weatherDescription;
            } else {
                input.classList.add("error")
            }
        }
    }
    input.classList.remove("error")
})


customNodeCreator = (character) => {
    input.placeholder = input.placeholder + character;
  }
  
onRemoveNode = () => {
    if(input.placeholder) {
      input.placeholder = input.placeholder.slice(0, -1)
    }
  }
  
let typewriter = new Typewriter(null, {
    loop: true,
    delay: 150,
    onCreateTextNode: customNodeCreator,
    onRemoveNode: onRemoveNode,
  });

typewriter
.typeString('City')
.pauseFor(1000)
.start();