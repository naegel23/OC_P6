let resultsfiction
let resultsfiction2;
let listfiction_Movies1 = [];
let listfiction_Movies2 = [];
let urlPagefiction1 = "http://127.0.0.1:8000/api/v1/titles/?genre=sci-fi";
let urlPagefiction2 = "http://127.0.0.1:8000/api/v1/titles/?genre=sci-fi&page=2";
const modalContentfiction = document.querySelector(".modal-content-fiction");
var triggerfiction = document.getElementsByClassName("trigger-fiction")
//tout les boutons closes
const closeButtonfiction0 = document.querySelector(".close-button-fiction0");
const closeButtonfiction1 = document.querySelector(".close-button-fiction1");
const closeButtonfiction2 = document.querySelector(".close-button-fiction2");
const closeButtonfiction3 = document.querySelector(".close-button-fiction3");
const closeButtonfiction4 = document.querySelector(".close-button-fiction4");
const closeButtonfiction5 = document.querySelector(".close-button-fiction5");
const closeButtonfiction6 = document.querySelector(".close-button-fiction6");
//Toutes les modals
const modalfiction0 = document.querySelector(".modal-fiction-0");
const modalfiction1 = document.querySelector(".modal-fiction-1");
const modalfiction2 = document.querySelector(".modal-fiction-2");
const modalfiction3 = document.querySelector(".modal-fiction-3");
const modalfiction4 = document.querySelector(".modal-fiction-4");
const modalfiction5 = document.querySelector(".modal-fiction-5");
const modalfiction6 = document.querySelector(".modal-fiction-6");
//Ouvertur modal
function toggleModalfiction0() {
  modalfiction0.classList.toggle("show-modal");
}
function toggleModalfiction1() {
  modalfiction1.classList.toggle("show-modal");
}
function toggleModalfiction2() {
  modalfiction2.classList.toggle("show-modal");
}
function toggleModalfiction3() {
  modalfiction3.classList.toggle("show-modal");
}
function toggleModalfiction4() {
  modalfiction4.classList.toggle("show-modal");
}
function toggleModalfiction5() {
  modalfiction5.classList.toggle("show-modal");
}
function toggleModalfiction6() {
  modalfiction6.classList.toggle("show-modal");
}
//fonction à l'affichage du navigateur
function windowOnClick(event) {
  if (event.target === modalfiction0) {
    toggleModalfiction0();
  }
  if (event.target === modalfiction1) {
    toggleModalfiction1();
  }
  if (event.target === modalfiction2) {
    toggleModalfiction2();
  }
  if (event.target === modalfiction3) {
    toggleModalfiction3();
  }
  if (event.target === modalfiction4) {
    toggleModalfiction4();
  }
  if (event.target === modalfiction5) {
    toggleModalfiction5();
  }
  if (event.target === modalfiction6) {
    toggleModalfiction6();
  }
}

closeButtonfiction0.addEventListener("click", toggleModalfiction0);
closeButtonfiction1.addEventListener("click", toggleModalfiction1);
closeButtonfiction2.addEventListener("click", toggleModalfiction2);
closeButtonfiction3.addEventListener("click", toggleModalfiction3);
closeButtonfiction4.addEventListener("click", toggleModalfiction4);
closeButtonfiction5.addEventListener("click", toggleModalfiction5);
closeButtonfiction6.addEventListener("click", toggleModalfiction6);
//tu touche pas
window.addEventListener("click", windowOnClick);

//image du film dans le carrousel
triggerfiction[0].addEventListener("click", toggleModalfiction0);
triggerfiction[1].addEventListener("click", toggleModalfiction1);
triggerfiction[2].addEventListener("click", toggleModalfiction2);
triggerfiction[3].addEventListener("click", toggleModalfiction3);
triggerfiction[4].addEventListener("click", toggleModalfiction4);
triggerfiction[5].addEventListener("click", toggleModalfiction5);
triggerfiction[6].addEventListener("click", toggleModalfiction6);

let api_page_fiction_1 = fetch(urlPagefiction1)
  .then((response) => response.json())
  .then(async function (data) {
    resultsfiction = data.results;
    for (let result of resultsfiction) {
      listfiction_Movies1.push(await fetch(result.url));
    }

    //fetch le premier film et afficher dans la modal 0
    //copie à partir d'ici
    let moviefiction0 = fetch(listfiction_Movies1[0].url)
    .then((response) => response.json())
    .then(async function (moviefiction0) {
      console.log(moviefiction0.title);
      var image1 = '<img src="' + moviefiction0.image_url + '"/>';
      document.querySelector('#imagefiction-0').innerHTML = image1;
      document.getElementById('titleMoviefiction-0').innerText = moviefiction0.title;
      document.getElementById('imagefictionModal0').innerHTML = image1;
      var realisatorBest = '<span>Réalisateur: </span>' + moviefiction0.directors;
      document.getElementById('realisateurfiction0').innerHTML= realisatorBest;
      var ratedBest = '<span>Rated : </span>' + moviefiction0.rated;
      document.getElementById('votefiction0').innerHTML = ratedBest;
      document.querySelector("#descriptionfiction0").innerText = moviefiction0.description;
      document.querySelector("#genderfiction0").innerText = moviefiction0.genres;
      var yearBest = '<span>Date de sortie : </span>' + moviefiction0.date_published
      document.getElementById('yearfiction0').innerHTML = yearBest;
      var actorsBest = '<span>Acteurs : </span>' + moviefiction0.actors;
      document.getElementById('actorsfiction0').innerHTML = actorsBest;
      var voteBest = '<span>Note moyenne : </span>' + moviefiction0.avg_vote;
      document.getElementById('imbdfiction0').innerHTML = voteBest;
      var dureefiction = '<span>Durée : </span>' + moviefiction0.duration + ' minutes';
      document.getElementById('durationfiction0').innerHTML = dureefiction
      document.getElementById('countryfiction0').innerText = moviefiction0.countries;
      document.getElementById('boxofficefiction0').innerText = 'resultat box office: ' + moviefiction0.worldwide_gross_income+ '$';
    })
    .catch(function (error) {
      console.log(
        "Il y a eu un problème avec l'opération fetch: " + error.message
      );
    });

    let moviefiction1 = fetch(listfiction_Movies1[1].url)
    .then((response) => response.json())
    .then(async function (moviefiction1) {
      console.log(moviefiction1.title);
      var image1 = '<img src="' + moviefiction1.image_url + '"/>';
      document.querySelector('#imagefiction-1').innerHTML = image1;
      document.getElementById('titleMoviefiction-1').innerText = moviefiction1.title;
      document.getElementById('imagefictionModal1').innerHTML = image1;
      var realisatorBest = '<span>Réalisateur: </span>' + moviefiction1.directors;
      document.getElementById('realisateurfiction1').innerHTML= realisatorBest;
      var ratedBest = '<span>Rated : </span>' + moviefiction1.rated;
      document.getElementById('votefiction1').innerHTML = ratedBest;
      document.querySelector("#descriptionfiction1").innerText = moviefiction1.description;
      document.querySelector("#genderfiction1").innerText = moviefiction1.genres;
      var yearBest = '<span>Date de sortie : </span>' + moviefiction1.date_published
      document.getElementById('yearfiction1').innerHTML = yearBest;
      var actorsBest = '<span>Acteurs : </span>' + moviefiction1.actors;
      document.getElementById('actorsfiction1').innerHTML = actorsBest;
      var voteBest = '<span>Note moyenne : </span>' + moviefiction1.avg_vote;
      document.getElementById('imbdfiction1').innerHTML = voteBest;
      var dureefiction = '<span>Durée : </span>' + moviefiction1.duration + ' minutes';
      document.getElementById('durationfiction1').innerHTML = dureefiction
      document.getElementById('countryfiction1').innerText = moviefiction1.countries;
      document.getElementById('boxofficefiction1').innerText = 'resultat box office: ' + moviefiction1.worldwide_gross_income+ '$';
    })
    .catch(function (error) {
      console.log(
        "Il y a eu un problème avec l'opération fetch: " + error.message
      );
    });

    let moviefiction2 = fetch(listfiction_Movies1[2].url)
    .then((response) => response.json())
    .then(async function (moviefiction2) {
      console.log(moviefiction2.title);
      var image1 = '<img src="' + moviefiction2.image_url + '"/>';
      document.querySelector('#imagefiction-2').innerHTML = image1;
      document.getElementById('titleMoviefiction-2').innerText = moviefiction2.title;
      document.getElementById('imagefictionModal2').innerHTML = image1;
      var realisatorBest = '<span>Réalisateur: </span>' + moviefiction2.directors;
      document.getElementById('realisateurfiction2').innerHTML= realisatorBest;
      var ratedBest = '<span>Rated : </span>' + moviefiction2.rated;
      document.getElementById('votefiction2').innerHTML = ratedBest;
      document.querySelector("#descriptionfiction2").innerText = moviefiction2.description;
      document.querySelector("#genderfiction2").innerText = moviefiction2.genres;
      var yearBest = '<span>Date de sortie : </span>' + moviefiction2.date_published
      document.getElementById('yearfiction2').innerHTML = yearBest;
      var actorsBest = '<span>Acteurs : </span>' + moviefiction2.actors;
      document.getElementById('actorsfiction2').innerHTML = actorsBest;
      var voteBest = '<span>Note moyenne : </span>' + moviefiction2.avg_vote;
      document.getElementById('imbdfiction2').innerHTML = voteBest;
      var dureefiction = '<span>Durée : </span>' + moviefiction2.duration + ' minutes';
      document.getElementById('durationfiction2').innerHTML = dureefiction
      document.getElementById('countryfiction2').innerText = moviefiction2.countries;
      document.getElementById('boxofficefiction2').innerText = 'resultat box office: ' + moviefiction2.worldwide_gross_income+ '$';
    })
    .catch(function (error) {
      console.log(
        "Il y a eu un problème avec l'opération fetch: " + error.message
      );
    });

    let moviefiction3 = fetch(listfiction_Movies1[3].url)
    .then((response) => response.json())
    .then(async function (moviefiction3) {
      console.log(moviefiction3.title);
      var image1 = '<img src="' + moviefiction3.image_url + '"/>';
      document.querySelector('#imagefiction-3').innerHTML = image1;
      document.getElementById('titleMoviefiction-3').innerText = moviefiction3.title;
      document.getElementById('imagefictionModal3').innerHTML = image1;
      var realisatorBest = '<span>Réalisateur: </span>' + moviefiction3.directors;
      document.getElementById('realisateurfiction3').innerHTML= realisatorBest;
      var ratedBest = '<span>Rated : </span>' + moviefiction3.rated;
      document.getElementById('votefiction3').innerHTML = ratedBest;
      document.querySelector("#descriptionfiction3").innerText = moviefiction3.description;
      document.querySelector("#genderfiction3").innerText = moviefiction3.genres;
      var yearBest = '<span>Date de sortie : </span>' + moviefiction3.date_published
      document.getElementById('yearfiction3').innerHTML = yearBest;
      var actorsBest = '<span>Acteurs : </span>' + moviefiction3.actors;
      document.getElementById('actorsfiction3').innerHTML = actorsBest;
      var voteBest = '<span>Note moyenne : </span>' + moviefiction3.avg_vote;
      document.getElementById('imbdfiction3').innerHTML = voteBest;
      var dureefiction = '<span>Durée : </span>' + moviefiction3.duration + ' minutes';
      document.getElementById('durationfiction3').innerHTML = dureefiction
      document.getElementById('countryfiction3').innerText = moviefiction3.countries;
      document.getElementById('boxofficefiction3').innerText = 'resultat box office: ' + moviefiction3.worldwide_gross_income+ '$';
    })
    .catch(function (error) {
      console.log(
        "Il y a eu un problème avec l'opération fetch: " + error.message
      );
    });
  });

  let api_page_fiction_2 = fetch(urlPagefiction2)
  .then((response) => response.json())
  .then(async function (data) {
    resultsfiction2 = data.results;
    for (let result of resultsfiction2) {
      listfiction_Movies2.push(await fetch(result.url));
    }

    //fetch le premier film et afficher dans la modal 0
    //copie à partir d'ici
    let moviefiction4 = fetch(listfiction_Movies2[0].url)
    .then((response) => response.json())
    .then(async function (moviefiction4) {
      console.log(moviefiction4.title);
      var image1 = '<img src="' + moviefiction4.image_url + '"/>';
      document.querySelector('#imagefiction-4').innerHTML = image1;
      document.getElementById('titleMoviefiction-4').innerText = moviefiction4.title;
      document.getElementById('imagefictionModal4').innerHTML = image1;
      var realisatorBest = '<span>Réalisateur: </span>' + moviefiction4.directors;
      document.getElementById('realisateurfiction4').innerHTML= realisatorBest;
      var ratedBest = '<span>Rated : </span>' + moviefiction4.rated;
      document.getElementById('votefiction4').innerHTML = ratedBest;
      document.querySelector("#descriptionfiction4").innerText = moviefiction4.description;
      document.querySelector("#genderfiction4").innerText = moviefiction4.genres;
      var yearBest = '<span>Date de sortie : </span>' + moviefiction4.date_published
      document.getElementById('yearfiction4').innerHTML = yearBest;
      var actorsBest = '<span>Acteurs : </span>' + moviefiction4.actors;
      document.getElementById('actorsfiction4').innerHTML = actorsBest;
      var voteBest = '<span>Note moyenne : </span>' + moviefiction4.avg_vote;
      document.getElementById('imbdfiction4').innerHTML = voteBest;
      var dureefiction = '<span>Durée : </span>' + moviefiction4.duration + ' minutes';
      document.getElementById('durationfiction4').innerHTML = dureefiction
      document.getElementById('countryfiction4').innerText = moviefiction4.countries;
      document.getElementById('boxofficefiction4').innerText = 'resultat box office: ' + moviefiction4.worldwide_gross_income+ '$';
    })
    .catch(function (error) {
      console.log(
        "Il y a eu un problème avec l'opération fetch: " + error.message
      );
    });

    let moviefiction5 = fetch(listfiction_Movies2[1].url)
    .then((response) => response.json())
    .then(async function (moviefiction5) {
      console.log(moviefiction5.title);
      var image1 = '<img src="' + moviefiction5.image_url + '"/>';
      document.querySelector('#imagefiction-5').innerHTML = image1;
      document.getElementById('titleMoviefiction-5').innerText = moviefiction5.title;
      document.getElementById('imagefictionModal5').innerHTML = image1;
      var realisatorBest = '<span>Réalisateur: </span>' + moviefiction5.directors;
      document.getElementById('realisateurfiction5').innerHTML= realisatorBest;
      var ratedBest = '<span>Rated : </span>' + moviefiction5.rated;
      document.getElementById('votefiction5').innerHTML = ratedBest;
      document.querySelector("#descriptionfiction5").innerText = moviefiction5.description;
      document.querySelector("#genderfiction5").innerText = moviefiction5.genres;
      var yearBest = '<span>Date de sortie : </span>' + moviefiction5.date_published
      document.getElementById('yearfiction5').innerHTML = yearBest;
      var actorsBest = '<span>Acteurs : </span>' + moviefiction5.actors;
      document.getElementById('actorsfiction5').innerHTML = actorsBest;
      var voteBest = '<span>Note moyenne : </span>' + moviefiction5.avg_vote;
      document.getElementById('imbdfiction5').innerHTML = voteBest;
      var dureefiction = '<span>Durée : </span>' + moviefiction5.duration + ' minutes';
      document.getElementById('durationfiction5').innerHTML = dureefiction
      document.getElementById('countryfiction5').innerText = moviefiction5.countries;
      document.getElementById('boxofficefiction5').innerText = 'resultat box office: ' + moviefiction5.worldwide_gross_income+ '$';
    })
    .catch(function (error) {
      console.log(
        "Il y a eu un problème avec l'opération fetch: " + error.message
      );
    });

    let moviefiction6 = fetch(listfiction_Movies2[2].url)
    .then((response) => response.json())
    .then(async function (moviefiction6) {
      console.log(moviefiction6.title);
      var image1 = '<img src="' + moviefiction6.image_url + '"/>';
      document.querySelector('#imagefiction-6').innerHTML = image1;
      document.getElementById('titleMoviefiction-6').innerText = moviefiction6.title;
      document.getElementById('imagefictionModal6').innerHTML = image1;
      var realisatorBest = '<span>Réalisateur: </span>' + moviefiction6.directors;
      document.getElementById('realisateurfiction6').innerHTML= realisatorBest;
      var ratedBest = '<span>Rated : </span>' + moviefiction6.rated;
      document.getElementById('votefiction6').innerHTML = ratedBest;
      document.querySelector("#descriptionfiction6").innerText = moviefiction6.description;
      document.querySelector("#genderfiction6").innerText = moviefiction6.genres;
      var yearBest = '<span>Date de sortie : </span>' + moviefiction6.date_published
      document.getElementById('yearfiction6').innerHTML = yearBest;
      var actorsBest = '<span>Acteurs : </span>' + moviefiction6.actors;
      document.getElementById('actorsfiction6').innerHTML = actorsBest;
      var voteBest = '<span>Note moyenne : </span>' + moviefiction6.avg_vote;
      document.getElementById('imbdfiction6').innerHTML = voteBest;
      var dureefiction = '<span>Durée : </span>' + moviefiction6.duration + ' minutes';
      document.getElementById('durationfiction6').innerHTML = dureefiction
      document.getElementById('countryfiction6').innerText = moviefiction6.countries;
      document.getElementById('boxofficefiction6').innerText = 'resultat box office: ' + moviefiction6.worldwide_gross_income + '$';
    })
    .catch(function (error) {
      console.log(
        "Il y a eu un problème avec l'opération fetch: " + error.message
      );
    });
  });