<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Tarea DWES9</title>
  <style>
   @import url("estilos.css");
  </style>
</head>
<body>
  <h1>GENERADOR DE ETIQUETAS DE MENSAJERÍA</h1>
  <br>
  <br>
  <div id="tarjeta">
    <?php 
      //hago la llamada a la API que me va a devolver la información en JSON
      $datosPersonales = file_get_contents('https://randomuser.me/api/');
      //decodifico la información recibida, covirtiendola en objeto
      $userdata = json_decode($datosPersonales);
    ?>
  </div>
  <br>
  <br>
  <input type="button" id="boton" name="boton" onclick="nuevaTarjeta()"></input>
  <script src="funciones.js"></script>
</body>
</html>