# API REST de Videojuegos y Reseñas

## El tema que he elegido

Esta API permite gestionar un catálogo de videojuegos y las reseñas de usuarios asociadas a cada juego.  
Cada videojuego contiene al menos 10 campos título, género, plataforma, precio, descripción, disponibilidad, puntuación, año, desarrollador, ID.  
Cada reseña contiene 6 campos ID, ID del videojuego al que pertenece, autor, comentario, puntuación y fecha.

## Tecnologías utilizadas 

- Node.js – JavaScript.
- Express.js – Framework web para construir la API REST.
- Bruno – Herramienta para probar y documentar la API.


### Recurso: Videojuegos

GET /videojuegos Obtener todos los videojuegos  GET http://localhost:3000/videojuegos?genero=rpg&precio_max=50&orden=puntuacion&direccion=desc
GET /videojuegos/:id Obtener un videojuego por su ID GET http://localhost:3000/videojuegos/5
GET /videojuegos/titulo/:titulo Obtener un videojuego por su título exacto GET http://localhost:3000/videojuegos/titulo/Elden%20Ring
POST /videojuegos Crear un nuevo videojuego  POST http://localhost:3000/videojuegos {"titulo":"Stray","genero":"aventura","plataforma":"PS5","precio":39.99,"descripcion":"Un gato perdido","desarrollador":"BlueTwelve"} 
PUT /videojuegos/:id Actualizar parcialmente un videojuego  PUT http://localhost:3000/videojuegos/12  {"precio":29.99, "puntuacion":9.2}
DELETE /videojuegos/:id Eliminar un videojuego por su ID DELETE http://localhost:3000/videojuegos/12

##Parámetros de consulta para GET /videojuegos:  
- titulo (búsqueda, ej: ?titulo=ring)  
- precio_min (número, ej: ?precio_min=10)  
- precio_max (número)  
- genero (busqueda, ej: ?genero=rpg)  
- plataforma (busqueda, ej: ?plataforma=PC)  
- disponible (true/false, ej: ?disponible=true)  
- orden (campo a ordenar: precio, puntuacion, anio, titulo)  
- direccion (asc o desc, por defecto asc)


### Recurso: Reseñas

GET  /resenas  Obtener todas las reseñas  GET http://localhost:3000/resenas?videojuego_id=1 
POST  /resenas  Crear una nueva reseña POST http://localhost:3000/resenas {"videojuego_id":5,"autor":"Daniel","comentario":"Obra maestra","puntuacion":10}` |
DELETE /resenas/:id Eliminar una reseña por su ID DELETE http://localhost:3000/resenas/11 

### Endpoints de estadísticas y utilidades 

GET /stats Calcular media, máximo o mínimo de un campo numérico (precio, puntuacion, anio) GET http://localhost:3000/stats?campo=precio&operacion=media
GET /top Obtener los N registros más altos o bajos según un campo numérico GET http://localhost:3000/top?campo=puntuacion&limite=3&orden=desc 
GET /totales Obtener el total de videojuegos y el total de reseñas GET http://localhost:3000/totales

## Códigos de respuesta HTTP

- **200 OK**: Operación exitosa 
- **201 Created**: Recurso creado correctamente 
- **400 Bad Request**: Faltan campos obligatorios o parámetros inválidos
- **404 Not Found**: Recurso no encontrado
- **500 Internal Server Error**: Error inesperado en el servidor 

## Instalación y ejecución

npm init -y
npm install express
node index.js
