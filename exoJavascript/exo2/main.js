/* un script qui change la couleur de backgound du body de maniére aléatoire toutes les 3 secondes et affiche 
au millieu de la page le code hexa de la couleur appliqué sur le fond */


let elem = document.body;
let colors = (Math.random()*0xFFFFFF<<0).toString(16);
console.log(colors);
elem.style.background = "#" + colors;
document.querySelector(".couleurRandom").innerHTML = "#" + colors;

setInterval(function(){
    colors = (Math.random()*0xFFFFFF<<0).toString(16);
    elem.style.background = "#" + colors;
    document.querySelector(".couleurRandom").innerHTML = "#" + colors;
    console.log(colors);
},2000);

