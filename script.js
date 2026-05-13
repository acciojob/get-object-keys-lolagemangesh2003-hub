//your JS code here. If required.
const student = {
  name: "John",
};

function getKeys(obj) {
  let arr = [];
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      arr.push(key);
    }
  }
  return arr;
}