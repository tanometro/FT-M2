const URL_BASE = "http://localhost:5000"

const btn = document.getElementById("boton");
const listaAmiguitos = document.getElementById("lista");

btn.onclick = function(){
    const crearLista = (amiguito) => {
        const li = document.createElement("li");
        li.innerHTML = amiguito.name;
        listaAmiguitos.appendChild(li);
    }

    const showAmiguitos = (amiguitos) => {
        amiguitos.forEach(crearLista);
    }

    $.get(`${URL_BASE}/amigos`, showAmiguitos)
}

//const input = document.getElementById("input");
// const search = document.getElementById("search");

// search.onclick = function() {
//     const idBuscada = input.target.value;

//     const showAmiguito = (amiguitos)=> {
//         for (let i = 0; i < amiguitos.length; i++){
//             if(amiguito.id = idBuscada) return amiguito
//         }
//     }
//     $.get(`${URL_BASE}/amigos`, showAmiguito)
// }

$("#search").click(function(){
    let id = $("input").val();
    $.get(`${URL_BASE}/amigos/${id}`, function(data){
        $("#amigo").text(data.name)
    })
})

$("#delete").click(function(){
    const mensaje = $("#success");
    let id = $("#inputDelete").val();
    $.ajax({
        url: `${URL_BASE}/amigos/${id}`,
        type: "DELETE",
        success: function(data){
            showFriends(data);
            alert("Amigo eliminado")},
            error: () => {
                mensaje.text("No capo, el pibe no existe.");
            }
    })
})

function showFriends(data){
    $('#lista').empty()
    data.forEach(element => {
        $('#lista').append(`<li>${element.name}</li>`)
    });
}
