const AudioBook = require('../books/audio-book');

class AudioBookFactory {
    createBook({ author, title, issueDate, description, price, type }) {
        return new AudioBook(author, title, issueDate, description, price, type);
    }
}

module.exports = AudioBookFactory;