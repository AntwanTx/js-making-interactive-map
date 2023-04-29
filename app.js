console.log("Javascript connected")

if (!navigator.geolocation) {
    alert("Geolocation is not supported in this browser.");
  } else {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        console.log("Latitude", position.coords.latitude);
        console.log("Longitude", position.coords.longitude);
      },
    );
  }

  const myMap = L.map('map',{
    center: [37.09, -95.71],
    zoom: 12,
  })