// grabbing id from html page
let searchBtn = $("#search-button");
let searchInput = $("#search-input");
let sideBar = $("#search-aside");
let todayWeather = $("#today");

//variables
let citySearch;
var lat;
var long;
let responseGrab; 
let day; 
let cardTimes; 
var btnList = $("#history");
let historyTitle = $("<h4>");
historyTitle.attr("id", "recent-header")
historyTitle.html('<i class="fa-solid fa-clock-rotate-left"></i>  Recent searches:');
var locationBtn;
let locationsArr = [];
let historyArr = [];

//todays weather
let cityName;
let todaysDate;
let tempKelv;
let celsius;
let wind;
let humidity;
let todayIconCode;

//forecast 
let tempKelvFC;
let celsiusFC = (tempKelvFC - 273.15).toFixed(2);
let windFC;
let humidityFC;
let iconFC;

//forecast cards:
let foreCast = $("#forecast");
let fiveDay = $("<h3>").addClass("fiveDayTitle");
fiveDay.text("5 Day Forecast:");

//momentjs for dates:
let today = moment().format("D/MM/YYYY");
let day1 = moment().add(1, "days").format("D/MM/YYYY");
let day2 = moment().add(2, "days").format("D/MM/YYYY");
let day3 = moment().add(3, "days").format("D/MM/YYYY");
let day4 = moment().add(4, "days").format("D/MM/YYYY");
let day5 = moment().add(5, "days").format("D/MM/YYYY");
