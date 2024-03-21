const Book = require('../books/book');

class BookFactory {
    createBook({ author, title, issueDate, description, price, type }) {
        return new Book(author, title, issueDate, description, price, type);
    }
}

module.exports = BookFactory;
