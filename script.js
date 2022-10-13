const bookShelf = document.querySelector('.bookshelf');
const addBookButton = document.querySelector('.add-book');
const overlay = document.querySelector('.bookshelf .overlay');
// Submit form
const error = document.querySelector('.error');
const title = document.querySelector('#title');
const author = document.querySelector('#author');
const pages = document.querySelector('#pages');
const submit = document.querySelector('#submit');

// Store books
let myLibrary = [];

function Book(title, author, pages, isRead = false) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;
}

function displayBook(arr) {
    // Var declaration
    let book = document.createElement('div');
    let coverTitle = document.createElement('div');
    let coverAuthor = document.createElement('div');
    let coverPages = document.createElement('div');
    let readButton = document.createElement('button');
    let removeButton = document.createElement('button');
    // Var textcontent
    coverTitle.textContent = myLibrary[myLibrary.length - 1]['title'];
    coverAuthor.textContent = myLibrary[myLibrary.length - 1]['author'];
    coverPages.textContent = myLibrary[myLibrary.length - 1]['pages'];
    readButton.textContent = 'Not read';
    removeButton.textContent = 'Remove';
    // Appendchild
    book.appendChild(coverTitle);
    book.appendChild(coverAuthor);
    book.appendChild(coverPages);
    book.appendChild(readButton);
    book.appendChild(removeButton);
    bookShelf.appendChild(book);
    // Other
    book.classList.add('book');
    readButton.addEventListener('click', () => toggleRead(readButton, coverTitle));
    removeButton.addEventListener('click', () => removeBook(removeButton, coverTitle));
}

function toggleRead(readButton, coverTitle) {
    this.readButton = readButton;
    let foundBook = myLibrary.find(e => e.title === coverTitle.textContent);
    isRead(readButton, foundBook);
}

function isRead(readButton, foundBook) {
    if (readButton.classList.value === '') {
        readButton.classList.add('active');
        foundBook.isRead = true;
        readButton.textContent = 'Read';
    } else {
        readButton.classList.remove('active');
        foundBook.isRead = false;
        readButton.textContent = 'Not read';
    }
}

function removeBook(removeButton, coverTitle) {
    this.removeButton = removeButton;
    this.book = removeButton.parentElement;
    this.bookParent = book.parentElement;
    let foundBook = myLibrary.find(e => e.title === coverTitle.textContent);
    myLibrary.splice(myLibrary.indexOf(foundBook), 1);
    this.bookParent.removeChild(book);
}

function addBookToLibrary(title, author, pages) {
    myLibrary.push(new Book(title, author, pages));
}

// Event listeners
addBookButton.addEventListener('click', function () {
    bookShelf.classList.add('active');
})

submit.addEventListener('click', function () {
    if (myLibrary.find(e => e.title === title.value)) {
        error.setAttribute('style', 'visibility: visible')
    }
    else {
        addBookToLibrary(title.value, author.value, pages.value);
        bookShelf.classList.remove('active');
        title.value = '', author.value = '', pages.value = '';
        displayBook(myLibrary);
    }
})

overlay.addEventListener('click', function() {
    bookShelf.classList.remove('active');
    error.setAttribute('style', 'visibility: hidden');
    title.value = '', author.value = '', pages.value = '';
})





