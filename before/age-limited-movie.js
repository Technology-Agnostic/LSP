const Movie = require('./movie');

class AgeLimitedMovie extends Movie {
    validateOwnerAge(ownerAge) {
        if (ownerAge < 18) {
            throw new Error('age limit validation failed');
        }
    }

    play(ownerAge = 0) {
        this.validateOwnerAge(ownerAge);
        return super.play();
    }
}

module.exports = AgeLimitedMovie;
