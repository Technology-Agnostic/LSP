const VideoBook = require('../books/video-book');

class VideoBookFactory {
    createBook({ author, title, issueDate, description, price, type }) {
        return new VideoBook(author, title, issueDate, description, price, type);
    }
}

module.exports = VideoBookFactory;