import {GeoLocation, Image, Weather} from './APIs'
import {upUI} from "./UpUI";


function Year() {
    const selectElement =
        document.getElementById('year');
    const year = selectElement.value;
    return year;
}

function Month() {
    const selectElement =
        document.getElementById('month');
    const month = selectElement.value;
    return month;
}

function Day() {
    const selectElement =
        document.getElementById('day');
    const day = selectElement.value;
    return day;
}


let sdate = new Date();
// to change Date and select new
let N_Date = sdate.Month() + '/' + sdate.Date() + '/' + sdate.Year();


// manage trip and select bottom !! 
const save_trip = document.getElementById('save_trip');
const delete_trip = document.getElementById('delete_trip');
const search_button = document.getElementById('submit_button');

// select name of city
let c_name = document.getElementById('city_name');


// using of (event_listener)
const information = async (e) => {
    let day = Day();
    let month = Month();
    let year = Year();

 // to slect the date of trip
    
    const T_Date = day + '/ ' + month + '/ ' + year;

    
    e.preventDefault();
    
    const city = await GeoLocation(c_name.value)
    const weather = await Weather(city.latitude, city.longitude)
    const url = await Image(c_name.value, city.countryCode)

    
    // for update ui
    
    await upUI(url, T_Date, N_Date)


}
search_button.addEventListener('click', information);

//cneck date !! if it is equal or greter than 8
function checkDate(day, month, year) {
    return !((day - sdate.Date()) >= 8 || (month > sdate.Month() || year > sdate.Year()));
}


export {information}



