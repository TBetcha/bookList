/** @format */

//ES5

//book constructor- will create book object
function Book(title, author, isbn) {
	this.title = title;
	this.author = author;
	this.isbn = isbn;
}

//UI Contructor - add book to list etc
function UI() {}

UI.prototype.addBookToList = function (book) {
	console.log(book);
};

//Event listeners
document.getElementById('book-form').addEventListener('submit', function (e) {
	console.log('test');
	const title = document.getElementById('title').value,
		author = document.getElementById('author').value,
		isbn = document.getElementById('isbn').value;

	//instantiate book
	const book = new Book(title, author, isbn);

	//instantiate UI obj
	const ui = new UI();

	//add book to list
	ui.addBookToList(book);

	console.log(book);

	console.log(title, author, isbn);
	e.preventDefault();
});
