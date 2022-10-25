import Producto from '../models/producto'




export const listarProductos = async (req, res) =>{
try{
     
const listaProductos = await Producto.find();
        // buscar todos los productos en la Base de Datos
res.status(200).json(listaProductos)
.send('Esto es una prueba de la petición POST')
  } catch (error){
    console.log(error);
    res.status(404).json({
    mensaje: ('Error al intentar agregar un producto')
})
}


        }


export const crearProducto = async(req, res)=>{

try{
        // extraer del body los datos
console.log(req.body)
        // agregar la validación correspondiente
const productoNuevo = new Producto(req.body);
        // guardar los productos en la Base de Datos
productoNuevo.save()
        // responder al usuario que todo está Bien.    
res.status(201).json({
    mensaje: 'El producto fue correctamente creado'
})
.send('Esto es una prueba de la petición POST')
  } catch (error){
    console.log(error);
    res.status(400).json({
    mensaje: ('Error al intentar agregar un producto')
})
}
}