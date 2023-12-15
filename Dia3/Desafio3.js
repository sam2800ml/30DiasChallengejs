function printTriangle(size, character) {
    let triangle = "";
    for (let i = size; i > 0; i--) {
      for (let j = 1; j <= size; j++) {
        triangle += j < i ? ' ' : character;
      }
      if(i > 1){
        triangle += `\n`;
      }
    }
    return triangle;
  }

printTriangle(5, "*")