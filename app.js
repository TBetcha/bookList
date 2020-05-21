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

//add book to list
UI.prototype.addBookToList = function (book) {
	const list = document.getElementById('book-list');

	//create tr element
	const row = document.createElement('tr');
	//insert cols
	row.innerHTML = `
   <td>${book.title}</td>
   <td>${book.author}</td>
   <td>${book.isbn}</td>
   <td><a href="#" class="delete">X<a></td>`;

	list.appendChild(row);
};

//clear fields
UI.prototype.clearFields = function () {
	document.getElementById('title').value = '';
	document.getElementById('author').value = '';
	document.getElementById('isbn').value = '';
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

	//clear fields
	ui.clearFields();

	console.log(title, author, isbn);
	e.preventDefault();
});
