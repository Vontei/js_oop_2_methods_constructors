function BookReader(book) {
  this.book = book;
  this.currentPage = 0
  }


BookReader.prototype.nextPage = function() {
  while(this.currentPage < this.book.length -1){
    var page = this.currentPage += 1
    return this.book[page]
  }
  while(this.currentPage == this.book.length-1){
    return this.book[this.currentPage]
  }

};

BookReader.prototype.previousPage = function() {
  while(this.currentPage > 0){
    var page = this.currentPage -= 1
    return this.book[page]
  }
  while(this.currentPage == 0){
    return this.book[this.currentPage]
  }

};

BookReader.prototype.pagesLeft = function() {
  return (this.book.length -1) - this.currentPage
};

BookReader.prototype.encouragement = function() {
  if(this.currentPage == this.book.length-2){
    return "Keep going, this book is good 'til the last drop!"
  } else {
    return 'Keep going, only ' + ((this.book.length -1) - this.currentPage) + " pages left after this one!"
  }
};

// DO NOT MODIFY BELOW THIS COMMENT:
module.exports = BookReader;
