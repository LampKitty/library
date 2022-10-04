const bookShelf = document.querySelector('.bookshelf');
const bookButton = document.querySelector('.add-book');
const styleProperties = 'background-image: url(\'img/bookshelf.png\'); \
background-size: 250px; \
box-shadow: 0px 0px 25px 3px; \
flex: initial;\
margin: 120px;\
height: 250px; \
width: 250px;';

let mylibrary = [];

function Book(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
}

function loopBook(arr) {
    for(book in arr) {
        const content = document.createElement('div');
        content.setAttribute('style', styleProperties);
        bookShelf.appendChild(content);
        
        console.log('book')
    }
}

function addBookToLibrary(title, author, pages) {
        mylibrary.push(new Book(title, author, pages))
}

addBookToLibrary('Hobbit', 'Tolkien', '256');
addBookToLibrary('Hobbit', 'Tolkien', '256');
addBookToLibrary('Hobbit', 'Tolkien', '256');
addBookToLibrary('Hobbit', 'Tolkien', '256');


loopBook(mylibrary);
console.log(mylibrary);

bookButton.addEventListener('click', function(){
    bookShelf.classList.add('active');
})



