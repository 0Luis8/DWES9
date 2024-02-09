function nuevaTarjeta() {
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = nuevoPerfil;
  xhr.open("GET", "https://randomuser.me/api/", true);
  xhr.send();

  function nuevoPerfil(){
    if (xhr.readyState === 4 && xhr.status === 200) {
      var data = JSON.parse(xhr.responseText);
      var tarjetaElement = document.getElementById("tarjeta");
      var userData = data.results[0];

      tarjetaElement.innerHTML = `
        <p><strong>Nombre y Apellidos: </strong>${userData.name.first} ${userData.name.last}</p>
        <p><strong>Dirección: </strong>${userData.location.street.name} ${userData.location.street.number}</p>
        <p><strong>CP: </strong>${userData.location.postcode}<strong> Ciudad: </strong>${userData.location.city} (${userData.location.country})</p>
        <p><strong>Email: </strong>${userData.email}</p>
        <p><strong>Telefono: </strong>${userData.phone}</p>
      `;
    }
  }
}
