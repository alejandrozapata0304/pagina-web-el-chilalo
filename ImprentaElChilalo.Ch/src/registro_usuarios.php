<!DOCTYPE html>
<html>
<head>
    <title>Registro Exitoso</title>
    <style>
        body {
            background-color: black;
        }
    </style>
</head>
<body>
<?php 

// Obtener los datos del formulario de registro
$nombre = $_POST['nombre'];
$email = $_POST['email'];
$contrasena = $_POST['contrasena'];

// Cifrar la contraseña utilizando password_hash()
$contrasena_cifrada = password_hash($contrasena, PASSWORD_DEFAULT);

// Validar los datos (puedes agregar más validaciones según tus requisitos)

// Conectar a la base de datos (asegúrate de reemplazar los valores de conexión con los tuyos)
$servername = "localhost";
$username = "root";
$password = "admin";
$dbname = "imprenta_chilalo";

$conn = new mysqli($servername, $username, $password, $dbname);
if ($conn->connect_error) {
    die("La conexión falló: " . $conn->connect_error);
}

// Verificar si el email ya está registrado
$sql = "SELECT * FROM usuarios WHERE email = '$email'";
$result = $conn->query($sql);
if ($result->num_rows > 0) {
    echo "El email ya está registrado.";
    exit;
}

// Insertar el nuevo usuario en la base de datos
$sql = "INSERT INTO usuarios (nombre, email, contrasena) VALUES ('$nombre', '$email', '$contrasena_cifrada')";
if ($conn->query($sql) === TRUE) {

    echo "<div id='mensaje' style='background-color: black; margin-top: 80px; color: white; padding: 20px; text-align: center; font-size: 35px; font-family: Rubik, sans-serif;'>Registro exitoso. Serás redirigido en unos segundos...</div>";
    echo "<img src='media/registro_exitoso.png' alt='Imagen' style='display: block; margin: 0 auto;'>";
    echo "<script>setTimeout(function() { window.location.href = 'login.html'; }, 5000);</script>";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
?>