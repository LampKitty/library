const form = document.querySelector('#submit');
const bookShelf = document.querySelector('.bookshelf');
const bookButton = document.querySelector('.add-book');
const title = document.querySelector('#title');
const author = document.querySelector('#author');
const pages = document.querySelector('#pages');

// store books
let mylibrary = [];

function Book(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
}

function displayBook(arr) {
    const book = document.createElement('div');
    const remove = document.createElement('div');
    const coverTitle = document.createElement('div');
    const coverAuthor = document.createElement('div');
    const coverPages = document.createElement('div');
    coverTitle.textContent = mylibrary[mylibrary.length-1]['title'];
    coverAuthor.textContent = mylibrary[mylibrary.length-1]['author'];
    coverPages.textContent = mylibrary[mylibrary.length-1]['pages'];
    book.appendChild(coverTitle);
    book.appendChild(coverAuthor);
    book.appendChild(coverPages);
    book.appendChild(document.createElement('div'));
    bookShelf.appendChild(book);
    book.classList.add('book')
}

function addBookToLibrary(title, author, pages) {
    mylibrary.push(new Book(title, author, pages));
}

bookButton.addEventListener('click', function () {
    bookShelf.classList.add('active');
})

submit.addEventListener('click', function () {
    addBookToLibrary(title.value, author.value, pages.value);
    bookShelf.classList.remove('active');
    console.log(mylibrary);
    title.value = '', author.value = '', pages.value = '';
    displayBook(mylibrary);
})





