<?php
require_once "conexion.php";
// Verificar si se ha enviado el formulario de inicio de sesión
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Obtener los datos enviados desde el formulario
    $usuario = $_POST['usuario'];
    $contraseña = $_POST['contraseña'];

    // Realizar la consulta en la base de datos para verificar las credenciales
    $sql = "SELECT * FROM usuarios WHERE Nombre = '$usuario' AND Contraseña = '$contraseña'";
    $resultado = mysqli_query($conexion, $sql);

    // Verificar si se encontró un registro que coincida con las credenciales
    if (mysqli_num_rows($resultado) === 1) {
        // Inicio de sesión exitoso
        // Puedes redirigir al usuario a la página de inicio o a otra sección de tu aplicación
        header('Location: ruta_de_redireccionamiento.php');
        exit();
    } else {
        // Credenciales incorrectas
        echo "Usuario y/o contraseña incorrectos";
    }

    // Liberar el resultado y cerrar la conexión a la base de datos
    mysqli_free_result($resultado);
    mysqli_close($conexion);
}
?>
