var exibirSobre = function() {
    divTest1 = document.querySelector('#sobre');
    divTest2 = document.querySelector('#menu');
    divTest3 = document.querySelector('#formacao');
    divTest4 = document.querySelector('#habilidade');
    divTest1.style.display = "block";
    divTest2.style.display = "none";
    divTest3.style.display = "none";
    divTest4.style.display = "none";
}
var exibirTeste2 = function() {
    divTest1 = document.querySelector('#sobre');
    divTest2 = document.querySelector('#menu');
    divTest3 = document.querySelector('#formacao');
    divTest4 = document.querySelector('#habilidade');
    divTest1.style.display = "none";
    divTest2.style.display = "block";
    divTest3.style.display = "none";
    divTest4.style.display = "none";
}
var exibirFormacao = function() {
    divTest1 = document.querySelector('#sobre');
    divTest2 = document.querySelector('#menu');
    divTest3 = document.querySelector('#formacao');
    divTest4 = document.querySelector('#habilidade');

    divTest1.style.display = "none";
    divTest2.style.display = "none";
    divTest3.style.display = "block";
    divTest4.style.display = "none";
}
var exibirHabilidade = function() {
    divTest1 = document.querySelector('#sobre');
    divTest2 = document.querySelector('#menu');
    divTest3 = document.querySelector('#formacao');
    divTest4 = document.querySelector('#habilidade');

    divTest1.style.display = "none";
    divTest2.style.display = "none";
    divTest3.style.display = "none";
    divTest4.style.display = "block";
}
var modoNoturno = function() {
    var body = document.getElementById('corpo')
    if (body.classList.contains('modo-noturno')) {
        body.classList.remove('modo-noturno');
    } else {
        body.classList.add('modo-noturno');
    }


}