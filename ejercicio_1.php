<!DOCTYPE html>
<html lang="en">
    <!-- Crea una página capaz de mostrar en pantalla la siguiente información tal y
como aparecen en la imagen siguiente. Utiliza variables para almacenar los
datos. -->
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
<?php

ini_set('display_errors' , 1);
error_reporting(E_ALL);

$nombre = "Juan";
$apellidos = "Palomo Garcia";
$edad = 23;
$domicilio = "c/America ,33";
$cp = 34017;
$tlf = "596209934";
$profesion = "Programador";

echo "Nombre: <strong>".$nombre."</strong><br>";
echo "Apellidos: <strong>".$apellidos."</strong><br>";
echo "Edad: <strong>".$edad."</strong><br>";
echo "Domicilio: <strong>".$domicilio."</strong><br>";
echo "Codigo Postal: <strong>".$cp."</strong><br>";
echo "Teléfono: <strong>".$tlf."</strong><br>";
echo "Profesión: <strong>".$profesion."</strong><br>";
?>


</body>
</html>