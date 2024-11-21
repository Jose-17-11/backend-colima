
## Checar logs de backend docker producción
docker compose logs -f backend

<!--                             Endpoints de usuarios                                         -->

## Formato para recibir los datos de un usuario en especifico
endpoint tipo GET: http://200.234.224.102/user/673e199a5c3926427e81db00
Lo unico que necesario seria obtener el id del localstorage y agregarlo como parametro en la url del endpoint

## Formato para ingresar un usuario al iniciar sesion
endpoint tipo POST: http://200.234.224.102/user
````
{
  "correo":"juan.perez@example.com",
  "contraseña":"hashed_password"
}
````

## Formato para registrar un nuevo usuario
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
<!--                                    Endpoints de dispositivos                                 -->
## Formato para obtener dispositivos que son propiedad de un usuario logueado
endpoint tipo GET: http://200.234.224.102/dispositivo/ID_USER

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

<!--                                       Endpoints para el monitoreo del sensor                    -->
## Formato para almacenar datos de sensor
endpoint POST http://200.234.224.102/monitoreo
### Hay posibles objetos que puede recibir el endpoint entre esos los siguientes objetos
{
  "dispositivo_id": "60c72b2f9e1d8a001f8c6d0e",
  "fecha": "2024-11-20",
  "hora": "15:00:00"
}

{
  "dispositivo_id": "63f9b69b349a6b17b982c57e", // ID de dispositivo (debe ser un ObjectId válido)
  "fecha": "2024-11-20",
  "hora": "15:00:00",
  "consumo": {
    "cada5min": 2.5,
    "cada10min": 5,
  },
  "acumulativoSemanal": 840
}
