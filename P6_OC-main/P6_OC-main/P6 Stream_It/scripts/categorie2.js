let resultsHoror
let resultsHoror2;
let listHoror_Movies1 = [];
let listHoror_Movies2 = [];
let urlPageHoror1 = "http://127.0.0.1:8000/api/v1/titles/?genre=horror";
let urlPageHoror2 = "http://127.0.0.1:8000/api/v1/titles/?genre=horror&page=2";
const modalContentHoror = document.querySelector(".modal-content-Horor");
var triggerHoror = document.getElementsByClassName("trigger-horor")
//tout les boutons closes
const closeButtonHoror0 = document.querySelector(".close-button-Horor0");
const closeButtonHoror1 = document.querySelector(".close-button-Horor1");
const closeButtonHoror2 = document.querySelector(".close-button-Horor2");
const closeButtonHoror3 = document.querySelector(".close-button-Horor3");
const closeButtonHoror4 = document.querySelector(".close-button-Horor4");
const closeButtonHoror5 = document.querySelector(".close-button-Horor5");
const closeButtonHoror6 = document.querySelector(".close-button-Horor6");
//Toutes les modals
const modalHoror0 = document.querySelector(".modal-Horor-0");
const modalHoror1 = document.querySelector(".modal-Horor-1");
const modalHoror2 = document.querySelector(".modal-Horor-2");
const modalHoror3 = document.querySelector(".modal-Horor-3");
const modalHoror4 = document.querySelector(".modal-Horor-4");
const modalHoror5 = document.querySelector(".modal-Horor-5");
const modalHoror6 = document.querySelector(".modal-Horor-6");
//Ouvertur modal
function toggleModalHoror0() {
  modalHoror0.classList.toggle("show-modal");
}
function toggleModalHoror1() {
  modalHoror1.classList.toggle("show-modal");
}
function toggleModalHoror2() {
  modalHoror2.classList.toggle("show-modal");
}
function toggleModalHoror3() {
  modalHoror3.classList.toggle("show-modal");
}
function toggleModalHoror4() {
  modalHoror4.classList.toggle("show-modal");
}
function toggleModalHoror5() {
  modalHoror5.classList.toggle("show-modal");
}
function toggleModalHoror6() {
  modalHoror6.classList.toggle("show-modal");
}
//fonction à l'affichage du navigateur
function windowOnClick(event) {
  if (event.target === modalHoror0) {
    toggleModalHoror0();
  }
  if (event.target === modalHoror1) {
    toggleModalHoror1();
  }
  if (event.target === modalHoror2) {
    toggleModalHoror2();
  }
  if (event.target === modalHoror3) {
    toggleModalHoror3();
  }
  if (event.target === modalHoror4) {
    toggleModalHoror4();
  }
  if (event.target === modalHoror5) {
    toggleModalHoror5();
  }
}

closeButtonHoror0.addEventListener("click", toggleModalHoror0);
closeButtonHoror1.addEventListener("click", toggleModalHoror1);
closeButtonHoror2.addEventListener("click", toggleModalHoror2);
closeButtonHoror3.addEventListener("click", toggleModalHoror3);
closeButtonHoror4.addEventListener("click", toggleModalHoror4);
closeButtonHoror5.addEventListener("click", toggleModalHoror5);
closeButtonHoror6.addEventListener("click", toggleModalHoror6);
//tu touche pas
window.addEventListener("click", windowOnClick);

//image du film dans le carrousel
triggerHoror[0].addEventListener("click", toggleModalHoror0);
triggerHoror[1].addEventListener("click", toggleModalHoror1);
triggerHoror[2].addEventListener("click", toggleModalHoror2);
triggerHoror[3].addEventListener("click", toggleModalHoror3);
triggerHoror[4].addEventListener("click", toggleModalHoror4);
triggerHoror[5].addEventListener("click", toggleModalHoror5);
triggerHoror[6].addEventListener("click", toggleModalHoror6);

let api_page_Horor_1 = fetch(urlPageHoror1)
  .then((response) => response.json())
  .then(async function (data) {
    resultsHoror = data.results;
    for (let result of resultsHoror) {
      listHoror_Movies1.push(await fetch(result.url));
    }

    //fetch le premier film et afficher dans la modal 0
    //copie à partir d'ici
    let movieHoror0 = fetch(listHoror_Movies1[0].url)
    .then((response) => response.json())
    .then(async function (movieHoror0) {
      console.log(movieHoror0.title);
      var image1 = '<img src="' + movieHoror0.image_url + '"/>';
      document.querySelector('#imageHoror-0').innerHTML = image1;
      document.getElementById('titleMovieHoror-0').innerText = movieHoror0.title;
      document.getElementById('imageHororModal0').innerHTML = image1;
      var realisatorBest = '<span>Réalisateur: </span>' + movieHoror0.directors;
      document.getElementById('realisateurHoror0').innerHTML= realisatorBest;
      var ratedBest = '<span>Rated : </span>' + movieHoror0.rated;
      document.getElementById('voteHoror0').innerHTML = ratedBest;
      document.querySelector("#descriptionHoror0").innerText = movieHoror0.description;
      document.querySelector("#genderHoror0").innerText = movieHoror0.genres;
      var yearBest = '<span>Date de sortie : </span>' + movieHoror0.date_published
      document.getElementById('yearHoror0').innerHTML = yearBest;
      var voteBest = '<span>Note moyenne : </span>' + movieHoror0.avg_vote;
      document.getElementById('imbdHoror0').innerHTML = voteBest;
      var actorsBest = '<span>Acteurs : </span>' + movieHoror0.actors;
      document.getElementById('actorsHoror0').innerHTML = actorsBest;
      var dureeHoror = '<span>Durée : </span>' + movieHoror0.duration + ' minutes';
      document.getElementById('durationHoror0').innerHTML = dureeHoror
      document.getElementById('countryHoror0').innerText = movieHoror0.countries;
      document.getElementById('boxofficeHoror0').innerText = 'resultat box office: ' + movieHoror0.worldwide_gross_income+ '$';

    })
    .catch(function (error) {
      console.log(
        "Il y a eu un problème avec l'opération fetch: " + error.message
      );
    });

    let movieHoror1 = fetch(listHoror_Movies1[1].url)
    .then((response) => response.json())
    .then(async function (movieHoror1) {
      console.log(movieHoror1.title);
      var image1 = '<img src="' + movieHoror1.image_url + '"/>';
      document.querySelector('#imageHoror-1').innerHTML = image1;
      document.getElementById('titleMovieHoror-1').innerText = movieHoror1.title;
      document.getElementById('imageHororModal1').innerHTML = image1;
      var realisatorBest = '<span>Réalisateur: </span>' + movieHoror1.directors;
      document.getElementById('realisateurHoror1').innerHTML= realisatorBest;
      var ratedBest = '<span>Rated : </span>' + movieHoror1.rated;
      document.getElementById('voteHoror1').innerHTML = ratedBest;
      document.querySelector("#descriptionHoror1").innerText = movieHoror1.description;
      document.querySelector("#genderHoror1").innerText = movieHoror1.genres;
      var yearBest = '<span>Date de sortie : </span>' + movieHoror1.date_published
      document.getElementById('yearHoror1').innerHTML = yearBest;
      var voteBest = '<span>Note moyenne : </span>' + movieHoror1.avg_vote;
      document.getElementById('imbdHoror1').innerHTML = voteBest;
      var actorsBest = '<span>Acteurs : </span>' + movieHoror1.actors;
      document.getElementById('actorsHoror1').innerHTML = actorsBest;
      var dureeHoror = '<span>Durée : </span>' + movieHoror1.duration + ' minutes';
      document.getElementById('durationHoror1').innerHTML = dureeHoror
      document.getElementById('countryHoror1').innerText = movieHoror1.countries;
      document.getElementById('boxofficeHoror1').innerText = 'resultat box office: ' + movieHoror1.worldwide_gross_income+ '$';
    })
    .catch(function (error) {
      console.log(
        "Il y a eu un problème avec l'opération fetch: " + error.message
      );
    });

    let movieHoror2 = fetch(listHoror_Movies1[2].url)
    .then((response) => response.json())
    .then(async function (movieHoror2) {
      console.log(movieHoror2.title);
      var image1 = '<img src="' + movieHoror2.image_url + '"/>';
      document.querySelector('#imageHoror-2').innerHTML = image1;
      document.getElementById('titleMovieHoror-2').innerText = movieHoror2.title;
      document.getElementById('imageHororModal2').innerHTML = image1;
      var realisatorBest = '<span>Réalisateur: </span>' + movieHoror2.directors;
      document.getElementById('realisateurHoror2').innerHTML= realisatorBest;
      var ratedBest = '<span>Rated : </span>' + movieHoror2.rated;
      document.getElementById('voteHoror2').innerHTML = ratedBest;
      document.querySelector("#descriptionHoror2").innerText = movieHoror2.description;
      document.querySelector("#genderHoror2").innerText = movieHoror2.genres;
      var yearBest = '<span>Date de sortie : </span>' + movieHoror2.date_published
      document.getElementById('yearHoror2').innerHTML = yearBest;
      var voteBest = '<span>Note moyenne : </span>' + movieHoror2.avg_vote;
      document.getElementById('imbdHoror2').innerHTML = voteBest;
      var actorsBest = '<span>Acteurs : </span>' + movieHoror2.actors;
      document.getElementById('actorsHoror2').innerHTML = actorsBest;
      var dureeHoror = '<span>Durée : </span>' + movieHoror2.duration + ' minutes';
      document.getElementById('durationHoror2').innerHTML = dureeHoror
      document.getElementById('countryHoror2').innerText = movieHoror2.countries;
      document.getElementById('boxofficeHoror2').innerText = 'resultat box office: ' + movieHoror2.worldwide_gross_income+ '$';
    })
    .catch(function (error) {
      console.log(
        "Il y a eu un problème avec l'opération fetch: " + error.message
      );
    });

    let movieHoror3 = fetch(listHoror_Movies1[3].url)
    .then((response) => response.json())
    .then(async function (movieHoror3) {
      console.log(movieHoror3.title);
      var image1 = '<img src="' + movieHoror3.image_url + '"/>';
      document.querySelector('#imageHoror-3').innerHTML = image1;
      document.getElementById('titleMovieHoror-3').innerText = movieHoror3.title;
      document.getElementById('imageHororModal3').innerHTML = image1;
      var realisatorBest = '<span>Réalisateur: </span>' + movieHoror3.directors;
      document.getElementById('realisateurHoror3').innerHTML= realisatorBest;
      var ratedBest = '<span>Rated : </span>' + movieHoror3.rated;
      document.getElementById('voteHoror3').innerHTML = ratedBest;
      document.querySelector("#descriptionHoror3").innerText = movieHoror3.description;
      document.querySelector("#genderHoror3").innerText = movieHoror3.genres;
      var yearBest = '<span>Date de sortie : </span>' + movieHoror3.date_published
      document.getElementById('yearHoror3').innerHTML = yearBest;
      var voteBest = '<span>Note moyenne : </span>' + movieHoror3.avg_vote;
      document.getElementById('imbdHoror3').innerHTML = voteBest;
      var actorsBest = '<span>Acteurs : </span>' + movieHoror3.actors;
      document.getElementById('actorsHoror3').innerHTML = actorsBest;
      var dureeHoror = '<span>Durée : </span>' + movieHoror3.duration + ' minutes';
      document.getElementById('durationHoror3').innerHTML = dureeHoror
      document.getElementById('countryHoror3').innerText = movieHoror3.countries;
      document.getElementById('boxofficeHoror3').innerText = 'resultat box office: ' + movieHoror3.worldwide_gross_income+ '$';
    })
    .catch(function (error) {
      console.log(
        "Il y a eu un problème avec l'opération fetch: " + error.message
      );
    });
  });

  let api_page_Horor_2 = fetch(urlPageHoror2)
  .then((response) => response.json())
  .then(async function (data) {
    resultsHoror2 = data.results;
    for (let result of resultsHoror2) {
      listHoror_Movies2.push(await fetch(result.url));
    }

    //fetch le premier film et afficher dans la modal 0
    //copie à partir d'ici
    let movieHoror4 = fetch(listHoror_Movies2[0].url)
    .then((response) => response.json())
    .then(async function (movieHoror4) {
      console.log(movieHoror4.title);
      var image1 = '<img src="' + movieHoror4.image_url + '"/>';
      document.querySelector('#imageHoror-4').innerHTML = image1;
      document.getElementById('titleMovieHoror-4').innerText = movieHoror4.title;
      document.getElementById('imageHororModal4').innerHTML = image1;
      var realisatorBest = '<span>Réalisateur: </span>' + movieHoror4.directors;
      document.getElementById('realisateurHoror4').innerHTML= realisatorBest;
      var ratedBest = '<span>Rated : </span>' + movieHoror4.rated;
      document.getElementById('voteHoror4').innerHTML = ratedBest;
      document.querySelector("#descriptionHoror4").innerText = movieHoror4.description;
      document.querySelector("#genderHoror4").innerText = movieHoror4.genres;
      var yearBest = '<span>Date de sortie : </span>' + movieHoror4.date_published
      document.getElementById('yearHoror4').innerHTML = yearBest;
      var voteBest = '<span>Note moyenne : </span>' + movieHoror4.avg_vote;
      document.getElementById('imbdHoror4').innerHTML = voteBest;
      var actorsBest = '<span>Acteurs : </span>' + movieHoror4.actors;
      document.getElementById('actorsHoror4').innerHTML = actorsBest;
      var dureeHoror = '<span>Durée : </span>' + movieHoror4.duration + ' minutes';
      document.getElementById('durationHoror4').innerHTML = dureeHoror
      document.getElementById('countryHoror4').innerText = movieHoror4.countries;
      document.getElementById('boxofficeHoror4').innerText = 'resultat box office: ' + movieHoror4.worldwide_gross_income+ '$';
    })
    .catch(function (error) {
      console.log(
        "Il y a eu un problème avec l'opération fetch: " + error.message
      );
    });

    let movieHoror5 = fetch(listHoror_Movies2[1].url)
    .then((response) => response.json())
    .then(async function (movieHoror5) {
      console.log(movieHoror5.title);
      var image1 = '<img src="' + movieHoror5.image_url + '"/>';
      document.querySelector('#imageHoror-5').innerHTML = image1;
      document.getElementById('titleMovieHoror-5').innerText = movieHoror5.title;
      document.getElementById('imageHororModal5').innerHTML = image1;
      var realisatorBest = '<span>Réalisateur: </span>' + movieHoror5.directors;
      document.getElementById('realisateurHoror5').innerHTML= realisatorBest;
      var ratedBest = '<span>Rated : </span>' + movieHoror5.rated;
      document.getElementById('voteHoror5').innerHTML = ratedBest;
      document.querySelector("#descriptionHoror5").innerText = movieHoror5.description;
      document.querySelector("#genderHoror5").innerText = movieHoror5.genres;
      var yearBest = '<span>Date de sortie : </span>' + movieHoror5.date_published
      document.getElementById('yearHoror5').innerHTML = yearBest;
      var voteBest = '<span>Note moyenne : </span>' + movieHoror5.avg_vote;
      document.getElementById('imbdHoror5').innerHTML = voteBest;
      var actorsBest = '<span>Acteurs : </span>' + movieHoror5.actors;
      document.getElementById('actorsHoror5').innerHTML = actorsBest;
      var dureeHoror = '<span>Durée : </span>' + movieHoror5.duration + ' minutes';
      document.getElementById('durationHoror5').innerHTML = dureeHoror
      document.getElementById('countryHoror5').innerText = movieHoror5.countries;
      document.getElementById('boxofficeHoror5').innerText = 'resultat box office: ' + movieHoror5.worldwide_gross_income+ '$';
    })
    .catch(function (error) {
      console.log(
        "Il y a eu un problème avec l'opération fetch: " + error.message
      );
    });

    let movieHoror6 = fetch(listHoror_Movies2[2].url)
    .then((response) => response.json())
    .then(async function (movieHoror6) {
      console.log(movieHoror6.title);
      var image1 = '<img src="' + movieHoror6.image_url + '"/>';
      document.querySelector('#imageHoror-6').innerHTML = image1;
      document.getElementById('titleMovieHoror-6').innerText = movieHoror6.title;
      document.getElementById('imageHororModal6').innerHTML = image1;
      var realisatorBest = '<span>Réalisateur: </span>' + movieHoror6.directors;
      document.getElementById('realisateurHoror6').innerHTML= realisatorBest;
      var ratedBest = '<span>Rated : </span>' + movieHoror6.rated;
      document.getElementById('voteHoror6').innerHTML = ratedBest;
      document.querySelector("#descriptionHoror6").innerText = movieHoror6.description;
      document.querySelector("#genderHoror6").innerText = movieHoror6.genres;
      var yearBest = '<span>Date de sortie : </span>' + movieHoror6.date_published
      document.getElementById('yearHoror6').innerHTML = yearBest;
      var voteBest = '<span>Note moyenne : </span>' + movieHoror6.avg_vote;
      document.getElementById('imbdHoror6').innerHTML = voteBest;
      var actorsBest = '<span>Acteurs : </span>' + movieHoror6.actors;
      document.getElementById('actorsHoror6').innerHTML = actorsBest;
      var dureeHoror = '<span>Durée : </span>' + movieHoror6.duration + ' minutes';
      document.getElementById('durationHoror6').innerHTML = dureeHoror
      document.getElementById('countryHoror6').innerText = movieHoror6.countries;
      document.getElementById('boxofficeHoror6').innerText = 'resultat box office: ' + movieHoror6.worldwide_gross_income+ '$';
    })
    .catch(function (error) {
      console.log(
        "Il y a eu un problème avec l'opération fetch: " + error.message
      );
    });
  });