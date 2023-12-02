# LinuxAPI

## Estructura de la base de datos:

### db -> distributions
### tables -> users | distributions

### Campos tabla users:          id | username | email | pass
### Campos tabla distributions:  id | name | ver | launch_year | website | info | image 

___________________________________________________________________________________________________________________________

## Endpoints usuarios:

[GET]  localhost:3000/users/ -> Devuelve el listado de todos los usuarios registrados en la tabla users.

[POST] localhost:3000/users/login -> Autoriza al usuario a loguearse comparando la informacion con la base de datos.
### Body para el login:
{
  "email": "correo",
  "pass": "contraseña"
}

[POST] localhost:3000/users/add -> Permite al usuario registrarse en la base de datos.
### Body para el registro:
{
  "username": "nombre de usuario"
  "email": "correo",
  "pass": "contraseña"
}

___________________________________________________________________________________________________________________________

## Endpoints dependencias:

[GET]  localhost:3000/api/ -> Devuelve el listado de todas las dependencias registradas en la tabla distributions

[POST] localhost:3000/api/add -> Permite al usuario agregar una dependencia a la base de datos.
### Body para agregar dependencias:
{
    "name": "nombre",
    "ver": "version",
    "launch_year": 2023,
    "website": "https://www.linuxmint.com",
    "info": "descripcion",
    "image": "https//imagen.png"
}

[PUT] localhost:3000/api/update?id=numero -> Permite al usuario editar la informacion de una dependencia obteniendola por el id.
### Body para editar dependencias:
{
    "name": "nombre",
    "ver": "version",
    "launch_year": 2023,
    "website": "https://www.linuxmint.com",
    "info": "descripcion",
    "image": "https//imagen.png"
}

[DELETE] localhost:3000/api/delete?id=numero -> Permite al usuario eliminar una dependencia específica obteniendola por id


