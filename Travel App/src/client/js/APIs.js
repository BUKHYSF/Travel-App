import {UpUI} from "./UpUI";




//username yousefli77
const geonames_Url = 'http://api.geonames.org/searchJSON?formatted=true&q=';
const geonames_Key = '&username=yousefli77&style=full';

async function GeoLocation(lct) {

    try {
        const response = await fetch(`${geonames_Url}${lct}${geonames_Key}`)
        if (response.ok == true) {
            let lct = {};
            let info = await response.json();
            lct.latitude = info.geonames[0].latitude;
            lct.longitude = info.geonames[0].longitude;
            lct.countryCode = info.geonames[0].countryCode;

            return lct;
        }

    } catch (e) {
        console.log(e)
    }

}


const Pixabay_URL = 'https://pixabay.com/api/?key=';
const Pixabay_Key = '16503946-d1f35f9e2324d7bee33a65c0f';

async function Image(n_city, n_country) {
    let Query_City = `&q=${n_city}&image_type=photo&pretty=true&category=places`;
    let city_Endpoints = Pixabay_URL + Pixabay_Key + Query_City;
    let Query_Country = `&q=${n_country}&image_type=photo&pretty=true&category=places`;
    let country_Endpoints = Pixabay_URL + Pixabay_Key + Query_Country;

    try {
        let response = await fetch(city_Endpoints)
        if (response.ok == true) {
            let info = await response.json();
            if (info.totalHits === 0) {
                
                
            // if we got problem with it so find pic of country instead
                response = await fetch(country_Endpoints);
                if (response.ok == true) {
                    info = await response.json();
                    console.log(info)
                    return info.hits[0].webformatURL;
                }
            }
            console.log(info)
            return info.hits[0].webformatURL;
        }
    } catch (e) {
        console.log(e)
    }
}



const weatherbitURL = 'http://api.weatherbit.io/v2.0/forecast/daily?';
const weatherbitAPIKEY = '&key=c192bd3ee38b46f38560802bc8ee77d1';


async function Weather(latitude, longitude) {
    const point = `${weatherbitURL}&latitude=${latitude}&longitude=${longitude}${weatherbitAPIKEY}`;
    try {
        const response = await fetch('http://localhost:3030/forecast', {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                point: point,

            })
        });

        if (response.ok == true) {
            let info = await response.json()
            console.log(info)
            return info;

        }
    } catch (e) {
        console.log(e);
    }


}

export {GeoLocation, Image, Weather};