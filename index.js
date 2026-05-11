const express = require('express');
const app = express();
const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Servidor de videojuegos escuchando en http://localhost:${PORT}`);
});

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

let nextVideojuegoId = 12;

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

let nextResenaId = 11;

app.get('/videojuegos', (req, res) => {
  try {
    res.json({ total: videojuegos.length, videojuegos });
  } catch (error) {
    res.status(500).json({ error: 'Error interno del servidor.' });
  }
});


app.get('/videojuegos/:id', (req, res) => {
  try {
    const videojuego = videojuegos.find(v => v.id === parseInt(req.params.id));
    if (!videojuego) {
      return res.status(404).json({ error: `Videojuego con id ${req.params.id} no encontrado.` });
    }
    res.json(videojuego);
  } catch (error) {
    res.status(500).json({ error: 'Error interno del servidor.' });
  }
});

app.listen(PORT, () => {
  console.log(`Servidor de videojuegos escuchando en http://localhost:${PORT}`);
});
