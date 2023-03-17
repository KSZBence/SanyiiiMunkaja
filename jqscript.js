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

$(function () {
  const ARTICLE = $("article");
  let currentIndex = 0;
  let txt = osszealit();
  ARTICLE.eq(0).html(txt);

  const NAGYKEP = $(".nagykep img").eq(0);
  const JOBB = $("jobb").eq(0);
  JOBB.addEventListener("click", function () {
    currentIndex = leptetes(1, currentIndex);
    NAGYKEP.src = lista[currentIndex];
  });

  const BAL = document.getElementsByClassName("bal")[0];
  BAL.addEventListener("click", function () {
    currentIndex = leptetes(-1, currentIndex);
    NAGYKEP.src = lista[currentIndex];
  });

  const KEPEK = document.querySelectorAll("article div img");
  for (let j = 0; j < KEPEK.length; j++) {
    KEPEK[j].addEventListener("click", function () {
      NAGYKEP.src = this.src;
      currentIndex = j;
    });
  }
});

function osszealit() {
  let txt = "";
  for (let i = 0; i < lista.length; i++) {
    txt += `<div><img src="${lista[i]}" alt=""></div>`;
  }
  return txt;
}

function leptetes(ertek, currentIndex) {
  currentIndex += ertek;
  if (currentIndex > lista.length - 1) {
    currentIndex = 0;
  }
  if (currentIndex < 0) {
    currentIndex = lista.length - 1;
  }
  return currentIndex;
}
