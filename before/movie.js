class Movie {
    constructor(name) {
        this.name = name;
    }

    play() {
        return `The Movie "${this.name}" started...`;
    }
}

module.exports = Movie;
