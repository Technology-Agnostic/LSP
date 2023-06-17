const Movie = require('./movie');

class AgeLimitedMovie extends Movie {
    validateOwnerAge(ownerAge) {
        if (ownerAge < 18) {
            throw new Error('age limit validation failed');
        }
    }

    playWithAgeLimit(ownerAge = 0) {
        this.validateOwnerAge(ownerAge);
        return super.play();
    }
}

module.exports = AgeLimitedMovie;
