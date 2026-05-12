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

let idSiguienteVideojuego = 12; 

let idSiguienteResena = 11;

app.get('/videojuegos', function (req, res) {
  try {
    let resultado = videojuegos.slice();

    if (req.query.titulo) {
      let titulo = req.query.titulo.toLowerCase();
      resultado = resultado.filter(function(v) {
        return v.titulo.toLowerCase().indexOf(titulo) !== -1;
      });
    }

    if (req.query.precio_min) {
      let min = parseFloat(req.query.precio_min);
      resultado = resultado.filter(function(v) { return v.precio >= min; });
    }
    if (req.query.precio_max) {
      let max = parseFloat(req.query.precio_max);
      resultado = resultado.filter(function(v) { return v.precio <= max; });
    }

    
    if (req.query.genero) {
      let genero = req.query.genero.toLowerCase();
      resultado = resultado.filter(function(v) {
        return v.genero.toLowerCase() === genero;
      });
    }
    if (req.query.plataforma) {
      let plataforma = req.query.plataforma.toLowerCase();
      resultado = resultado.filter(function(v) {
        return v.plataforma.toLowerCase() === plataforma;
      });
    }

    
    if (req.query.orden) {
      let campo = req.query.orden;
      let direccion = req.query.direccion || 'asc';
      
      if (campo === 'precio' || campo === 'puntuacion' || campo === 'anio' || campo === 'titulo') {
        resultado.sort(function(a, b) {
          if (typeof a[campo] === 'string') {
            if (direccion === 'desc') return b[campo].localeCompare(a[campo]);
            else return a[campo].localeCompare(b[campo]);
          } else {
            if (direccion === 'desc') return b[campo] - a[campo];
            else return a[campo] - b[campo];
          }
        });
      }
    }

    res.status(200).json({ total: resultado.length, videojuegos: resultado });
  } catch (error) {
    res.status(500).json({ error: 'Error interno del servidor.' });
  }
});
   
    


app.get('/videojuegos/:id', function (req, res) {
  try {
    let id = parseInt(req.params.id);
    let juego = videojuegos.find(function(v) { return v.id === id; });
    if (!juego) {
      return res.status(404).json({ error: 'Videojuego no encontrado.' });
    }
    res.status(200).json(juego);
  } catch (error) {
    res.status(500).json({ error: 'Error interno del servidor.' });
  }
});


app.get('/videojuegos/titulo/:titulo', function (req, res) {
  try {
    let tituloBuscar = req.params.titulo.toLowerCase();
    let juego = videojuegos.find(function(v) {
      return v.titulo.toLowerCase() === tituloBuscar;
    });
    if (!juego) {
      return res.status(404).json({ error: 'No encontrado por título.' });
    }
    res.status(200).json(juego);
  } catch (error) {
    res.status(500).json({ error: 'Error interno del servidor.' });
  }
});


app.post('/videojuegos', function (req, res) {
  try {
    let titulo = req.body.titulo;
    let genero = req.body.genero;
    let plataforma = req.body.plataforma;
    let precio = req.body.precio;
    let descripcion = req.body.descripcion;
    let desarrollador = req.body.desarrollador;

    if (!titulo || !genero || !plataforma || precio === undefined || !descripcion || !desarrollador) {
      return res.status(400).json({ error: 'Faltan campos obligatorios.' });
    }

    let nuevo = {
      id: idSiguienteVideojuego,
      titulo: titulo,
      genero: genero,
      plataforma: plataforma,
      precio: precio,
      descripcion: descripcion,
      desarrollador: desarrollador,
      disponible: req.body.disponible !== undefined ? req.body.disponible : true,
      puntuacion: req.body.puntuacion !== undefined ? req.body.puntuacion : 0,
      anio: req.body.anio !== undefined ? req.body.anio : new Date().getFullYear()
    };

    idSiguienteVideojuego = idSiguienteVideojuego + 1;
    videojuegos.push(nuevo);

    res.status(201).json({ mensaje: 'Creado correctamente.', videojuego: nuevo });
  } catch (error) {
    res.status(500).json({ error: 'Error interno del servidor.' });
  }
});



app.put('/videojuegos/:id', function (req, res) {
  try {
    let id = parseInt(req.params.id);
    let juego = videojuegos.find(function(v) { return v.id === id; });
    if (!juego) {
      return res.status(404).json({ error: 'Videojuego no encontrado.' });
    }

    if (req.body.titulo !== undefined)        juego.titulo = req.body.titulo;
    if (req.body.genero !== undefined)        juego.genero = req.body.genero;
    if (req.body.plataforma !== undefined)    juego.plataforma = req.body.plataforma;
    if (req.body.precio !== undefined)        juego.precio = req.body.precio;
    if (req.body.descripcion !== undefined)   juego.descripcion = req.body.descripcion;
    if (req.body.disponible !== undefined)    juego.disponible = req.body.disponible;
    if (req.body.puntuacion !== undefined)    juego.puntuacion = req.body.puntuacion;
    if (req.body.anio !== undefined)          juego.anio = req.body.anio;
    if (req.body.desarrollador !== undefined) juego.desarrollador = req.body.desarrollador;

    res.status(200).json({ mensaje: 'Actualizado correctamente.', videojuego: juego });
  } catch (error) {
    res.status(500).json({ error: 'Error interno del servidor.' });
  }
});



app.delete('/videojuegos/:id', function (req, res) {
  try {
    let id = parseInt(req.params.id);
    let indice = videojuegos.findIndex(function(v) { return v.id === id; });
    if (indice === -1) {
      return res.status(404).json({ error: 'Videojuego no encontrado.' });
    }
    let eliminado = videojuegos.splice(indice, 1)[0];
    res.status(200).json({ mensaje: 'Eliminado correctamente.', videojuego: eliminado });
  } catch (error) {
    res.status(500).json({ error: 'Error interno del servidor.' });
  }
});











