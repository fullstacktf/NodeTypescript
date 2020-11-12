import express from 'express';
import movieRouter from './api/movies/';
import { loadDatabase } from './api/movies/service';

const app = express();
app.use(express.json());

app.use((req,res,next) => {
  console.log('paso por aqui', req.method);
  console.log("req.url: ", req.url);
  if (req.url.includes("admin")) {
    console.log("clave administrador: ", req.headers);
    if(req.headers.clave_administrador === '1234'){
      next();
      return
    } else {
      res.sendStatus(404);
      return
    }
  }
  if (req.method == "GET") {
    next();
    return
  }
  if(req.headers.clavesupersegura === '1234'){
    next();
  } else{
    console.log('no puede pasar');
    res.sendStatus(403);
  }
});

app.get("/admin", (req, res) => {
  res.json({titulo: "Lo importante es la salud"})
})

app.use('/movie', movieRouter);

app.get('/', (req, res) => {
  console.log(req.headers);
  res.json();
});

loadDatabase()
  .then(() => {
    app.listen(3000, () => console.log('Listen on port 3000'));
  })
  .catch((err) => {
    console.error("Database wasn't loaded: ", err);
  });

