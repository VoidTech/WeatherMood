var week = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
var urlWeatherNow = "https://apidev.accuweather.com/currentconditions/v1/314929.json?language=en&apikey=hoArfRosT1215";
            $.get(urlWeatherNow, function(data,textStatus,jqXHR){
              var today = new Date().getDay();
              var responseBody = data;
              var icon = responseBody[0].WeatherIcon;
              var weather = responseBody[0].WeatherText;
              var temperature = responseBody[0].Temperature.Metric.Value;
              var unit = responseBody[0].Temperature.Metric.Unit;
              $('#text-name').text(week[today] + " " + temperature + "°" +
              unit + " " + weather );
               var string = "";

               switch(weather)
               {
                 case 'Sunny':string = "sunny"; url; break;
                 case 'Mostly sunny': string = "rock";  url; break;
                 case 'Partly sunny':string = "chill"; url; break;
                 case 'Intermittent Clouds': string = "rock";  url; break;
                 case 'Hazy Sunshine':string = "Happy"; url; break;
                 case 'Mostly cloudy': string = "rock";  url; break;
                 case 'Cloudy':string = "chill"; url; break;
                 case 'Dreary': string = "chill"; url; break;
                  case 'Fog':  string = "chill";  url; break;
                 case 'Showers': string = "rainy"; url; break;
                  case 'Mostly Cloudy w/Showers':  string = "rainy";  url; break;
                 case 'Partly Sunny w/Showers': string = "happy"; url; break;
                  case 'T-Stroms':  string = "rainy";  url; break;
                 case 'Mostly Cloudy w/ T-Storms': string = "rainy"; url; break;
                  case 'Partly Sunny w/ T-Storms':  string = "chill";  url; break;
                 case 'Rain': string = "rainy"; url; break;
                  case 'Flurries':  string = "rainy";  url; break;
                 case 'Mostly Cloudy w/ Flurries': string = "chill"; url; break;
                  case 'Partly Sunny w/ Flurries':  string = "chill";  url; break;
                 case 'Snow': string = "christmas"; url; break;
                  case 'Mostly Cloudy w/ Snow':  string = "christmas";  url; break;
                 case 'Ice': string = "christmas"; url; break;
                  case 'Sleet':  string = "christmas";  url; break;
                 case 'Freezing Rain': string = "christmas"; url; break;
                  case 'Rain and Snow':  string = "christmas";  url; break;
                 case 'Hot': string = "summer"; url; break;
                  case 'Cold':  string = "acustic";  url; break;
                 case 'Windy': string = "rock"; url; break;
                  case 'Clear':  string = "rock";  url; break;
                 case 'Mostly Clear': string = "night"; url; break;
                  case 'Partly Cloudy':  string = "night";  url; break;
                 case 'Intermittent Clouds': string = "night"; url; break;
                  case 'Hazy Moonlight':  string = "night";  url; break;
                 case 'Mostly Cloudy': string = "night"; url; break;
                  case 'Partly Cloudy w/ Showers':  string = "night";  url; break;
                 case 'Mostly Cloudy w/ Showers': string = "night"; url; break;
                  case 'Partly Cloudy w/ T-Storms':  string = "night";  url; break;
                 case 'Mostly Cloudy w/ T-Storms': string = "night"; url; break;
                  case 'Mostly Cloudy w/ Flurries':  string = "night";  url; break;
                 case 'Mostly Cloudy w/ Snow': string = "night"; url; break;

               }
               var url = ("https://api.spotify.com/v1/search?query=" + string + "&offset=0&limit=20&type=playlist");

               $.get(url, function(data,textStatus,jqXHR){
                 var urls = [];
                 var urlSpotify = [];
                 // Fyller på Arrayer med image sources och url;er till spellistor

            for(var i = 0; i <= 5; i++)
            {
                 var imgVar = "#img" + (i+1);
                 var linkVar = "#link" + (i+1);
                 var playlistVar = "#playlist_" + (i+1);
                 urls.push(data.playlists.items[i].images[0].url);
                 urlSpotify.push(data.playlists.items[i].external_urls.spotify);
                 $(imgVar).attr("src",urls[i]);
                 $(linkVar).attr("href",urlSpotify[i]);
                 $(playlistVar).text(data.playlists.items[i].name);
            }

         });
       });
