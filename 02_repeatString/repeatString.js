const repeatString = function(str, num) {
    let newStr = ''
      for (let i = 0; i < num; i++) {
        newStr += str
      }
    return newStr
  };

repeatString('cat', 3)

// Do not edit below this line
module.exports = repeatString;
