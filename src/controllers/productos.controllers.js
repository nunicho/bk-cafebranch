export const listarProductos = (req, res) =>{
        res.send('aquí tengo que retornar un arreglo de productos')
        }


export const crearProducto = (req, res)=>{
// extraer del body los datos
console.log(req.body)
// agregar la validación correspondiente
// guardar los productos en la Base de Datos
         res.send('Esto es una prueba de la petición POST')   
}