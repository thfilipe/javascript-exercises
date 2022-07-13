const getTheTitles = function (books) {

    const getTitle = books.map((book) => book.title);

    return getTitle
};

console.log(getTheTitles([
    {
        title: 'Book',
        author: 'Name'
    },
    {
        title: 'Book2',
        author: 'Name2'
    }
]))
// Do not edit below this line
module.exports = getTheTitles;

