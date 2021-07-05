const modalBest = document.querySelector(".modalBest");
var triggers = document.getElementsByClassName("triggers");
const closeButtonBest = document.querySelector(".close-button");




//Ouvrir modal best film
function toggleModalBest() {
  modalBest.classList.toggle("show-modal");
}

function windowOnClick(event) {
  if (event.target === modalBest) {
    toggleModalBest();
  }
}


closeButtonBest.addEventListener("click", toggleModalBest);
window.addEventListener("click", windowOnClick);

for (let i = 0; i < triggers.length; i++) {
  triggers[i].addEventListener("click", toggleModalBest);
}


const date = new Date();
let best_movie = fetch(
  "http://localhost:8000/api/v1/titles/1508669"
)
  .then((response) => response.json())
  .then(function (data) {
    var image;
    document.querySelector("#titleMovieBest").innerText = data.title;
    document.querySelector("#titleMovieBestModal").innerText = data.title;
    document.querySelector("#descriptionBest").innerText = data.description;
    document.querySelector("#genderBest").innerText = data.genres;
    var yearBest = '<span>Date de sortie : </span>' + data.date_published
    document.getElementById('yearBest').innerHTML = yearBest;
    var voteBest = '<span>Note moyenne : </span>' + data.avg_vote;
    document.getElementById('imbdBest').innerHTML = voteBest;
    var realisatorBest = '<span>Réalisateur: </span>' + data.directors;
    document.getElementById('realisateurBest').innerHTML= realisatorBest;
    var dureeBest = '<span>Durée : </span>' + data.duration + ' minutes';
    document.getElementById('durationBest').innerHTML = dureeBest;
    image = '<img src="' + data.image_url + '"/>';
    var actorsBest = '<span>Acteurs : </span>' + data.actors;
    document.getElementById('actorsBest').innerHTML = actorsBest;
    document.getElementById('imageBest').innerHTML = image;
    var ratedBest = '<span>Rated : </span>' + data.rated;
    document.getElementById('voteBest').innerHTML = ratedBest;
    document.getElementById('imageBestModal').innerHTML = image;
    document.getElementById('boxofficeBest').innerText = 'resultat box office: ' + data.worldwide_gross_income+ '$';
  }) 
  .catch(function (error) {
    console.log(
      "Il y a eu un problème avec l'opération fetch: " + error.message
    );
  });

