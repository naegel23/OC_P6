let resultsAction;
let resultsAction2;
let listAction_Movies1 = [];
let listAction_Movies2 = [];
let urlPageAction1 = "http://127.0.0.1:8000/api/v1/titles/?genre=action";
let urlPageAction2 = "http://127.0.0.1:8000/api/v1/titles/?genre=action&page=2";
const modalContentAction = document.querySelector(".modal-content-action");
var triggerAction = document.getElementsByClassName("trigger-action");

//tout les boutons closes
const closeButtonAction0 = document.querySelector(".close-button-action0");
const closeButtonAction1 = document.querySelector(".close-button-action1");
const closeButtonAction2 = document.querySelector(".close-button-action2");
const closeButtonAction3 = document.querySelector(".close-button-action3");
const closeButtonAction4 = document.querySelector(".close-button-action4");
const closeButtonAction5 = document.querySelector(".close-button-action5");
const closeButtonAction6 = document.querySelector(".close-button-action6");
//Toutes les modals
const modalAction0 = document.querySelector(".modal-action-0");
const modalAction1 = document.querySelector(".modal-action-1");
const modalAction2 = document.querySelector(".modal-action-2");
const modalAction3 = document.querySelector(".modal-action-3");
const modalAction4 = document.querySelector(".modal-action-4");
const modalAction5 = document.querySelector(".modal-action-5");
const modalAction6 = document.querySelector(".modal-action-6");
//Ouvertur modal
function toggleModalAction0() {
  modalAction0.classList.toggle("show-modal");
}
function toggleModalAction1() {
  modalAction1.classList.toggle("show-modal");
}
function toggleModalAction2() {
  modalAction2.classList.toggle("show-modal");
}
function toggleModalAction3() {
  modalAction3.classList.toggle("show-modal");
}
function toggleModalAction4() {
  modalAction4.classList.toggle("show-modal");
}
function toggleModalAction5() {
  modalAction5.classList.toggle("show-modal");
}
function toggleModalAction6() {
  modalAction6.classList.toggle("show-modal");
}
//fonction à l'affichage du navigateur
function windowOnClick(event) {
  if (event.target === modalAction0) {
    toggleModalAction0();
  }
  if (event.target === modalAction1) {
    toggleModalAction1();
  }
  if (event.target === modalAction2) {
    toggleModalAction2();
  }
  if (event.target === modalAction3) {
    toggleModalAction3();
  }
  if (event.target === modalAction4) {
    toggleModalAction4();
  }
  if (event.target === modalAction5) {
    toggleModalAction5();
  }
}

closeButtonAction0.addEventListener("click", toggleModalAction0);
closeButtonAction1.addEventListener("click", toggleModalAction1);
closeButtonAction2.addEventListener("click", toggleModalAction2);
closeButtonAction3.addEventListener("click", toggleModalAction3);
closeButtonAction4.addEventListener("click", toggleModalAction4);
closeButtonAction5.addEventListener("click", toggleModalAction5);
closeButtonAction6.addEventListener("click", toggleModalAction6);
//tu touche pas
window.addEventListener("click", windowOnClick);

//image du film dans le carrousel
triggerAction[0].addEventListener("click", toggleModalAction0);
triggerAction[1].addEventListener("click", toggleModalAction1);
triggerAction[2].addEventListener("click", toggleModalAction2);
triggerAction[3].addEventListener("click", toggleModalAction3);
triggerAction[4].addEventListener("click", toggleModalAction4);
triggerAction[5].addEventListener("click", toggleModalAction5);
triggerAction[6].addEventListener("click", toggleModalAction6);

let api_page_action_1 = fetch(urlPageAction1)
  .then((response) => response.json())
  .then(async function (data) {
    resultsAction = data.results;
    for (let result of resultsAction) {
      listAction_Movies1.push(await fetch(result.url));
    }

    //fetch le premier film et afficher dans la modal 0
    //copie à partir d'ici
    let movieAction0 = fetch(listAction_Movies1[0].url)
    .then((response) => response.json())
    .then(async function (movieAction0) {
      console.log(movieAction0.title);
      var image1 = '<img src="' + movieAction0.image_url + '"/>';
      document.querySelector('#imageAction-0').innerHTML = image1;
      document.getElementById('titleMovieAction-0').innerText = movieAction0.title;
      document.getElementById('imageActionModal0').innerHTML = image1;
      var realisatorBest = '<span>Réalisateur: </span>' + movieAction0.directors;
      document.getElementById('realisateurAction0').innerHTML= realisatorBest;
      var ratedBest = '<span>Rated : </span>' + movieAction0.rated;
      document.getElementById('voteAction0').innerHTML = ratedBest;
      document.querySelector("#descriptionAction0").innerText = movieAction0.description;
      document.querySelector("#genderAction0").innerText = movieAction0.genres;
      var yearBest = '<span>Date de sortie : </span>' + movieAction0.date_published
      document.getElementById('yearAction0').innerHTML = yearBest;
      var voteBest = '<span>Note moyenne : </span>' + movieAction0.avg_vote;
      var actorsBest = '<span>Acteurs : </span>' + movieAction0.actors;
      document.getElementById('actorsAction0').innerHTML = actorsBest;
      document.getElementById('imbdAction0').innerHTML = voteBest;
      var dureeAction = '<span>Durée : </span>' + movieAction0.duration + ' minutes';
      document.getElementById('durationAction0').innerHTML = dureeAction;
      document.getElementById('countryAction0').innerText = movieAction0.countries;
      document.getElementById('boxofficeAction0').innerText = 'resultat box office: ' + movieAction0.worldwide_gross_income+ '$';
    })
    .catch(function (error) {
      console.log(
        "Il y a eu un problème avec l'opération fetch: " + error.message
      );
    });

    let movieAction1 = fetch(listAction_Movies1[1].url)
    .then((response) => response.json())
    .then(async function (movieAction1) {
      console.log(movieAction1.title);
      var image1 = '<img src="' + movieAction1.image_url + '"/>';
      document.querySelector('#imageAction-1').innerHTML = image1;
      document.getElementById('titleMovieAction-1').innerText = movieAction1.title;
      document.getElementById('imageActionModal1').innerHTML = image1;
      var realisatorBest = '<span>Réalisateur: </span>' + movieAction1.directors;
      document.getElementById('realisateurAction1').innerHTML= realisatorBest;
      var ratedBest = '<span>Rated : </span>' + movieAction1.rated;
      document.getElementById('voteAction1').innerHTML = ratedBest;
      document.querySelector("#descriptionAction1").innerText = movieAction1.description;
      document.querySelector("#genderAction1").innerText = movieAction1.genres;
      var yearBest = '<span>Date de sortie : </span>' + movieAction1.date_published
      document.getElementById('yearAction1').innerHTML = yearBest;
      var voteBest = '<span>Note moyenne : </span>' + movieAction1.avg_vote;
      var actorsBest = '<span>Acteurs : </span>' + movieAction1.actors;
      document.getElementById('actorsAction1').innerHTML = actorsBest;
      document.getElementById('imbdAction1').innerHTML = voteBest;
      var dureeAction = '<span>Durée : </span>' + movieAction1.duration + ' minutes';
      document.getElementById('durationAction1').innerHTML = dureeAction;
      document.getElementById('countryAction1').innerText = movieAction1.countries;
      document.getElementById('boxofficeAction1').innerText = 'resultat box office: ' + movieAction1.worldwide_gross_income+ '$';
    })
    .catch(function (error) {
      console.log(
        "Il y a eu un problème avec l'opération fetch: " + error.message
      );
    });

    let movieAction2 = fetch(listAction_Movies1[2].url)
    .then((response) => response.json())
    .then(async function (movieAction2) {
      console.log(movieAction2.title);
      var image1 = '<img src="' + movieAction2.image_url + '"/>';
      document.querySelector('#imageAction-2').innerHTML = image1;
      document.getElementById('titleMovieAction-2').innerText = movieAction2.title;
      document.getElementById('imageActionModal2').innerHTML = image1;
      var realisatorBest = '<span>Réalisateur: </span>' + movieAction2.directors;
      document.getElementById('realisateurAction2').innerHTML= realisatorBest;
      var ratedBest = '<span>Rated : </span>' + movieAction2.rated;
      document.getElementById('voteAction2').innerHTML = ratedBest;
      document.querySelector("#descriptionAction2").innerText = movieAction2.description;
      document.querySelector("#genderAction2").innerText = movieAction2.genres;
      var yearBest = '<span>Date de sortie : </span>' + movieAction2.date_published
      document.getElementById('yearAction2').innerHTML = yearBest;
      var voteBest = '<span>Note moyenne : </span>' + movieAction2.avg_vote;
      var actorsBest = '<span>Acteurs : </span>' + movieAction2.actors;
      document.getElementById('actorsAction2').innerHTML = actorsBest;
      document.getElementById('imbdAction2').innerHTML = voteBest;
      var dureeAction = '<span>Durée : </span>' + movieAction2.duration + ' minutes';
      document.getElementById('durationAction2').innerHTML = dureeAction;
      document.getElementById('countryAction2').innerText = movieAction2.countries;
      document.getElementById('boxofficeAction2').innerText = 'resultat box office: ' + movieAction2.worldwide_gross_income+ '$';
    })
    .catch(function (error) {
      console.log(
        "Il y a eu un problème avec l'opération fetch: " + error.message
      );
    });

    let movieAction3 = fetch(listAction_Movies1[3].url)
    .then((response) => response.json())
    .then(async function (movieAction3) {
      console.log(movieAction3.title);
      var image1 = '<img src="' + movieAction3.image_url + '"/>';
      document.querySelector('#imageAction-3').innerHTML = image1;
      document.getElementById('titleMovieAction-3').innerText = movieAction3.title;
      document.getElementById('imageActionModal3').innerHTML = image1;
      var realisatorBest = '<span>Réalisateur: </span>' + movieAction3.directors;
      document.getElementById('realisateurAction3').innerHTML= realisatorBest;
      var ratedBest = '<span>Rated : </span>' + movieAction3.rated;
      document.getElementById('voteAction3').innerHTML = ratedBest;
      document.querySelector("#descriptionAction3").innerText = movieAction3.description;
      document.querySelector("#genderAction3").innerText = movieAction3.genres;
      var yearBest = '<span>Date de sortie : </span>' + movieAction3.date_published
      document.getElementById('yearAction3').innerHTML = yearBest;
      var voteBest = '<span>Note moyenne : </span>' + movieAction3.avg_vote;
      var actorsBest = '<span>Acteurs : </span>' + movieAction3.actors;
      document.getElementById('actorsAction3').innerHTML = actorsBest;
      document.getElementById('imbdAction3').innerHTML = voteBest;
      var dureeAction = '<span>Durée : </span>' + movieAction3.duration + ' minutes';
      document.getElementById('durationAction3').innerHTML = dureeAction;
      document.getElementById('countryAction3').innerText = movieAction3.countries;
      document.getElementById('boxofficeAction3').innerText = 'resultat box office: ' + movieAction3.worldwide_gross_income+ '$';
    })
    .catch(function (error) {
      console.log(
        "Il y a eu un problème avec l'opération fetch: " + error.message
      );
    });

  });

  let api_page_action_2 = fetch(urlPageAction2)
  .then((response) => response.json())
  .then(async function (data) {
    resultsAction2 = data.results;
    for (let result of resultsAction2) {
      listAction_Movies2.push(await fetch(result.url));
    }

    //fetch le premier film et afficher dans la modal 0
    //copie à partir d'ici
    let movieAction4 = fetch(listAction_Movies2[0].url)
    .then((response) => response.json())
    .then(async function (movieAction4) {
      console.log(movieAction4.title);
      var image1 = '<img src="' + movieAction4.image_url + '"/>';
      document.querySelector('#imageAction-4').innerHTML = image1;
      document.getElementById('titleMovieAction-4').innerText = movieAction4.title;
      document.getElementById('imageActionModal4').innerHTML = image1;
      var realisatorBest = '<span>Réalisateur: </span>' + movieAction4.directors;
      document.getElementById('realisateurAction4').innerHTML= realisatorBest;
      var ratedBest = '<span>Rated : </span>' + movieAction4.rated;
      document.getElementById('voteAction0').innerHTML = ratedBest;
      document.querySelector("#descriptionAction4").innerText = movieAction4.description;
      document.querySelector("#genderAction4").innerText = movieAction4.genres;
      var yearBest = '<span>Date de sortie : </span>' + movieAction4.date_published
      document.getElementById('yearAction0').innerHTML = yearBest;
      var voteBest = '<span>Note moyenne : </span>' + movieAction4.avg_vote;
      var actorsBest = '<span>Acteurs : </span>' + movieAction4.actors;
      document.getElementById('actorsAction4').innerHTML = actorsBest;
      document.getElementById('imbdAction0').innerHTML = voteBest;
      var dureeAction = '<span>Durée : </span>' + movieAction4.duration + ' minutes';
      document.getElementById('durationAction4').innerHTML = dureeAction;
      document.getElementById('countryAction4').innerText = movieAction4.countries;
      document.getElementById('boxofficeAction4').innerText = 'resultat box office: ' + movieAction4.worldwide_gross_income+ '$';
    })
    .catch(function (error) {
      console.log(
        "Il y a eu un problème avec l'opération fetch: " + error.message
      );
    });

    let movieAction5 = fetch(listAction_Movies2[01].url)
    .then((response) => response.json())
    .then(async function (movieAction5) {
      console.log(movieAction5.title);
      var image1 = '<img src="' + movieAction5.image_url + '"/>';
      document.querySelector('#imageAction-5').innerHTML = image1;
      document.getElementById('titleMovieAction-5').innerText = movieAction5.title;
      document.getElementById('imageActionModal5').innerHTML = image1;
      var realisatorBest = '<span>Réalisateur: </span>' + movieAction5.directors;
      document.getElementById('realisateurAction5').innerHTML= realisatorBest;
      var ratedBest = '<span>Rated : </span>' + movieAction5.rated;
      document.getElementById('voteAction5').innerHTML = ratedBest;
      document.querySelector("#descriptionAction5").innerText = movieAction5.description;
      document.querySelector("#genderAction5").innerText = movieAction5.genres;
      var yearBest = '<span>Date de sortie : </span>' + movieAction5.date_published
      document.getElementById('yearAction5').innerHTML = yearBest;
      var voteBest = '<span>Note moyenne : </span>' + movieAction5.avg_vote;
      var actorsBest = '<span>Acteurs : </span>' + movieAction5.actors;
      document.getElementById('actorsAction5').innerHTML = actorsBest;
      document.getElementById('imbdAction5').innerHTML = voteBest;
      var dureeAction = '<span>Durée : </span>' + movieAction5.duration + ' minutes';
      document.getElementById('durationAction5').innerHTML = dureeAction;
      document.getElementById('countryAction5').innerText = movieAction5.countries;
      document.getElementById('boxofficeAction5').innerText = 'resultat box office: ' + movieAction5.worldwide_gross_income+ '$';
    })
    .catch(function (error) {
      console.log(
        "Il y a eu un problème avec l'opération fetch: " + error.message
      );
    });

    let movieAction6 = fetch(listAction_Movies2[2].url)
    .then((response) => response.json())
    .then(async function (movieAction6) {
      console.log(movieAction6.title);
      var image1 = '<img src="' + movieAction6.image_url + '"/>';
      document.querySelector('#imageAction-6').innerHTML = image1;
      document.getElementById('titleMovieAction-6').innerText = movieAction6.title;
      document.getElementById('imageActionModal6').innerHTML = image1;
      var realisatorBest = '<span>Réalisateur: </span>' + movieAction6.directors;
      document.getElementById('realisateurAction6').innerHTML= realisatorBest;
      var ratedBest = '<span>Rated : </span>' + movieAction6.rated;
      document.getElementById('voteAction6').innerHTML = ratedBest;
      document.querySelector("#descriptionAction6").innerText = movieAction6.description;
      document.querySelector("#genderAction6").innerText = movieAction6.genres;
      var yearBest = '<span>Date de sortie : </span>' + movieAction6.date_published
      document.getElementById('yearAction0').innerHTML = yearBest;
      var voteBest = '<span>Note moyenne : </span>' + movieAction6.avg_vote;
      var actorsBest = '<span>Acteurs : </span>' + movieAction6.actors;
      document.getElementById('actorsAction6').innerHTML = actorsBest;
      document.getElementById('imbdAction6').innerHTML = voteBest;
      var dureeAction = '<span>Durée : </span>' + movieAction6.duration + ' minutes';
      document.getElementById('durationAction6').innerHTML = dureeAction;
      document.getElementById('countryAction6').innerText = movieAction6.countries;
      document.getElementById('boxofficeAction6').innerText = 'resultat box office: ' + movieAction6.worldwide_gross_income+ '$';
    })
    .catch(function (error) {
      console.log(
        "Il y a eu un problème avec l'opération fetch: " + error.message
      );
    });
  });