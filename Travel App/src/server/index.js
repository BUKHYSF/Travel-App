const  path = require('path')
const  bodyParser = require('body-parser');
const dotenv = require('dotenv');
const express = require('express')
const app = express()
const cors = require('cors')

let async = require('express-async-errors')
let fetch = require('node-fetch')

// save data to use them latter
let pjData = {}


// Configration
dotenv.config();

// now we use cors, middle-ware

app.use(cors())
app.use(bodyParser.urlencoded({extended: false})); //encode value
app.use(bodyParser.json()) //json !! 

app.use(express.static('dist'))



//get fun with reqest and resopnse to dist
app.get('/', function (req, res) {
    res.sendFile(path.resolve('dist/index.html'))
})


//pagereloading fun with reqest and resopnse to dist 

function pagereloading(req, res) {
    res.sendFile(path.resolve('dist/index.html'))
}


// port 
const port = 3030
app.listen(port, function () {
    console.log(`Example app listening on ${port} !`);


app.post('/forecast', async (req, res, next) => {
    if (req.body.endpoint !== " ") {
        const endpoint = req.body.endpoint;
        try {
            const response = await fetch(endpoint);
            if (response.ok== true) {
                const data = await response.json();
                pjData.city = data.city;
                pjData.zipcountry = data.zipcountry;
                pjData.timezone = data.timezone;
                pjData.temper = data.data[0].temper;
                console.log(pjData);
                res.status(160).send(data);
            }
        } catch (error) {
            console.log(error);
        }
    } else {
        res.status(400).json('Bad Request');
    }
});

app.get('/all', (req, res) => {
    res.send(pjData);
})
// mow we export pagereloading
export {pagereloading}






