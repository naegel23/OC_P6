const nb_movie = 7;
const url_best = "http://localhost:8000/api/v1/titles/?sort_by=-imdb_score";

async function getBestMovies(url, nbMoviesMax, shift){
    let listBestMovies = [];
    let nextUrl = url;
    try{
        let i = 0;
        while (i < nbMoviesMax) {
            let json = await fetch(nextUrl);
            let results = json['results'];
            nextUrl = json['next'];
            for (let result of results){
                if (i < nbMoviesMax){
                    listBestMovies.push(await fetch(result['url']));
                }
                i++;
            }
        }
    } catch (error) {
        console.log(error);
    }
    if(shift){
        listBestMovies.shift();
    }
    return listBestMovies;
}

// async function renderBestMovie(){
//     let bestMovieAwait = await getBestMovies(url_best, nb_movie + 1, true);
//     let bestMovieContainer = document.querySelector("#best_movies");
//     let balisesA = bestMovieContainer.querySelectorAll('.js-modal');
//     let balisesImg = bestMovieContainer.querySelectorAll('img');
//     for (let i = 0; i < nb_movie; i++){
//         let bestMovie = JSON.parse(bestMovieAwait[i]);
//         balisesA[i].setAttribute('href', bestMovie.url);
//         balisesImg[i].setAttribute('src', bestMovie.imag_url);
//         balisesImg[i].setAttribute('alt', bestMovie.title);
//         balisesA[i + nb_movie].setAttribute('href', bestMovie.url);
//         balisesImg[i + nb_movie].setAttribute('src', bestMovie.image_url);
//         balisesImg[i + nb_movie].setAttribute('alt', bestMovie.title);
//     }
// }

// renderBestMovie();