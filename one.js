function createAlphabetArray() {
    const startCharCode = 'H'.charCodeAt(0);
    const endCharCode = 'd'.charCodeAt(0);
    const alphabetArray = [];
    
    for (let charCode = startCharCode; charCode <= endCharCode; charCode++) {
      alphabetArray.push(String.fromCharCode(charCode));
    }
    
    return alphabetArray;
  }
  
  function createHelloWorldString() {
    const alphabet = createAlphabetArray();
    const helloWorldChars = [7, 4, 11, 11, 14, 22, 14, 17, 11, 3];
    let helloWorld = "";
    
    for (const index of helloWorldChars) {
      helloWorld += alphabet[index];
    }
    
    return helloWorld;
  }
  
  const helloWorld = createHelloWorldString();
  console.log(helloWorld);
  