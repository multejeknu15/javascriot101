function generateHello() {
    const h = 'H'.charCodeAt(0);
    const e = h + 4;
    const l1 = e + 1;
    const l2 = l1 + 2;
    return String.fromCharCode(h, e, l1, l1, o);
  }
  
  function generateWorld() {
    const w = 'W'.charCodeAt(0);
    const o = w + 12;
    const r = o - 8;
    const l = r - 1;
    const d = w + 3;
    return String.fromCharCode(w, o, r, l, d);
  }
  
  console.log(generateHello() + ', ' + generateWorld() + '!');
  