
## Checar logs de backend docker producción
docker compose logs -f backend

## Formato para recibir un usuario al iniciar sesion
endpoint tipo POST: http://200.234.224.102/user
````
{
  "correo":"juan.perez@example.com",
  "contraseña":"hashed_password"
}
````

## Formato para recibir un nuevo usuario registrado
endpoint tipo POST: http://200.234.224.102/register
````
{
    "nombre": "María",
    "apellidoM": "López",
    "apellidoP": "Sánchez",
    "edad": 28,
    "pais": "México",
    "correo": "jose@example.com",
    "telefono": "9876543210",
    "contraseña": "secure_password"
}
````

## Formato para agregar dispositivo a un usuario
endpoint tipo POST: http://200.234.224.102/dispositivo
````
{
    "id":"71iqo23iojw-lksnlklsnjskjiwqk",
    "nombreArea": "Sala de servidores",
    "metrosCuadrados": 50,
    "tipoConsumo": "220v",
    "edificio": "Edificio A"
}
````