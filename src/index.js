import express from 'express';

// crear una instancia express (express tiene que ser con minúscula)

const  app = express();

// crear una variable 
app.set('port', process.env.PORT ||  4000)

//usar el puerto
app.listen(app.get('port'),()=>{
    console.log('Estoy en el puerto'+ app.get('port'));
})

console.log('Hola mundo')