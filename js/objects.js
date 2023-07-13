const book = {
  bookName: "Book-Name",
  authorName: "Author-Name",
  publishingYear: "Publishing-Year",
  bookSummary: "Book-Summary",
};

function bookDescription(book) {
  return `The book ${book.bookName} was written by ${book.authorName} in the year ${book.publishingYear}`;
}

console.log(bookDescription(book));
