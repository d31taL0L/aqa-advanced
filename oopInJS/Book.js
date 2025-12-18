export class Book {
  constructor(title, author, year) {
    this._title = title;
    this._author = author;
    this._year = year;
  }

  get title() {
    return this._title;
  }

  set title(value) {
    if (typeof value !== 'string') {
      console.log('Please send only text');
      return;
    }
    if (value.length === 0) {
      console.log('Please write something in here');
      return;
    }

    this._title = value;
  }

  get author() {
    return this._author;
  }

  set author(value) {
    if (typeof value !== 'string') {
      console.log('Please send only text');
      return;
    }
    if (value.length === 0) {
      console.log('Please write something in here');
      return;
    }

    this._author = value;
  }

  get year() {
    return this._year;
  }

  set year(value) {
    if (typeof value !== 'number') {
      console.log('Please send only numbers');
      return;
    }
    if (value < 0) {
      console.log('Please write valid number(not less 0)');
      return;
    }

    this._year = value;
  }

  printInfo() {
    console.log(`Book: ${this.title}, Author: ${this.author}, Year: ${this.year}`);
  }

  static findOldestBook(listOfBooks) {
    if (listOfBooks.length === 0) {
      return null;
    }

    const oldest = listOfBooks.reduce((oldestBook, currentBook) => {
      return currentBook.year < oldestBook.year ? currentBook : oldestBook;
    });

    return oldest;
  }
}
