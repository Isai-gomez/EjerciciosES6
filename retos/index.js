const name = document.querySelector("#text");
const description = document.querySelector("#textArea");
const button = document.querySelector('#crear');
const resolve = document.querySelector('.respuesta')

button.addEventListener("click", function(e){
    return(
        resolve.innerHTML = `<h1> RETO: <span>${name.value}</span></h1>
        <p class="description"> DESCRIPCION ${description.value}</p>`
    );
});

