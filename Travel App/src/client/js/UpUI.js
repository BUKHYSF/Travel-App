//update UI
const upUI = async (imgUrl = '', Departure_Date, Today) => {

    try {
        const request = await fetch('http://localhost:3030/all');
        if (request.ok == true) {
            const sdata = await request.json()
            document.getElementById('info').innerHTML =
                ` 

<h3 class="head">information:</h3>
  <div class="image" style=background-image:url(${imgUrl})></div>
    <div class="textual">
      <p>Distnation: ${sdata.city_name}</p>
     <button id="delete_trip">Delete</button>
     <p>The Contry zip: ${sdata.country_code}.</p>
     <p>The temprature ${sdata.temp}C.</p>
     <p>Departure Date: ${Departure_Date}</p>
     <p>Today: ${Today}</p>
     
     
</div>
  `
            document.getElementById('delete_trip').addEventListener('click', (e) => {
                e.preventDefault()
                document.getElementById('info').innerHTML = '';

            })

        }

    } catch (e) {
        console.log('error', e);
    }
};
export {upUI}