import { Book } from "./Book.js";
import { Ebook } from "./EBook.js";

const book1 = new Book('The Hobbit', 'J.R.R. Tolkien', 1937);
const book2 = new Book('1984', 'George Orwell', 1949);
const book3 = new Book('Clean Code', 'Robert Martin', 2008);

book1.printInfo();
book2.printInfo();
book3.printInfo();

console.log('\n');
const ebook1 = new Ebook('Dune', 'Frank Herbert', 1965, 'PDF');
const ebook2 = new Ebook('The Pragmatic Programmer', 'Andrew Hunt', 1999, 'EPUB');

ebook1.printInfo();
ebook2.printInfo();

console.log('\n');
const paperBook = new Book('Harry Potter', 'J.K. Rowling', 1997);
const ebookFromPaper = Ebook.fromBook(paperBook, 'MOBI');

ebookFromPaper.printInfo();

console.log('\n');
const allBooks = [book1, book2, book3, ebook1, ebook2, paperBook, ebookFromPaper];

const oldest = Book.findOldestBook(allBooks);
oldest.printInfo();
