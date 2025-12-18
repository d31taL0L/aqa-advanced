import { Book } from './Book.js';

export class Ebook extends Book {
  constructor(title, author, year, fileFormat) {
    super(title, author, year);
    this._fileFormat = fileFormat;
  }

  get fileFormat() {
    return this._fileFormat;
  }

  set fileFormat(value) {
    if (typeof value !== 'string') {
      console.log('Please send only text');
      return;
    }
    if (value.length === 0) {
      console.log('Please write something in here');
    }

    this._fileFormat = value;
  }

  printInfo() {
    console.log(
      `Book: ${this.title}, Author: ${this.author}, Year: ${this.year}, File format: ${this.fileFormat}`,
    );
  }

  static fromBook(book, fileFormat) {
    let title = book.title;
    let author = book.author;
    let year = book.year;

    let bookWithFormat = new Ebook(title, author, year, fileFormat);

    return bookWithFormat;
  }
}

const paper = new Book('Title', 'Author', 2000);

const ebook = Ebook.fromBook(paper, 'PDF');
ebook.printInfo();
