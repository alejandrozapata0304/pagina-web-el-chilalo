<?php
require_once "conexion.php";

// Verificar si se ha enviado el formulario de registro
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Obtener los datos enviados desde el formulario
    $nombre = $_POST['nombre'];
    $gmail = $_POST['gmail'];
    $contrasena = $_POST['contrasena'];

    // Realizar la consulta en la base de datos para insertar los datos del nuevo usuario
    $sql = "INSERT INTO usuarios (Nombre, Gmail, Contraseña) VALUES ('$nombre', '$gmail', '$contrasena')";
    
    // Ejecutar la consulta
    if (mysqli_query($conexion, $sql)) {
        // Registro exitoso
        echo "Registro exitoso";
    } else {
        // Error en el registro
        echo "Error en el registro: " . mysqli_error($conexion);
    }

    // Cerrar la conexión a la base de datos
    mysqli_close($conexion);
}
?>

