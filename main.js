window.addEventListener("load", main);

let lista = [
  "kepek/alszik.jpg",
  "kepek/bocsok.jpg",
  "kepek/cirkusz.jpg",
  "kepek/eszik.jpg",
  "kepek/integet.jpg",
  "kepek/maci.jpg",
  "kepek/medve.jpg",
  "kepek/taj.jpg",
];

function main() {


  const ARTICLE = document.querySelector("article");
  
  let currentIndex = 0;
  ARTICLE.innerHTML += osszealit();


  const NAGYKEP = document.querySelectorAll(".nagykep img")[0];
  const JOBB = document.getElementsByClassName("jobb")[0];
  JOBB.addEventListener("click", function () {
    currentIndex = leptetes(1,currentIndex);
    NAGYKEP.src = lista[currentIndex];
  });

  const BAL = document.getElementsByClassName("bal")[0];
  BAL.addEventListener("click", function () {
    currentIndex = leptetes(-1,currentIndex);
    NAGYKEP.src = lista[currentIndex];
  });

  const KEPEK = document.querySelectorAll("article div img");
  for (let j = 0; j < KEPEK.length; j++) {
    KEPEK[j].addEventListener("click", function () {
      NAGYKEP.src = this.src;
      currentIndex = j;
    });
  }

}

function leptetes(ertek, currentIndex){
    currentIndex += ertek;
    if (currentIndex > lista.length - 1) {
      currentIndex = 0;
    }
    if (currentIndex < 0) {
      currentIndex = lista.length - 1;
    }
    return currentIndex;
}

function osszealit(){
  let txt="";
  for (let i = 0; i < lista.length; i++) {
    ARTICLE.innerHTML += `<div><img src="${lista[i]}" alt=""></div>`;
  }
  return txt;
}