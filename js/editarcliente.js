import { editarCliente, actualizarCliente } from "./API.js"
import { mostrarAlerta } from "./funciones.js"
(function(){

    const emailInput= document.querySelector('#email')
    const nombreInput= document.querySelector('#nombre')
    const empresaInput= document.querySelector('#empresa')
    const telefonoInput= document.querySelector('#telefono')
    const idInput= document.querySelector('#id')
    document.addEventListener('DOMContentLoaded', async ()=>{
        const parametrosURL= new URLSearchParams(window.location.search)

        const idCliente= parametrosURL.get('id')
        const cliente=  await editarCliente(idCliente)

        mostrarCliente(cliente)

        const formulario= document.querySelector('#formulario')
         formulario.addEventListener('submit', validarCliente)

    })


    function mostrarCliente(cliente){

        const {email, nombre, empresa, telefono, id}= cliente

        emailInput.value= email
        nombreInput.value= nombre   
        empresaInput.value= empresa
        telefonoInput.value= telefono
        idInput.value= id


    }
    function validarCliente(e){
        e.preventDefault()

        const cliente={
            nombre: nombreInput.value,
            email: emailInput.value,
            telefono: telefonoInput.value,
            empresa: empresaInput.value,
            id: idInput.value
        }
    
        if(Object.values(cliente).some(campo=> campo==='')){
            mostrarAlerta('Todos los campos son obligatorios')
            return
        }
        actualizarCliente(cliente)

        
    }



})()