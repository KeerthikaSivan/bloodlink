document.addEventListener("DOMContentLoaded", () => {
  const defaultCoords = [11.0168, 76.9558]; // Example: Coimbatore

  const map = L.map("map").setView(defaultCoords, 13);

  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: '&copy; OpenStreetMap contributors',
  }).addTo(map);

  const marker = L.marker(defaultCoords, { draggable: true }).addTo(map);

  marker.on('dragend', function(e) {
    const latLng = e.target.getLatLng();
    document.getElementById("location-text").value = `${latLng.lat.toFixed(5)}, ${latLng.lng.toFixed(5)}`;
  });

  document.getElementById("location-text").value = `${defaultCoords[0]}, ${defaultCoords[1]}`;
});
