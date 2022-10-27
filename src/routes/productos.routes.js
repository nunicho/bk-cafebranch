import {Router} from "express"; 
import { obtenerProducto, crearProducto, listarProductos } from "../controllers/productos.controllers";

//ojo, Router no es lo mismo que router.
const router = Router ();

router.route('/productos')
        .get(listarProductos)
        .post(crearProducto)

router.route('/productos/:id')
.get()
// .put()
// .delete()



export default router;
// app.get('/productos', (req, res)=>{
//     res.send('aquí tengo que retornar un arreglo de productos')
// })
// app.get('/productos', (req, res)=>{
//     res.send('Esto es una prueba de la petición GET')
// })
// app.get('/productos2', (req, res)=>{
//     res.send('Esto es una prueba de la petición GET')
// })