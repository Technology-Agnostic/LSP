const assert = require('node:assert');

const Book = require('./books/book');

describe('Book open', () => {
    const book = new Book('Test Author', 'Test title', 'test date', 'test description', 'test price', 'text');

    it('should open the book', () => {
        const EXPECTED_RESULT = 'Displays text content on the screen';
        const actualResult = book.open();
        assert.equal(actualResult, EXPECTED_RESULT);
    });
});
