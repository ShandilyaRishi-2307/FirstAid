const demo = document.getElementById("demo");

function getLocation(){

    if(navigator.geolocation){

        navigator.geolocation.getCurrentPosition(showPosition);

    }
    else{
        demo.innerHTML = "Geolocation is not supported.";
    }
}

function showPosition(position){

    demo.innerHTML =
    "Latitude : " +
    position.coords.latitude +
    "<br>Longitude : " +
    position.coords.longitude;
}



const hospitalBtn = document.getElementById("hospitalBtn");

hospitalBtn.addEventListener("click",()=>{

    if(navigator.geolocation){

        navigator.geolocation.getCurrentPosition((position)=>{

            const lat = position.coords.latitude;
            const lon = position.coords.longitude;

            window.open(
`https://www.google.com/maps/search/hospitals/@${lat},${lon},15z`
            );

        });

    }

});