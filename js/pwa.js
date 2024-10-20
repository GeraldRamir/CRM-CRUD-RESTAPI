if ('serviceWorker' in navigator) {

    navigator.serviceWorker.register('./serviceWorker.js')
    .then(register => console.log('SW registrado', register))
    .catch(error => console.log(error))
    
    
}else{
    console.log('No soportado')
}