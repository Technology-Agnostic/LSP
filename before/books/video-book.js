const AudioBook = require('./audio-book');

class VideoBook extends AudioBook {
    constructor(author, title, issueDate, description, price) {
        super(author, title, issueDate, description, price);

        this.type = 'video';
    }

    open() {
        return 'Displays play and pause buttons with picture background on the screen';
    }

    screenshot() {
        console.log('Screenshot copied to clipboard!');
    }
}

module.exports = VideoBook;
