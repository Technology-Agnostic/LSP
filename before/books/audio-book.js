const Book = require('./book');

class AudioBook extends Book {
    constructor(author, title, issueDate, description, price) {
        super(author, title, issueDate, description, price);

        this.type = 'audio';
    }

    open() {
        return 'Displays play and pause buttons on the screen';
    }

    play() {
        console.log('Book play started...');
    }

    pause() {
        console.log('Book play paused...');
    }
}

module.exports = AudioBook;
