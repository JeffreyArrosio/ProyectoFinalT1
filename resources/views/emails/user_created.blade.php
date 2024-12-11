<!DOCTYPE html>
<html>

<head>
    <title>Cuenta creada</title>
</head>

<body>
    <h1>Hola {{ $user->name }},</h1>
    <p>Tu cuenta ha sido creada con éxito.</p>
    <p>Tu correo es: <strong>{{ $user->email }}</strong></p>
    <p>
        Tu contraseña es: <strong>{{ $password }}</strong>, te recomendamos enormemente cambiar
        está nada más acceder a tu usuario por una de tu agrado.
    </p>
    <p>¡Esperamos que disfrutes de nuestros servicios!</p>
</body>

</html>