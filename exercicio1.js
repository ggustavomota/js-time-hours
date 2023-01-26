function load(){
    
    var txt = document.querySelector("#texthr"); //Elementos selecionados pelos seletores
var img = document.querySelector("#img");
var general = document.getElementsByTagName('body')[0];

var switchinfo = new Date(); //Informações do sistema
var hour = switchinfo.getHours(); //Horas

if(hour >= 13 && hour < 18){ //Tarde
    txt.innerHTML = `Now are ${hour} hours, good afternoon!`;
    general.style.background = 'orange';
    img.src = 'imgs/afternoon.jpg'
}

else if(hour < 13 && hour > 0){ //Dia
    txt.innerHTML = `Now are ${hour} hours, good morning!`;
    general.style.background = 'yellow';
}

else{ //Noite
    txt.innerHTML = `Now are ${hour} hours, good evening!`;
    general.style.background = '#3659a5';
    img.src = 'imgs/night.jpg'
}
}

