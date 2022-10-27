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
};

export const obtenerProducto = async (req, res) =>{
try{
//obtener el parámetro
console.log(req.params.id)
//pedirle a la base de datos buscar el documento que coincide con el id del parámetro
const productoBuscado = await Producto.findById(req.params.id)
//responder con el producto encontrado
req.status(200).json(productoBuscado);
}catch(error){
        console.log(error)
        res.status(404).json({
                mensaje:'Error no se pudo encontrar el producto solicitado      '
        })

}
}

export const editarProducto = async (req, res) =>{
try{
 //buscar el producto por el id, luego modificar los datos con el body
 await Producto.findByIdAndUpdate(req.params.id,req.body)
 //responder al frontend
 res.status(200).json({
 mensaje: 'El producto fue editado correctamente'})
}catch(error){
        console.log(error)
        res.status(404).json({
                mensaje:'EL producto solicitado no pudo ser modificado'
        })

}
}

export const borrarProducto = async (req, res) =>{
try{
 //buscar el producto por el id y borrar
await Producto.findByIdAndDelete(req.params.id)
 //responder al frontend si pude eliminar el producto
 res.status(200).json({
 mensaje: 'El producto fue correctamente eliminado'})
}catch(error){
        console.log(error)
        res.status(404).json({
                mensaje:'EL producto solicitado no pudo ser eliminado'
        })

}
}