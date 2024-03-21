class VideoBook {
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

    play() {
        console.log('Book play started...');
    }

    pause() {
        console.log('Book play paused...');
    }

    open() {
        return 'Displays play and pause buttons with picture background on the screen';
    }

    screenshot() {
        console.log('Screenshot copied to clipboard!');
    }
}

module.exports = VideoBook;
