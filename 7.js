function getChar(offset, base) {
    return String.fromCharCode(base + offset);
  }
  
  function printChars(...offsets) {
    const base = 'h'.charCodeAt(0) - 1;
    const chars = offsets.map(offset => getChar(offset, base));
    console.log(chars.join(''));
  }
  
  printChars(8, 4, 11, 11, 14, 22, 14, 17, 11, 3);
  