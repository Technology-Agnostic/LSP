const assert = require('node:assert');
// const Movie = require('./before/movie');
// const AgeLimitedMovie = require('./before/age-limited-movie');
const AgeLimitedMovie = require('./after/age-limited-movie');

const movieName = 'The Matrix';
// const theMatrix = new Movie(movieName);
const theMatrix = new AgeLimitedMovie(movieName);

const expectedResult = 'The Movie "The Matrix" started...';
const actualResult = theMatrix.play();

console.log(`Assertion ${actualResult} - ${expectedResult}`);
assert.equal(actualResult, expectedResult);

// console.log(theMatrix.playWithAgeLimit(10));
