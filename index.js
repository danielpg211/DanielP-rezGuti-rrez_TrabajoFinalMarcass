


//"Importo Express, creo la aplicación 'app' y elijo el puerto 3000.


const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());







let videojuegos = [
  { id: 1,  titulo: 'Rocket League',             genero: 'deportes',  plataforma: 'PC',              precio: 0.00,  descripcion: 'Futbol con coches a alta velocidad, gratuito desde 2020.',      disponible: true,  puntuacion: 8.9, anio: 2015, desarrollador: 'Psyonix'            },
  { id: 2,  titulo: 'FIFA 26',                   genero: 'deportes',  plataforma: 'PS5',             precio: 69.99, descripcion: 'La nueva entrega de la saga de futbol de EA Sports.',           disponible: true,  puntuacion: 7.5, anio: 2025, desarrollador: 'EA Sports'           },
  { id: 3,  titulo: 'League of Legends',         genero: 'estrategia',plataforma: 'PC',              precio: 0.00,  descripcion: 'MOBA competitivo con mas de 160 campeones disponibles.',       disponible: true,  puntuacion: 8.5, anio: 2009, desarrollador: 'Riot Games'          },
  { id: 4,  titulo: 'God of War Ragnarok',       genero: 'accion',    plataforma: 'PS5',             precio: 69.99, descripcion: 'Kratos y Atreus se enfrentan al fin del mundo nordico.',        disponible: true,  puntuacion: 9.5, anio: 2022, desarrollador: 'Santa Monica Studio' },
  { id: 5,  titulo: 'Forza Horizon 5',           genero: 'deportes',  plataforma: 'Xbox',            precio: 59.99, descripcion: 'Carreras en mundo abierto ambientadas en Mexico.',             disponible: true,  puntuacion: 9.2, anio: 2021, desarrollador: 'Playground Games'    },
  { id: 6,  titulo: 'GTA V',                     genero: 'accion',    plataforma: 'PC',              precio: 29.99, descripcion: 'Mundo abierto criminal en la ciudad de Los Santos.',           disponible: true,  puntuacion: 9.0, anio: 2013, desarrollador: 'Rockstar Games'      },
  { id: 7,  titulo: 'Balatro',                   genero: 'puzzle',    plataforma: 'PC',              precio: 14.99, descripcion: 'Juego de cartas roguelike tremendamente adictivo.',            disponible: true,  puntuacion: 9.5, anio: 2024, desarrollador: 'LocalThunk'          },
  { id: 8,  titulo: 'Hollow Knight: Silksong',   genero: 'aventura',  plataforma: 'Nintendo Switch', precio: 19.99, descripcion: 'Secuela de Hollow Knight con Hornet como protagonista.',       disponible: false, puntuacion: 0.0, anio: 2025, desarrollador: 'Team Cherry'         },
  { id: 9,  titulo: 'Elden Ring',                genero: 'rpg',       plataforma: 'PC',              precio: 59.99, descripcion: 'RPG de accion de mundo abierto creado con FromSoftware.',      disponible: true,  puntuacion: 9.6, anio: 2022, desarrollador: 'FromSoftware'        },
  { id: 10, titulo: 'Kingdom Hearts III',        genero: 'rpg',       plataforma: 'PS4',             precio: 39.99, descripcion: 'El esperado final de la saga de Sora junto a Disney.',         disponible: true,  puntuacion: 8.3, anio: 2019, desarrollador: 'Square Enix'         },
  { id: 11, titulo: 'Lethal Company',            genero: 'terror',    plataforma: 'PC',              precio: 9.99,  descripcion: 'Recolecta chatarra espacial con amigos sin morir en el intento.', disponible: true, puntuacion: 9.1, anio: 2023, desarrollador: 'Zeekerss'           },
];



let resenas = [
  { id: 1,  videojuego_id: 1,  autor: 'LaCabra',   comentario: 'El mejor juego de coches que he probado, muy adictivo.',         puntuacion: 9, fecha: '2024-01-10' },
  { id: 2,  videojuego_id: 1,  autor: 'CR7',        comentario: 'Gratis y muy divertido, perfecto para jugar con amigos.',         puntuacion: 9, fecha: '2024-02-05' },
  { id: 3,  videojuego_id: 2,  autor: 'Six Seven',  comentario: 'Mejoras notables respecto al anterior, buen futbol.',             puntuacion: 7, fecha: '2024-01-20' },
  { id: 4,  videojuego_id: 3,  autor: 'Javi Casal', comentario: 'Muy competitivo, engancha muchisimo aunque puede ser frustrante.',puntuacion: 8, fecha: '2024-03-01' },
  { id: 5,  videojuego_id: 4,  autor: 'Daniel P.',  comentario: 'Historia brutal, los combates son una pasada.',                   puntuacion: 10,fecha: '2024-01-15' },
  { id: 6,  videojuego_id: 5,  autor: 'Adri C',     comentario: 'El mejor juego de carreras que existe, mundo enorme.',            puntuacion: 9, fecha: '2024-04-12' },
  { id: 7,  videojuego_id: 6,  autor: 'Java DOM',   comentario: 'Un clasico que nunca pasa de moda, horas y horas de contenido.',  puntuacion: 9, fecha: '2024-02-18' },
  { id: 8,  videojuego_id: 7,  autor: 'Goku',       comentario: 'Imposible dejarlo, el mejor roguelike que he jugado.',            puntuacion: 10,fecha: '2024-05-03' },
  { id: 9,  videojuego_id: 9,  autor: 'Vegetta',    comentario: 'Dificil pero muy satisfactorio, FromSoftware en estado puro.',    puntuacion: 10,fecha: '2024-03-22' },
  { id: 10, videojuego_id: 11, autor: 'Javi S.',    comentario: 'Terrorífico y divertidisimo con amigos, muy recomendable.',       puntuacion: 9, fecha: '2024-06-01' },
];


//Este para el siguiente id de videojuego o reseña que se cree

let idSiguienteVideojuego = 12; 

let idSiguienteResena = 11;






app.get('/videojuegos', (req, res) => {
  // Usamos try/catch para capturar errores inesperados y no romper el servidor.
  try {
    // Creamos una copia del array original para no modificarlo
    let resultado = [...videojuegos];

    
    //Filtro por el titulo
    if (req.query.titulo) {
      const titulo = req.query.titulo.toLowerCase(); // Ponemos las minusculas.
      resultado = resultado.filter(v => v.titulo.toLowerCase().includes(titulo));
    }

    //Filtro por el precio minimo 
    if (req.query.precio_min) {
      const min = parseFloat(req.query.precio_min); //Aqui se convierte un String a numero.
      resultado = resultado.filter(v => v.precio >= min);
    }
    
    //Filtro por el precio maximo 
    if (req.query.precio_max) {
      const max = parseFloat(req.query.precio_max);
      resultado = resultado.filter(v => v.precio <= max);
    }
    
    //Filtro por el genero
    if (req.query.genero) {
      const genero = req.query.genero.toLowerCase();
      resultado = resultado.filter(v => v.genero.toLowerCase() === genero);
    }
    
    //Fitro por la plataforma
    if (req.query.plataforma) {
      const plataforma = req.query.plataforma.toLowerCase();
      resultado = resultado.filter(v => v.plataforma.toLowerCase() === plataforma);
    }
    
    //Filtro si esta disponibleo no.
    if (req.query.disponible) {
      const disponible = req.query.disponible === 'true'; //Convertimos el String en un booleano true y cualquier otro valor a false.
      resultado = resultado.filter(v => v.disponible === disponible);
    }

    // Aqui se ordena por ejeplo el precio de forma ascendente o descendente segun se indique en la query, si no se indica se ordena de forma ascendente por titulo.
    //Filtro de ordenar segun un campo y una direccion.
    if (req.query.orden) {
      const campo = req.query.orden;
      // Si se indica 'desc' se ordena de forma descendente, si no se indica o se indica otro valor se ordena de forma ascendente.
      const direccion = req.query.direccion === 'desc' ? -1 : 1;
      const camposPermitidos = ['precio', 'puntuacion', 'anio', 'titulo'];
      if (camposPermitidos.includes(campo)) {
        resultado.sort((a, b) => {
          let valA = a[campo];
          let valB = b[campo];
          if (typeof valA === 'string') {
            return direccion * valA.localeCompare(valB);
          } else {
            return direccion * (valA - valB);
          }
        });
      }
    }
    //Codigo 200 = que todo ha ido bien

    res.status(200).json({ total: resultado.length, videojuegos: resultado });
  } catch (error) {
    //Codigo 500 = error del servidor
    res.status(500).json({ error: "Error interno del servidor" });
  }
});
    
//Obtiene un videojuego por su id.

app.get("/videojuegos/:id", (req, res) => {
  try {
    const id = parseInt(req.params.id); // Aqui llega como un String y se convierte a un número entero.
    const juego = videojuegos.find(v => v.id === id); //Aqui find recorre el array y  devuelve el primer elemento correcto.
    if (!juego) return res.status(404).json({ error: "Videojuego no encontrado" });
    res.status(200).json(juego);
  } catch (error) {
    res.status(500).json({ error: "Error interno del servidor" });
  }
});

//Flitro busqueda con el titulo igual 

app.get("/videojuegos/titulo/:titulo", (req, res) => {
  try {
    const tituloBuscar = req.params.titulo.toLowerCase(); 
    const juego = videojuegos.find(v => v.titulo.toLowerCase() === tituloBuscar);
    //Error 404 no se econtró el videojuego con ese título.
    if (!juego) return res.status(404).json({ error: "Videojuego no encontrado por título" });
    res.status(200).json(juego);
  } catch (error) {
    res.status(500).json({ error: "Error interno del servidor" });
  }
});

//Crea un nuevo videojuego los datos se envian al body.

app.post("/videojuegos", (req, res) => {
  try {
    const { titulo, genero, plataforma, precio, descripcion, desarrollador } = req.body; //Aqui cojemos todas las propiedades del objeto req.body
    //Y creamos variables con el mismo nombre 
    //Lo de undefined es necesario porque el precio puede ser 0 y no queremos que se considere como un valor faltante, lo mismo con la puntuacion que puede ser 0.
    if (!titulo || !genero || !plataforma || precio === undefined || !descripcion || !desarrollador) {
      return res.status(400).json({ error: "Faltan campos obligatorios" });
    }

    //Construimos el objeto del nuevo videojuego con el id para los campos .

    const nuevo = {
      id: idSiguienteVideojuego++,
      titulo,
      genero,
      plataforma,
      precio,
      descripcion,
      desarrollador,
      disponible: req.body.disponible ?? true, //los ?? sirven para asignar un valor por defecto en caso de que el valor sea null.
      puntuacion: req.body.puntuacion ?? 0,
      //Aqui devuelve el año actual 
      anio: req.body.anio ?? new Date().getFullYear()
    };
    //Aqui añadimos un nuevo objeto al array de videojuegos 
    videojuegos.push(nuevo);
    res.status(201).json({ mensaje: "Videojuego creado correctamente", videojuego: nuevo });
  } catch (error) {
    res.status(500).json({ error: "Error interno del servidor" });
  }
}); 


//Actualiza un videojuego por su id, los datos a actualizar se envian al body.
app.put("/videojuegos/:id", (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const juego = videojuegos.find(v => v.id === id);
    if (!juego) return res.status(404).json({ error: "Videojuego no encontrado" });
    
    //Aqui hacemos una lista de campos para que se puedan actualizar.
    const campos = ['titulo', 'genero', 'plataforma', 'precio', 'descripcion', 'disponible', 'puntuacion', 'anio', 'desarrollador'];
    for (let campo of campos) {
      //si el campo existe en req.body actualizamos el valor del juego.
      if (req.body[campo] !== undefined) {
        juego[campo] = req.body[campo];
      }
    }
    res.status(200).json({ mensaje: "Videojuego actualizado", videojuego: juego });
  } catch (error) {
    res.status(500).json({ error: "Error interno del servidor" });
  }
});

//Elimina un videojuego por su id.

app.delete("/videojuegos/:id", (req, res) => {
  try {
    const id = parseInt(req.params.id);
    //Aqui findIndex recorre el array y devuelve el indice del primer elemento que cumple la condicion
    //o devuelve -1 si no encuentra ningun elemento que cumpla la condicion.
    const index = videojuegos.findIndex(v => v.id === id);
    if (index === -1) return res.status(404).json({ error: "Videojuego no encontrado" });
    const eliminado = videojuegos.splice(index, 1)[0]; //Elimina el indice y la cantidad de elementos a eliminar, en este caso 1, y devuelve un array con los elementos eliminados, por eso el 0 para obtener el primer elemento del array.
    res.status(200).json({ mensaje: "Videojuego eliminado", videojuego: eliminado });
  } catch (error) {
    res.status(500).json({ error: "Error interno del servidor" });
  }
});

//El listado de las reseñas.

app.get("/resenas", (req, res) => {
  try {
    let resultado = [...resenas];
    if (req.query.videojuego_id) {
      const id = parseInt(req.query.videojuego_id);
      resultado = resultado.filter(r => r.videojuego_id === id);
    }
    res.status(200).json({ total: resultado.length, resenas: resultado });
  } catch (error) {
    res.status(500).json({ error: "Error interno del servidor" });
  }
});

//Crea una nueva reseña, los datos se envian al body.

app.post("/resenas", (req, res) => {
  try {
    const { videojuego_id, autor, comentario, puntuacion, fecha } = req.body;
    //Aqui los validamos los campos obligatorios de la reseña.
    if (!videojuego_id || !autor || !comentario || puntuacion === undefined) {
      return res.status(400).json({ error: "Faltan campos obligatorios" });
    }
    //Aqui verificamos si el juego existe en el array de videjuegos.
    //some() devuelve tru si al menos un elemento cumple la condicion.
    const juegoExiste = videojuegos.some(v => v.id === parseInt(videojuego_id));
    if (!juegoExiste) {
      return res.status(404).json({ error: "El videojuego no existe" });
    }
    //Si no se proporciona una fecha se asigna la actual en formato año mes dia.
    const fechaResena = fecha || new Date().toISOString().split('T')[0];
    //Aqui construimos el objeto de la nueva reseña con el id para los campos.
    const nuevaResena = {
      //Aqui asignamos un id único a la nueva reseña.
      id: idSiguienteResena++,
      videojuego_id: parseInt(videojuego_id),
      autor,
      comentario,
      puntuacion,
      fecha: fechaResena
    };
    //Aqui añadimos la nueva reseña al array de reseñas.
    resenas.push(nuevaResena);
    res.status(201).json({ mensaje: "Reseña creada", resena: nuevaResena });
  } catch (error) {
    res.status(500).json({ error: "Error interno del servidor" });
  }
});

//Elimina una reseña por su id.

app.delete("/resenas/:id", (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const index = resenas.findIndex(r => r.id === id);
    if (index === -1) return res.status(404).json({ error: "Reseña no encontrada" });
    //Aqui eliminamos la reseña del array de reseñas y devolvemos la reseña eliminada en la respuesta.
    const eliminada = resenas.splice(index, 1)[0];
    res.status(200).json({ mensaje: "Reseña eliminada", resena: eliminada });
  } catch (error) {
    res.status(500).json({ error: "Error interno del servidor" });
  }
});


//Clacula la media el maximo y el minimo por ejemplo el precio de los videojuegos.
app.get("/stats", (req, res) => {
  try {
    const campo = req.query.campo;
    const operacion = req.query.operacion; 
    if (!campo || !operacion) {
      return res.status(400).json({ error: "Debe indicar campo operacion " });
    }
    if (!['precio', 'puntuacion', 'anio'].includes(campo)) {
      return res.status(400).json({ error: "Campo debe ser precio, puntuacion o año" });
    }
    //Aqui obtenemos todos los valores del campo elegido.
    //map() crea un nuevo array con los valores de ese campo para cada juego
    //filter() eleimina aquellos  que no sean numero.
    const valores = videojuegos.map(v => v[campo]).filter(v => typeof v === 'number');
    if (valores.length === 0) {
      return res.status(404).json({ error: "No hay datos numéricos" });
    }
    let resultado;
    
    if (operacion === 'media') {
      //Aqui sumamos todos los valores del campo elegido y lo dividimos por la cantidad de valores para obtener la media.
      const suma = valores.reduce((acc, val) => acc + val, 0);
      resultado = suma / valores.length;
    } else if (operacion === 'max') {
      //Aqui obtenemos el valor máximo del campo elegido utilizando el operador spread para pasar los valores como argumentos a Math.max.
      resultado = Math.max(...valores);
    } else if (operacion === 'min') {
      resultado = Math.min(...valores);
    } else {
      return res.status(400).json({ error: "Operación debe ser media max o min" });
    }
    res.status(200).json({ campo, operacion, resultado });
  } catch (error) {
    res.status(500).json({ error: "Error interno del servidor" });
  }
});

//obtienes los juegos ordenados por el campo elegido por ejemplo el precio, la puntuacion o el año, y se puede indicar el orden ascendente o descendente y un limite de resultados a mostrar.
app.get("/top", (req, res) => {
  try {
    const campo = req.query.campo;
    const limite = parseInt(req.query.limite) || 5;
    const orden = req.query.orden || 'desc'; 
    if (!campo) {
      return res.status(400).json({ error: "Debe indicar campo" });
    }
    if (!['precio', 'puntuacion', 'anio'].includes(campo)) {
      return res.status(400).json({ error: "Campo debe ser precio, puntuacion o año" });
    }
    //Copiamos el array de videojuegos para no modificar el original al ordenar.
    let copia = [...videojuegos];
    //Ordenamos segun el campo elegido y el orden indicado, si no se indica se ordena de forma descendente.
    copia.sort((a, b) => {
      if (orden === 'desc') return b[campo] - a[campo]; // mayor a menor
      else return a[campo] - b[campo]; // menor a mayor
    });
    const top = copia.slice(0, limite);
    res.status(200).json({ campo, orden, limite, top });
  } catch (error) {
    res.status(500).json({ error: "Error interno del servidor" });
  }
});

//Obtiene el total de videojuegos y reseñas.
app.get("/totales", (req, res) => {
  try {
    res.status(200).json({
      totalVideojuegos: videojuegos.length,
      totalResenas: resenas.length
    });
  } catch (error) {
    res.status(500).json({ error: "Error interno del servidor" });
  }
});


app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
























