
const details = new Date();
const day = document.getElementsByClassName('lft')
const dayArr = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
day[0].innerHTML = dayArr[details.getDay()];

const date = document.getElementsByClassName('rgt')
const monthArr = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
date[0].innerHTML = details.getDate() + " " + monthArr[details.getMonth()];

const output = document.getElementsByClassName('output')
output[0].innerHTML = 'Get output here'

const input = document.getElementsByClassName('inp')
const btn = document.getElementsByClassName('btn')
const country = document.getElementsByClassName('country')
console.log(country[0])
const temp = document.getElementsByClassName('temp')
console.log(temp[0])



let JsonData = ''
const getData = async () => {
    let inp = input[0].value
    console.log(inp)

    if (input[0].value === '') {
        output[0].innerHTML = 'Pls write something before searching'
    }
    else{   
    const api = `https://api.openweathermap.org/data/2.5/weather?q=${inp}&units=metric&appid=46465e335778a633dcc3b8725b7638a9`
    try {
        const data = await fetch(api)
        JsonData = await data.json()
        // console.log(JsonData.sys.country)
        output[0].innerHTML = " "
        country[0].innerHTML = `${JsonData.name} ${JsonData.sys.country}`
        temp[0].innerHTML = `${JsonData.main.temp}`+`&degC`
        tempStatus = JsonData.weather[0].main
        tempIcon();

    }
    catch (error) {
        console.error('Error fetching data:', error);
        output[0].innerHTML = "Data Not Found "


    }
}
}


btn[0].addEventListener('click',getData);

input[0].addEventListener('keydown',function(e) {
    if (e.code ==='Enter') {
        getData()
    }
    });

    function tempIcon(){
    const weatherIcon = document.getElementsByClassName('weatherIcon');
    const status = document.getElementsByClassName('status');
    console.log(tempStatus)
            if(tempStatus=='Sunny'){
                // weatherIcon.innerHTML='<i class="fa-sun-o fa-lg">'
                weatherIcon[0].innerHTML='<i class="fa-solid fa-sun "></i>'
                status[0].innerHTML='Sunny'
            }
            else if(tempStatus=='Clouds'){
                weatherIcon[0].innerHTML='<i class="fa-solid fa-cloud "></i>'
                status[0].innerHTML='Clouds'
            }
            else if(tempStatus=='Scattered Clouds'){
                weatherIcon[0].innerHTML='<i class="fa-solid fas fa-cloud-meatball "></i>'
                status[0].innerHTML='Scattered Clouds'
            }
            else if(tempStatus=='Rainy'){
                weatherIcon[0].innerHTML='<i class="fa-solid fas fa-cloud-rain"></i>'
                status[0].innerHTML='Rainy'
            }
            else if(tempStatus=='Clear'){
                weatherIcon[0].innerHTML='<i class="fa-solid fas fa-water "></i>'
                status[0].innerHTML='Clear'
            }
            else if(tempStatus=='Haze'){
                weatherIcon[0].innerHTML='<i class="fa-solid fas fa-wind "></i>'
                status[0].innerHTML='Haze</i>'
            }
            else{
                weatherIcon[0].innerHTML='<i class="fa-regular fa-snowflake "></i>'
                status[0].innerHTML='Not Found</i>'
            }
        }