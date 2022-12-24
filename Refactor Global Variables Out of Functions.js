// The global variable
var bookList = ["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"];

// Change code below this line
function add (originalBooklist, bookName) {
  let newBooklist = [...originalBooklist];
  newBooklist.push(bookName);
  
  return newBooklist;
  
  // Change code above this line
}

// Change code below this line
function remove (originalBooklist, bookName) {
  let newBookList = [...originalBooklist];
  var book_index = originalBooklist.indexOf(bookName);
  if (book_index >= 0) {
    
    
    newBookList.splice(book_index, 1);
    return newBookList;

    // Change code above this line
    }
}