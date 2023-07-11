<?php
$servername = "localhost";
$username = "root";
$password = "admin";
$dbname = "imprenta_chilalo";

// Crear la conexión
$conexion = mysqli_connect($servername, $username, $password, $dbname);

// Verificar la conexión
if (!$conexion) {
    die("Error de conexión: " . mysqli_connect_error());
}
?>
