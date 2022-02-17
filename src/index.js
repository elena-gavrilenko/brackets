module.exports = function check(str, bracketsConfig) {
  let openB = ["(", "[", "{", "|", "1", "3", "5", "7", "8"];
  let peirB = {
    [")"]: "(",
    ["]"]: "[",
    ["}"]: "{",
    ["|"]: "|",
    ["2"]: "1",
    ["4"]: "3",
    ["6"]: "5",
    ["7"]: "7",
    ["8"]: "8",
  };
  console.log(str);
  let stack = [];
  for (let elem of str) {
    let carr = elem;
    if (stack.length == 0 && openB.includes(carr)) {
      stack.push(carr);
    } else {
      if (stack.length == 0 && !openB.includes(carr)) {
        return false;
      }
      let top = stack[stack.length - 1];
      if (peirB[carr] == top) {
        stack.pop();
      } else {
        stack.push(elem);
      }
    }
  }
  console.log(stack.length == 0);
  return stack.length == 0;
};
