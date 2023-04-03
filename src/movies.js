// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?

function getAllDirectors(moviesArray) {
    return moviesArray.map(movie => movie.director);
}


// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    return moviesArray.filter(movie => {
      return movie.director === 'Steven Spielberg' && movie.genre.includes('Drama');
    }).length;
  }
  

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    if(moviesArray.length === 0){
      return 0;
    }
  
    const sumScores = moviesArray.reduce((accumulator, currentMovie) => {
      //if statement checks if there is no score
      if (!currentMovie.score){
        return accumulator + 0;
      }
        return accumulator + currentMovie.score;
    }, 0)
    return Number((sumScores / moviesArray.length).toFixed(2));
  }

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    const dramas = moviesArray.filter((movie) => {
      return (movie.genre.includes('Drama'));
    });
    //LETS GO BACK HERE LATER FOR LEARNING PURPOSES (.reduce)
    return scoresAverage(dramas);
  }

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    let newArray = [...moviesArray];
    newArray.sort(function (a, b) {
      if (a.year === b.year){
        // return a.title - b.title;
        return a.title.localeCompare(b.title);
      }
      return a.year - b.year;
    });
    return newArray;
  }

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    let newArray = [...moviesArray];
    newArray.sort(function (a, b) {
      return a.title.localeCompare(b.title);
    });
    newArray = newArray.slice(0, 20);
    newArray = newArray.map((movie) => {
      return movie.title;
    })
    return newArray;
  }

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
  let newArray = [...moviesArray];
  return newArray.map((movie) => {
    let duration;
    if (!movie.duration.includes("h")) {
      console.log("movie has no hours");
      duration = Number(movie.duration.replace("min", ""));
      return { ...movie, duration: duration };
    } else if (!movie.duration.includes("min")) {
      console.log("movie has no minutes");
      duration = Number(movie.duration.replace("h", "")) * 60;
      return { ...movie, duration: duration };
    }
    duration = movie.duration.replace("h", "").replace("min", "").split(" ");
    let newDuration = Number(duration[0]) * 60 + Number(duration[1]);
    return { ...movie, duration: newDuration };
  });
}


// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {
}