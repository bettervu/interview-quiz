// refactor each functions without using a for-loop

var items = [{ resource: 'javascript', param: 'quiz.js' }, { resource: 'swift', param: 'ios.swift' }, { resource: 'video', param: 'training.mov' }];
function myMapper() {
  var urls = [];
  for (let i = 0; i < items.length; i++) {
    urls.push(`https://localhost/${items[i].resource}/${items[i].param}`);
  }
  console.log(urls);
}

items = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];
function myReducer() {
  var val = 0;
  for (let i = 0; i < items.length; i++) {
    val += items[i];
  }
  console.log(val);
}

items = [1, 2, 3, 4, 5, 6, 7, 8];
function myFilter() {
  vals = [];
  for (let i = 0; i < items.length; i++) {
    if (items[i] % 2 === 0) {
      vals.push(items[i]);
    }
  }
  console.log(vals);
}
