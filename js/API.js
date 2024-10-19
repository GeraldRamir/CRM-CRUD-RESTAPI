const url='http://localhost:4000/clientes'


// Envia los clientes a la API
export const nuevoCliente= async cliente=>{
    try {

        await fetch(url,{
            method: 'POST',
            body: JSON.stringify(cliente),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        window.location.href='index.html'
        
    } catch (error) {
        console.error(error)
        
    }
}

// Obtiene los clientes de la API

export const obtenerClientes= async()=>{

    try {

        const resultado= await fetch(url)
        const respuesta= await resultado.json()
        
        return respuesta
    } catch (error) {
        console.log(error)
        
    }

}

export const eliminarCliente= async id=>{

    try {
        await fetch(`${url}/${id}`, {
            method: 'DELETE'
        })
        
    } catch (error) {
        console.error(error)
        
    }


}
 export const editarCliente= async id=>{

    try {
        const resultado= await fetch(`${url}/${id}`)
        const respuesta= await resultado.json()
        return respuesta
        
    } catch (error) {
        console.error(error)
        
    }



 }

 export const actualizarCliente= async cliente=>{
     const {id}= cliente
    try {

        await fetch(`${url}/${id}`,{
            method: 'PUT',
            body: JSON.stringify(cliente),
            headers: {
                'Content-Type': 'application/json'
            }
        })

        window.location.href='index.html'

        
    } catch (error) {
        console.error(error)
        
    }
 }