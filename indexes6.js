console.log('this is javascript using the es6 classes');

// Main class book
class Book {
    constructor(name, author, type) {
        this.name = name;
        this.author = author;
        this.type = type;
    }
}

// Display class
class Display {
    // adds the book 
    add(book) {
        console.log('added to ui');
        let tableBody = document.getElementById('tableBody');
        let uiString = `<tr>
                            <td>${book.name}</td>
                            <td>${book.author}</td>
                            <td>${book.type}</td>
                        </tr>`;
        tableBody.innerHTML += uiString;
    }
    // clears the form
    clear() {
        let libraryForm = document.getElementById('libraryForm');
        libraryForm.reset();
    }
    // check whether the book is valid or not
    validate(book) {
        if (book.name.length <= 2 || book.author <= 2) {
            return false;
        }
        else {
            return true;
        }
    }
    // show whether the book has been added or discarded
    show(type, message) {
        let msg = document.getElementById('message');
        msg.innerHTML = `<div id="message">
                            <div class="alert alert-${type} alert-dismissible fade show" role="alert">
                                <strong>${message}</strong>
                                <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                            </div>
                        </div>`;
        setTimeout(function () {
            msg.innerHTML = '';
        }, 2200);
    }
}

// Add Book event listener
let libraryForm = document.getElementById('libraryForm');
libraryForm.addEventListener('submit', libraryFormSubmit);

function libraryFormSubmit(e) {
    // console.log('you have submitted');
    let name = document.getElementById('bookName').value;
    let author = document.getElementById('author').value;
    let fiction = document.getElementById('fiction');
    let programming = document.getElementById('programming');
    let cooking = document.getElementById('cooking');
    let type;
    if (fiction.checked) {
        type = fiction.value;
    }
    else if (programming.checked) {
        type = programming.value;
    }
    else if (cooking.checked) {
        type = cooking.value;
    }
    let book1 = new Book(name, author, type);
    // console.log(book1);
    let display = new Display();
    if (display.validate(book1)) {
        display.add(book1);
        display.clear();
        display.show('success', "Hurray! Your book has been successfully added");
    }
    else {
        // show error to the user.
        display.show('danger', "Sorry! We can't add this book");
    }
    e.preventDefault();
}