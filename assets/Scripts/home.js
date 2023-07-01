const sectionUm = document.getElementById("bg-1");
const sectionDois = document.getElementById("bg-2");
const sectionTres = document.getElementById("bg-3");
const sectionQuatro = document.getElementById("bg-4");
const homeProjetosBackground = [sectionUm, sectionDois, sectionTres, sectionQuatro]; 

const homeBahart = document.getElementById("bahart-site");

let indice = 0;

homeBahart.addEventListener("wheel", mudaBg);

function mudaBg(e) {
    
    indiceControl(e);
    homeProjetosBackground[indice].scrollIntoView();
    console.log(homeProjetosBackground[indice]);

}

function indiceControl(event) {

    if(event.deltaY > 0) {
        if(indice < homeProjetosBackground.length - 1){
            indice += 1;
        } else if( indice >= homeProjetosBackground.length - 1){
            indice = homeProjetosBackground.length - 1;
        }
    } else if(event.deltaY < 0){
        if(indice > 0) {
        indice -= 1;
        } else if(indice <= 0){
            indice = 0
        }
    }   
}

