import { obtenerClientes, eliminarCliente } from "./API.js";

(function() {
    const listadoClientes = document.querySelector('#listado-clientes');

    document.addEventListener('DOMContentLoaded', () => {
        // Iniciar la carga de clientes al cargar la página
        mostrarClientes();
        
        // Iniciar polling para actualizar cada 5 segundos
        setInterval(mostrarClientes, 5000); // Actualizar cada 5 segundos
    });

    listadoClientes.addEventListener('click', mostrarEliminar);

    async function mostrarClientes() {
        const clientes = await obtenerClientes();
        
        // Limpiar la tabla antes de agregar nuevos datos
        listadoClientes.innerHTML = '';

        clientes.forEach(cliente => {
            const { nombre, email, telefono, empresa, id } = cliente;
            const row = document.createElement('tr');
            row.innerHTML += `
                <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                    <p class="text-sm leading-5 font-medium text-gray-700 text-lg  font-bold"> ${nombre} </p>
                    <p class="text-sm leading-10 text-gray-700"> ${email} </p>
                </td>
                <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200 ">
                    <p class="text-gray-700">${telefono}</p>
                </td>
                <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200  leading-5 text-gray-700">    
                    <p class="text-gray-600">${empresa}</p>
                </td>
                <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-sm leading-5">
                    <a href="editar-cliente.html?id=${id}" class="text-teal-600 hover:text-teal-900 mr-5">Editar</a>
                    <a href="#" data-cliente="${id}" class="text-red-600 hover:text-red-900 eliminar">Eliminar</a>
                </td>
            `;

            listadoClientes.appendChild(row);
        });
    }

    function mostrarEliminar(e) {
        if(e.target.classList.contains('eliminar')) {
            const clienteID = e.target.dataset.cliente;
            console.log(clienteID);

            const confirmar = confirm('¿Desea eliminar el registro?');

            if(confirmar) {
                eliminarCliente(clienteID);
            }
        }
    }
    
})();
