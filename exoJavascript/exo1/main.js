/* un script qui prend 2 parametre start et end (numérique), qui pour tout les nombres compris en
start et end les décomposent (ex 125 c'est 1 et 2 et 5) et stocke dans un tableau pour chaque chiffres 
(tableau de 9 cases donc) le nombre d'apparitions de chaque chiffres */


let end = document.getElementById("chiffreend");
/*const valeurStart = "123";
const start = [valeurStart.split('')];*/



let btn = document.querySelector('.btn');


btn.addEventListener("click", myBtn);

function myBtn(){
    let valeurStart = document.getElementById("chiffrestart").value;
    const txtStart = new Array();
    let valeurEnd = document.getElementById("chiffreend").value;
    const myTab = new Array(10);
    
    for(let i = 0 ; i < myTab.length; i++){
        myTab[i] = 0;
    }
    console.log(myTab);
    
    console.log(valeurStart);
    
    for (valeurStart; valeurStart <= valeurEnd; valeurStart++){
        
        let stringTxt = valeurStart.toString().split('');
        
        console.log(stringTxt);
        console.log(stringTxt.length);
        console.log(valeurStart);

        for(let x = 0 ; x < stringTxt.length; x++){
            let valeur = stringTxt[x];
            myTab[valeur]++;
        }
        console.log(myTab);
    }
}
