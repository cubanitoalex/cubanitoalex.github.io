var title_array = ["Intereses", "Intereses en Programación", "Aprendiendo sobre"];

var list1 = [
    "Programación <i class='fas fa-code'></i> <i class='fab fa-python'></i> <i class='fab fa-js'></i>",
    "Redes de computadoras <i class='fas fa-network-wired'></i> <i class='fas fa-server'></i>",
    "Hardware de computadoras <i class='fas fa-microchip'></i> <i class='fas fa-memory'></i>",
    "Internet de las cosas (IoT) <i class='fas fa-wifi'></i> <i class='fas fa-robot'></i>",
    "Ciencia ficción <i class='fas fa-space-shuttle'></i> <i class='fas fa-rocket'></i>"
];

var list2 = [
    "Desarrollo Móvil <i class='fas fa-mobile-alt'></i> <i class='fab fa-android'></i> <i class='fab fa-apple'></i>",
    "Programación de Redes <i class='fas fa-project-diagram'></i>",
    "Computación en la Nube <i class='fas fa-cloud'></i>",
    "Software de Automatización <i class='fas fa-cogs'></i>",
    "Proyectos de GitHub <i class='fab fa-github'></i>"
];

var list3 = [
    "Desarrollo de Juegos <i class='fas fa-gamepad'></i>",
    "Blockchain <i class='fas fa-link'></i> <i class='fab fa-bitcoin'></i>",
    "Inteligencia Artificial <i class='fas fa-brain'></i>",
    "Seguridad Informática <i class='fas fa-shield-alt'></i>",
    "Algoritmos Avanzados <i class='fas fa-chart-line'></i>"
];

var i=0;

function ref(){
    if(i==0) {
        document.getElementById("h2text").innerHTML=title_array[0];
        document.getElementById("ele1").innerHTML=list1[0];
        document.getElementById("ele2").innerHTML=list1[1];
        document.getElementById("ele3").innerHTML=list1[2];
        document.getElementById("ele4").innerHTML=list1[3];
        document.getElementById("ele5").innerHTML=list1[4];
    }

    if(i==1) {
        document.getElementById("h2text").innerHTML=title_array[1];
        document.getElementById("ele1").innerHTML=list2[0];
        document.getElementById("ele2").innerHTML=list2[1];
        document.getElementById("ele3").innerHTML=list2[2];
        document.getElementById("ele4").innerHTML=list2[3];
        document.getElementById("ele5").innerHTML=list2[4];
    }

    if(i==2) {
        document.getElementById("h2text").innerHTML=title_array[2];
        document.getElementById("ele1").innerHTML=list3[0];
        document.getElementById("ele2").innerHTML=list3[1];
        document.getElementById("ele3").innerHTML=list3[2];
        document.getElementById("ele4").innerHTML=list3[3];
        document.getElementById("ele5").innerHTML=list3[4];
    }

    if(i>2) {
        i=0;
        ref();
    }
}

function onClickLeft(){
    i--;
    console.log("Hey there!, YOU PRESSED LEFT");
    ref();    
}

function onClickRight(){
    i++;
    console.log("Hey there!, YOU PRESSED RIGHT");
    ref();
}