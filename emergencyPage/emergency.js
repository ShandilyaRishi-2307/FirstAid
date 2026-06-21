const demo = document.getElementById("demo");
const districtPara = document.getElementById("district");

function getLocation() {

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    }
    else {
        demo.innerHTML = "Geolocation is not supported.";
    }

}

const district = document.getElementById("district");

async function showPosition(position){

    const lat = position.coords.latitude;
    const lon = position.coords.longitude;

    demo.innerHTML =
    "Latitude : " + lat +
    "<br>Longitude : " + lon;

    try{

        const response = await fetch(
            `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lon}&localityLanguage=en`
        );

        const data = await response.json();

        district.innerHTML =
            "District: " + data.locality +
            "<br>🏛️ State: " + data.principalSubdivision;

    }

    catch(error){

        district.innerHTML = "Unable to fetch district.";

    }
}

function openPage(page) {
    window.location.href = page;
}
