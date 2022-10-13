let myLibrary = [];

function Book(title, pages, read) {
    this.title = title;
    this.pages = pages;
    this.read = read;
}

displayBooks();

function displayBooks() {
    myLibrary.forEach((book) => {
        let bookNumber = 0;
        const para = document.createElement("p");
        const deleteBtn = document.createElement("button");
        const readBtn = document.createElement("button");
        const element = document.getElementById("bookList");

        const node = document.createTextNode(
            `${book.title}, ${book.pages} pages. Read: ${book.read}`
        );

        readBtn.innerHTML = "read";
        readBtn.className += "read";
        deleteBtn.innerHTML = "delete";
        deleteBtn.className += "delete";

        para.appendChild(node);
        element.appendChild(para);
        element.appendChild(deleteBtn);
        element.appendChild(readBtn);

        // Delete Book
        deleteBtn.onclick = () => {
            deleteBtn.remove();
            readBtn.remove();
            para.remove();
            myLibrary.pop(book.title);
        };

        // Mark book as read
        readBtn.onclick = () => {
            if (book.read === true) {
                book.read = false;
                para.innerHTML = `${book.title}, ${book.pages} pages. Read: ${book.read}`;
            } else {
                book.read = true;
                para.innerHTML = `${book.title}, ${book.pages} pages. Read: ${book.read}`;
            }
        };
    });
}

// Add Book
document.getElementById("submit").onclick = () => {
    let bookName = document.getElementById("bookName");
    let bookPages = document.getElementById("bookPages");
    let book = new Book(bookName.value, bookPages.value, false);

    myLibrary.push(book);
    document.getElementById("bookList").innerHTML = "";
    displayBooks();
};
