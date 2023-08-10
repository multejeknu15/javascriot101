const characters = [
    String.fromCharCode((8 << 3) + 8), 
    String.fromCharCode((8 << 2) + 17), 
    String.fromCharCode((8 << 2) + 10), 
    String.fromCharCode((8 << 2) + 10), 
    String.fromCharCode((8 << 2) + 11), 
    String.fromCharCode((6 << 3) + 17), 
    String.fromCharCode((6 << 3) + 11), 
    String.fromCharCode((6 << 3) + 13), 
    String.fromCharCode((8 << 2) + 10), 
    String.fromCharCode((7 << 2) + 5)
  ];
  
  const helloWorld = characters.join('');
  console.log(helloWorld);