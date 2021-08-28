// Doubling of number
const numbers = [1, 2, 3, 4];

const newNumbers = numbers.filter((number) => number % 2 !== 0)
                        .map((number) => number * 2)
console.log("The doubled numbers are", newNumbers);

// movies with a short title
const shortTitles = movies.filter((movie) => movie.title.length <= 5);
console.log(shortTitles)

// array of movies titles with long movie titles
const longTitles = movies.filter((movie) => movie.title.length >= 5);
console.log(longTitles)

// number of movies made between 1980-1989 (including both the years)
const numberOfMovies = movies.filter((movie) => movie.year >= 1980 && movie.year <= 1989).length
console.log(numberOfMovies)

// extra key called tag. The tag is based on the rating: Good (>= 7), Average (>= 4 and < 7), Bad (< 4)
const tagMovies = movies.map((movie) => {
    if (movie.rating >= 7) {
        movie['tag'] = 'Good'
    }
    if (movie.rating >= 4 && movie.rating < 7) {
        movie['tag'] = 'Average'
    }
    if (movie.rating < 4) {
        movie['tag'] = 'Bad'
    } return movie
})
console.log(tagMovies)

// Using chaining, first filter the movies array to only contain the movies rated higher than 6. Now map the movies array to only the rating 
const chainMovies = movies.filter((movie) => movie.rating > 6)
                          .map((movie) => movie.rating).sort(function(a, b){return b - a})
console.log(chainMovies)

// Count the total number of movies containing any of following keywords: Surfer, Alien or Benjamin
const keywordsMovies = movies.filter((movie) => movie.title.includes('Surfer') || movie.title.includes('Alien') || movie.title.includes('Benjamin')).length
console.log(keywordsMovies)

// Create an array of movies where a word in the title is duplicated
const duplicatedTitles = movies.filter(movie => {
    const splitArray = movie.title.toLowerCase().split(" ");
    const duplicatedWords = splitArray.filter((item, index) => {
        return splitArray.indexOf(item) !== index
    })
    return duplicatedWords.length
})
console.log(duplicatedTitles)

// Calculate the average rating of all the movies using reduce. Optional
const averageRating = (movies.map((movie) => movie.rating).reduce((total, value) => total + value, 0)/movies.length).toFixed(2)
console.log(averageRating)

// Count the total number of Good, Average and Bad movies using reduce, return {goodMovies: 33, averageMovies: 45, goodMovies: 123}
const reduceTag = movies.reduce(
    function (sum, movie) {
      if (movie.tag === 'Good') 
            {sum.goodMovies += 1}
      if (movie.tag === 'Average') 
            {sum.averageMovies += 1}
      if (movie.tag === 'Bad') 
            {sum.badMovies += 1}
      return sum;
    }, { goodMovies: 0, averageMovies: 0, badMovies: 0});
    
console.log(reduceTag)