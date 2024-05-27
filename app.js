document.addEventListener('DOMContentLoaded', () => {
    const contenido = document.getElementById('contenido');
    const bateriaElemento = document.getElementById('bateria');
    let bateria = 15;

    function desactivarAnimacion(contenido, bateria) {
        if (bateria <= 10) {
            contenido.classList.add('animacion-desactivada'); 
            contenido.classList.remove('animacion'); 
        } else{
            contenido.classList.add('animacion'); 
            contenido.classList.remove('animacion-desactivada');
        }
    }



    desactivarAnimacion(contenido, bateria);

    function actualizarBateria(bateria) {
        bateriaElemento.innerText = bateria + '%';
    }

    setInterval(function() {
        bateria -= 1;
        if(bateria === 0){
            bateria = 15;
        }
        
        desactivarAnimacion(contenido, bateria);
        actualizarBateria(bateria);
    }, 1000);
});

