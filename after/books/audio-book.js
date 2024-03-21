class AudioBook {
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
