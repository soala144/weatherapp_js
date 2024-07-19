//JSON method
(
    function(){
        var weather={
            "API_key" :"d150e6172dab7176bc586443a59e9d98",
            fetch_weather : function(City){
                fetch("https://api.openweathermap.org/data/2.5/weather?q="+City+"&units=metric&appid="+this.API_key)
                .then((response) => response.json())
                .then((data) => this.displayWeather(data))
                console.log(data)
            },
            displayWeather: function(data) {
                const{name}=data;
                const{icon, description}=data.weather[0];
                const{temp, humidity}=data.main;
                const{speed}=data.wind;
                document.querySelector(".city").innerHTML=`weather in ${name}`;
                document.querySelector(".temp").innerHTML=`${temp}&#8451`;
                document.querySelector(".icon").src=`https://api.openweathermap.org/img/wn/${icon}.png`;
                document.querySelector(".description").innerHTML=`${description}`;
                document.querySelector("humidity").innerHTML=`humidity: ${humidity}%`;
                document.querySelector("wind").innerHTML=`wind Speed: ${speed}km/h`;
                
            },
            search: function(){
                this.fetch_weather(document.querySelector(".search_bar").value)
            }
            
        }
        document.querySelector(".search button").addEventListener("click", function(){
            weather.search();
        })

        document.querySelector(".search_bar").addEventListener("keyup", function(){
            if(event.key=="Enter"){
                weather.search();
            }
        })
    }
)();

    var City="Lagos"
    var API_key ="d150e6172dab7176bc586443a59e9d98"
fetch("https://api.openweathermap.org/data/2.5/weather?q="+City+"&appid="+API_key)
                .then((response) => response.json())
                .then((data) => console.log(data))
                //console.log(data)