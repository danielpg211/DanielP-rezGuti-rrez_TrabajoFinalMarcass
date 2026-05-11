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