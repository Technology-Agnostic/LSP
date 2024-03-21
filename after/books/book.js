class Book {
    constructor(author, title, issueDate, description, price, type) {
        this.author = author;
        this.title = title;
        this.issueDate = issueDate;
        this.description = description;
        this.price = price;
        this.type = type;
    }

    get id() {
        return `${this.author} - ${this.title} - ${this.price}`;
    }

    open() {
        return 'Displays text content on the screen';
    }
}

module.exports = Book;
