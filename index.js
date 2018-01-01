function theBeatlesPlay(x, y) {
  var z = [];
  for (let i = 0; i < 4; i++) {
    z.push(`${x[i]} plays ${y[i]}`);
  }
  return z;
  }
  
  function johnLennonFacts(x) {
    var z = [];
    var i = 0;
    while (i < x.length) {
      z.push(`${x[i]}!!!`);
      i++;
    }
  return z;
  }
  
  function iLoveTheBeatles(number) {
    var x = [];
    var i = number;
    do {
      x.push("I love the Beatles!");
      i++;
    }
    while (i < 15);
    return x
  }