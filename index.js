


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

let idSiguienteVideojuego = 12; 

let idSiguienteResena = 11;






app.get('/videojuegos', (req, res) => {
  try {
    let resultado = [...videojuegos];

    
    if (req.query.titulo) {
      const titulo = req.query.titulo.toLowerCase();
      resultado = resultado.filter(v => v.titulo.toLowerCase().includes(titulo));
    }
    
    if (req.query.precio_min) {
      const min = parseFloat(req.query.precio_min);
      resultado = resultado.filter(v => v.precio >= min);
    }
    
    if (req.query.precio_max) {
      const max = parseFloat(req.query.precio_max);
      resultado = resultado.filter(v => v.precio <= max);
    }
    
    if (req.query.genero) {
      const genero = req.query.genero.toLowerCase();
      resultado = resultado.filter(v => v.genero.toLowerCase() === genero);
    }
    
    if (req.query.plataforma) {
      const plataforma = req.query.plataforma.toLowerCase();
      resultado = resultado.filter(v => v.plataforma.toLowerCase() === plataforma);
    }
    
    if (req.query.disponible) {
      const disponible = req.query.disponible === 'true';
      resultado = resultado.filter(v => v.disponible === disponible);
    }

    
    if (req.query.orden) {
      const campo = req.query.orden;
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

    res.status(200).json({ total: resultado.length, videojuegos: resultado });
  } catch (error) {
    res.status(500).json({ error: "Error interno del servidor" });
  }
});
    
app.get("/videojuegos/:id", (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const juego = videojuegos.find(v => v.id === id);
    if (!juego) return res.status(404).json({ error: "Videojuego no encontrado" });
    res.status(200).json(juego);
  } catch (error) {
    res.status(500).json({ error: "Error interno del servidor" });
  }
});


app.get("/videojuegos/titulo/:titulo", (req, res) => {
  try {
    const tituloBuscar = req.params.titulo.toLowerCase();
    const juego = videojuegos.find(v => v.titulo.toLowerCase() === tituloBuscar);
    if (!juego) return res.status(404).json({ error: "Videojuego no encontrado por título" });
    res.status(200).json(juego);
  } catch (error) {
    res.status(500).json({ error: "Error interno del servidor" });
  }
});



app.post("/videojuegos", (req, res) => {
  try {
    const { titulo, genero, plataforma, precio, descripcion, desarrollador } = req.body;
    if (!titulo || !genero || !plataforma || precio === undefined || !descripcion || !desarrollador) {
      return res.status(400).json({ error: "Faltan campos obligatorios" });
    }

    const nuevo = {
      id: idSiguienteVideojuego++,
      titulo,
      genero,
      plataforma,
      precio,
      descripcion,
      desarrollador,
      disponible: req.body.disponible ?? true,
      puntuacion: req.body.puntuacion ?? 0,
      anio: req.body.anio ?? new Date().getFullYear()
    };
    videojuegos.push(nuevo);
    res.status(201).json({ mensaje: "Videojuego creado correctamente", videojuego: nuevo });
  } catch (error) {
    res.status(500).json({ error: "Error interno del servidor" });
  }
}); 


app.put("/videojuegos/:id", (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const juego = videojuegos.find(v => v.id === id);
    if (!juego) return res.status(404).json({ error: "Videojuego no encontrado" });

    const campos = ['titulo', 'genero', 'plataforma', 'precio', 'descripcion', 'disponible', 'puntuacion', 'anio', 'desarrollador'];
    for (let campo of campos) {
      if (req.body[campo] !== undefined) {
        juego[campo] = req.body[campo];
      }
    }
    res.status(200).json({ mensaje: "Videojuego actualizado", videojuego: juego });
  } catch (error) {
    res.status(500).json({ error: "Error interno del servidor" });
  }
});


app.delete("/videojuegos/:id", (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const index = videojuegos.findIndex(v => v.id === id);
    if (index === -1) return res.status(404).json({ error: "Videojuego no encontrado" });
    const eliminado = videojuegos.splice(index, 1)[0];
    res.status(200).json({ mensaje: "Videojuego eliminado", videojuego: eliminado });
  } catch (error) {
    res.status(500).json({ error: "Error interno del servidor" });
  }
});


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


app.post("/resenas", (req, res) => {
  try {
    const { videojuego_id, autor, comentario, puntuacion, fecha } = req.body;
    if (!videojuego_id || !autor || !comentario || puntuacion === undefined) {
      return res.status(400).json({ error: "Faltan campos obligatorios" });
    }
    const juegoExiste = videojuegos.some(v => v.id === parseInt(videojuego_id));
    if (!juegoExiste) {
      return res.status(404).json({ error: "El videojuego no existe" });
    }
    const fechaResena = fecha || new Date().toISOString().split('T')[0];
    const nuevaResena = {
      id: idSiguienteResena++,
      videojuego_id: parseInt(videojuego_id),
      autor,
      comentario,
      puntuacion,
      fecha: fechaResena
    };
    resenas.push(nuevaResena);
    res.status(201).json({ mensaje: "Reseña creada", resena: nuevaResena });
  } catch (error) {
    res.status(500).json({ error: "Error interno del servidor" });
  }
});


app.delete("/resenas/:id", (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const index = resenas.findIndex(r => r.id === id);
    if (index === -1) return res.status(404).json({ error: "Reseña no encontrada" });
    const eliminada = resenas.splice(index, 1)[0];
    res.status(200).json({ mensaje: "Reseña eliminada", resena: eliminada });
  } catch (error) {
    res.status(500).json({ error: "Error interno del servidor" });
  }
});


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
    const valores = videojuegos.map(v => v[campo]).filter(v => typeof v === 'number');
    if (valores.length === 0) {
      return res.status(404).json({ error: "No hay datos numéricos" });
    }
    let resultado;
    if (operacion === 'media') {
      const suma = valores.reduce((acc, val) => acc + val, 0);
      resultado = suma / valores.length;
    } else if (operacion === 'max') {
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
    let copia = [...videojuegos];
    copia.sort((a, b) => {
      if (orden === 'desc') return b[campo] - a[campo];
      else return a[campo] - b[campo];
    });
    const top = copia.slice(0, limite);
    res.status(200).json({ campo, orden, limite, top });
  } catch (error) {
    res.status(500).json({ error: "Error interno del servidor" });
  }
});











app.listen(PORT, function () {
  console.log('Servidor en http://localhost:' + PORT);
});























