let results;
let results2;
let listBest_Movies1 = [];
let listBest_Movies2 = [];
let urlPage1 =
  "http://localhost:8000/api/v1/titles/?sort_by=-imdb_score&page=1";
let urlPage2 =
  "http://localhost:8000/api/v1/titles/?sort_by=-imdb_score&page=2";
const modalContent = document.querySelector('.modal-content');
var trigger = document.getElementsByClassName("trigger");

//tout les boutons closes
const closeButton0 = document.querySelector(".close-button0");
const closeButton1 = document.querySelector(".close-button1");
const closeButton2 = document.querySelector(".close-button2");
const closeButton3 = document.querySelector(".close-button3");
const closeButton4 = document.querySelector(".close-button4");
const closeButton5 = document.querySelector(".close-button5");
const closeButton6 = document.querySelector(".close-button6");
//Toutes les modals
const modal0 = document.querySelector(".modal0");
const modal1 = document.querySelector(".modal1");
const modal2 = document.querySelector(".modal2");
const modal3 = document.querySelector(".modal3");
const modal4 = document.querySelector(".modal4");
const modal5 = document.querySelector(".modal5");
const modal6 = document.querySelector(".modal6");
//Ouvertur modal
  function toggleModal0() {
    modal0.classList.toggle("show-modal");
    
  }
  function toggleModal1() {
    modal1.classList.toggle("show-modal");
    
  }
  function toggleModal2() {
    modal2.classList.toggle("show-modal");
    
  }
  function toggleModal3() {
    modal3.classList.toggle("show-modal");
    
  }
  function toggleModal4() {
    modal4.classList.toggle("show-modal");
    
  }
  function toggleModal5() {
    modal5.classList.toggle("show-modal");
    
  }
  function toggleModal6() {
    modal6.classList.toggle("show-modal");
    
  }

  //fonction à l'affichage du navigateur
  function windowOnClick(event) {
    if (event.target === modal0) {
      toggleModal0();
    }
    if (event.target === modal1) {
      toggleModal1();
    }
    if (event.target === modal2) {
      toggleModal2();
    }
    if (event.target === modal3) {
      toggleModal3();
    }
    if (event.target === modal4) {
      toggleModal4();
    }
    if (event.target === modal5) {
      toggleModal5();
    }
    if (event.target === modal6) {
      toggleModal6();
    }
  }

  closeButton0.addEventListener("click", toggleModal0);
  closeButton1.addEventListener("click", toggleModal1);
  closeButton2.addEventListener("click", toggleModal2);
  closeButton3.addEventListener("click", toggleModal3);
  closeButton4.addEventListener("click", toggleModal4);
  closeButton5.addEventListener("click", toggleModal5);
  closeButton6.addEventListener("click", toggleModal6);
  //tu touche pas
  window.addEventListener("click", windowOnClick);





  //image du film dans le carrousel
  trigger[0].addEventListener("click", toggleModal0);
  trigger[1].addEventListener("click", toggleModal1);
  trigger[2].addEventListener("click", toggleModal2);
  trigger[3].addEventListener("click", toggleModal3);
  trigger[4].addEventListener("click", toggleModal4);
  trigger[5].addEventListener("click", toggleModal5);
  trigger[6].addEventListener("click", toggleModal6);

let api_page_1 = fetch(urlPage1)
  .then((response) => response.json())
  .then(async function (data) {
    results = data.results;
    for (let result of results) {
      listBest_Movies1.push(await fetch(result.url));
    }

    //fetch le premier film et afficher dans la modal 0
    //copie à partir d'ici
    let movie0 = fetch(listBest_Movies1[0].url)
    .then((response) => response.json())
    .then(async function (movie0) {
      console.log(movie0.title);
      var image = '<img src="' + movie0.image_url + '"/>';
      document.querySelector('#imageBest-0').innerHTML = image;
      document.getElementById('imageBestModal0').innerHTML = image;
      document.getElementById('titleMovie-0').innerText = movie0.title;
      var realisatorBest = '<span>Réalisateur: </span>' + movie0.directors;
      document.getElementById('realisateurBest0').innerHTML= realisatorBest;
      var ratedBest = '<span>Rated : </span>' + movie0.rated;
      document.getElementById('voteBest0').innerHTML = ratedBest;
      document.querySelector("#descriptionBest0").innerText = movie0.description;
      document.querySelector("#genderBest0").innerText = movie0.genres;
      var yearBest = '<span>Date de sortie : </span>' + movie0.date_published;
      document.getElementById('yearBest0').innerHTML = yearBest;
      var voteBest = '<span>Note moyenne : </span>' + movie0.avg_vote;
      document.getElementById('imbdBest0').innerHTML = voteBest;
      var dureeBest = '<span>Durée : </span>' + movie0.duration + ' minutes';
      document.getElementById('durationBest0').innerHTML = dureeBest;
      var actorsBest = '<span>Acteurs : </span>' + movie0.actors;
      document.getElementById('actorsBest0').innerHTML = actorsBest;
      document.getElementById('countryBest0').innerText = movie0.countries;
      document.getElementById('boxofficeBest0').innerText = 'resultat box office: ' + movie0.worldwide_gross_income+ '$';
    })
    .catch(function (error) {
      console.log(
        "Il y a eu un problème avec l'opération fetch: " + error.message
      );
    });
    //jusqu'a ici

    //fetch le deuxième film et afficher dans la modal 1
    let movie1 = fetch(listBest_Movies1[1].url)
    .then((response) => response.json())
    .then(async function (movie1) {
      console.log(movie1.title);
      var image = '<img src="' + movie1.image_url + '"/>';
      document.querySelector('#imageBest-1').innerHTML = image;
      document.getElementById('imageBestModal1').innerHTML = image;
      document.getElementById('titleMovie-1').innerText = movie1.title;
      var realisatorBest = '<span>Réalisateur: </span>' + movie1.directors;
      document.getElementById('realisateurBest1').innerHTML= realisatorBest;
      var ratedBest = '<span>Rated : </span>' + movie1.rated;
      document.getElementById('voteBest1').innerHTML = ratedBest;
      document.querySelector("#descriptionBest1").innerText = movie1.description;
      document.querySelector("#genderBest1").innerText = movie1.genres;
      var yearBest = '<span>Date de sortie : </span>' + movie1.date_published;
      document.getElementById('yearBest1').innerHTML = yearBest;
      var voteBest = '<span>Note moyenne : </span>' + movie1.avg_vote;
      document.getElementById('imbdBest1').innerHTML = voteBest;
      var dureeBest = '<span>Durée : </span>' + movie1.duration + ' minutes';
      document.getElementById('durationBest1').innerHTML = dureeBest;
      var actorsBest = '<span>Acteurs : </span>' + movie1.actors;
      document.getElementById('actorsBest1').innerHTML = actorsBest;
      document.getElementById('countryBest1').innerText = movie1.countries;
      document.getElementById('boxofficeBest1').innerText = 'resultat box office: ' + movie1.worldwide_gross_income+ '$';
    })
    .catch(function (error) {
      console.log(
        "Il y a eu un problème avec l'opération fetch: " + error.message
      );
    });

    let movie2 = fetch(listBest_Movies1[2].url)
    .then((response) => response.json())
    .then(async function (movie2) {
      console.log(movie2.title);
      var image = '<img src="' + movie2.image_url + '"/>';
      document.querySelector('#imageBest-2').innerHTML = image;
      document.getElementById('imageBestModal2').innerHTML = image;
      document.getElementById('titleMovie-2').innerText = movie2.title;
      var realisatorBest = '<span>Réalisateur: </span>' + movie2.directors;
      document.getElementById('realisateurBest2').innerHTML= realisatorBest;
      var ratedBest = '<span>Rated : </span>' + movie2.rated;
      document.getElementById('voteBest2').innerHTML = ratedBest;
      document.querySelector("#descriptionBest2").innerText = movie2.description;
      document.querySelector("#genderBest2").innerText = movie2.genres;
      var yearBest = '<span>Date de sortie : </span>' + movie2.date_published;
      document.getElementById('yearBest2').innerHTML = yearBest;
      var voteBest = '<span>Note moyenne : </span>' + movie2.avg_vote;
      document.getElementById('imbdBest2').innerHTML = voteBest;
      var dureeBest = '<span>Durée : </span>' + movie2.duration + ' minutes';
      document.getElementById('durationBest2').innerHTML = dureeBest;
      var actorsBest = '<span>Acteurs : </span>' + movie2.actors;
      document.getElementById('actorsBest2').innerHTML = actorsBest;
      document.getElementById('countryBest2').innerText = movie2.countries;
      document.getElementById('boxofficeBest2').innerText = 'resultat box office: ' + movie2.worldwide_gross_income+ '$';
    })
    .catch(function (error) {
      console.log(
        "Il y a eu un problème avec l'opération fetch: " + error.message
      );
    });

    let movie3 = fetch(listBest_Movies1[3].url)
    .then((response) => response.json())
    .then(async function (movie3) {
      console.log(movie3.title);
      var image = '<img src="' + movie3.image_url + '"/>';
      document.querySelector('#imageBest-3').innerHTML = image;
      document.getElementById('imageBestModal3').innerHTML = image;
      document.getElementById('titleMovie-3').innerText = movie3.title;
      var realisatorBest = '<span>Réalisateur: </span>' + movie3.directors;
      document.getElementById('realisateurBest3').innerHTML= realisatorBest;
      var ratedBest = '<span>Rated : </span>' + movie3.rated;
      document.getElementById('voteBest3').innerHTML = ratedBest;
      document.querySelector("#descriptionBest3").innerText = movie3.description;
      document.querySelector("#genderBest3").innerText = movie3.genres;
      var yearBest = '<span>Date de sortie : </span>' + movie3.date_published;
      document.getElementById('yearBest3').innerHTML = yearBest;
      var voteBest = '<span>Note moyenne : </span>' + movie3.avg_vote;
      document.getElementById('imbdBest3').innerHTML = voteBest;
      var dureeBest = '<span>Durée : </span>' + movie3.duration + ' minutes';
      document.getElementById('durationBest3').innerHTML = dureeBest;
      var actorsBest = '<span>Acteurs : </span>' + movie3.actors;
      document.getElementById('actorsBest3').innerHTML = actorsBest;
      document.getElementById('countryBest3').innerText = movie3.countries;
      document.getElementById('boxofficeBest3').innerText = 'resultat box office: ' + movie3.worldwide_gross_income+ '$';
    })
    .catch(function (error) {
      console.log(
        "Il y a eu un problème avec l'opération fetch: " + error.message
      );
    });

  });

  let api_page_2 = fetch(urlPage2)
  .then((response) => response.json())
  .then(async function (data) {
    results2 = data.results;
    for (let result of results2) {
      listBest_Movies2.push(await fetch(result.url));
    }

    //fetch le premier film et afficher dans la modal 0
    //copie à partir d'ici
    let movie4 = fetch(listBest_Movies2[0].url)
    .then((response) => response.json())
    .then(async function (movie4) {
      console.log(movie4.title);
      var image = '<img src="' + movie4.image_url + '"/>';
      document.querySelector('#imageBest-4').innerHTML = image;
      document.getElementById('imageBestModal4').innerHTML = image;
      document.getElementById('titleMovie-4').innerText = movie4.title;
      var realisatorBest = '<span>Réalisateur: </span>' + movie4.directors;
      document.getElementById('realisateurBest4').innerHTML= realisatorBest;
      var ratedBest = '<span>Rated : </span>' + movie4.rated;
      document.getElementById('voteBest4').innerHTML = ratedBest;
      document.querySelector("#descriptionBest4").innerText = movie4.description;
      document.querySelector("#genderBest4").innerText = movie4.genres;
      var yearBest = '<span>Date de sortie : </span>' + movie4.date_published;
      document.getElementById('yearBest4').innerHTML = yearBest;
      var voteBest = '<span>Note moyenne : </span>' + movie4.avg_vote;
      document.getElementById('imbdBest4').innerHTML = voteBest;
      var dureeBest = '<span>Durée : </span>' + movie4.duration + ' minutes';
      document.getElementById('durationBest4').innerHTML = dureeBest;
      var actorsBest = '<span>Acteurs : </span>' + movie4.actors;
      document.getElementById('actorsBest4').innerHTML = actorsBest;
      document.getElementById('countryBest4').innerText = movie4.countries;
      document.getElementById('boxofficeBest4').innerText = 'resultat box office: ' + movie4.worldwide_gross_income+ '$';
    })
    .catch(function (error) {
      console.log(
        "Il y a eu un problème avec l'opération fetch: " + error.message
      );
    });
    //jusqu'a ici

    //fetch le deuxième film et afficher dans la modal 1
    let movie5 = fetch(listBest_Movies2[1].url)
    .then((response) => response.json())
    .then(async function (movie5) {
      console.log(movie5.title);
      var image = '<img src="' + movie5.image_url + '"/>';
      document.querySelector('#imageBest-5').innerHTML = image;
      document.getElementById('imageBestModal5').innerHTML = image;
      document.getElementById('titleMovie-5').innerText = movie5.title;
      var realisatorBest = '<span>Réalisateur: </span>' + movie5.directors;
      var ratedBest = '<span>Rated : </span>' + movie5.rated;
      document.getElementById('voteBest5').innerHTML = ratedBest;
      document.getElementById('realisateurBest5').innerHTML= realisatorBest;
      document.querySelector("#descriptionBest5").innerText = movie5.description;
      document.querySelector("#genderBest5").innerText = movie5.genres;
      var yearBest = '<span>Date de sortie : </span>' + movie5.date_published;
      document.getElementById('yearBest5').innerHTML = yearBest;
      var voteBest = '<span>Note moyenne : </span>' + movie5.avg_vote;
      document.getElementById('imbdBest5').innerHTML = voteBest;
      var dureeBest = '<span>Durée : </span>' + movie5.duration + ' minutes';
      document.getElementById('durationBest5').innerHTML = dureeBest;
      var actorsBest = '<span>Acteurs : </span>' + movie5.actors;
      document.getElementById('actorsBest5').innerHTML = actorsBest;
      document.getElementById('countryBest5').innerText = movie5.countries;
      document.getElementById('boxofficeBest5').innerText = 'resultat box office: ' + movie5.worldwide_gross_income+ '$';
    })
    .catch(function (error) {
      console.log(
        "Il y a eu un problème avec l'opération fetch: " + error.message
      );
    });

    let movie6 = fetch(listBest_Movies2[2].url)
    .then((response) => response.json())
    .then(async function (movie6) {
      console.log(movie6.title);
      var image = '<img src="' + movie6.image_url + '"/>';
      document.querySelector('#imageBest-6').innerHTML = image;
      document.getElementById('imageBestModal6').innerHTML = image;
      document.getElementById('titleMovie-6').innerText = movie6.title;
      var realisatorBest = '<span>Réalisateur: </span>' + movie6.directors;
      document.getElementById('realisateurBest6').innerHTML= realisatorBest;
      var ratedBest = '<span>Rated : </span>' + movie6.rated;
      document.getElementById('voteBest6').innerHTML = ratedBest;
      document.querySelector("#descriptionBest6").innerText = movie6.description;
      document.querySelector("#genderBest6").innerText = movie6.genres;
      var yearBest = '<span>Date de sortie : </span>' + movie6.date_published;
      document.getElementById('yearBest6').innerHTML = yearBest;
      var voteBest = '<span>Note moyenne : </span>' + movie6.avg_vote;
      document.getElementById('imbdBest6').innerHTML = voteBest;
      var dureeBest = '<span>Durée : </span>' + movie6.duration + ' minutes';
      document.getElementById('durationBest6').innerHTML = dureeBest;
      var actorsBest = '<span>Acteurs : </span>' + movie6.actors;
      document.getElementById('actorsBest6').innerHTML = actorsBest;
      document.getElementById('countryBest6').innerText = movie6.countries;
      document.getElementById('boxofficeBest6').innerText = 'resultat box office: ' + movie6.worldwide_gross_income+ '$';
    })
    .catch(function (error) {
      console.log(
        "Il y a eu un problème avec l'opération fetch: " + error.message
      );
    });
  });
