// refactor each function without using a for-loop

const items = [
  { resource: 'javascript', param: 'quiz.js' },
  { resource: 'swift', param: 'ios.swift' },
  { resource: 'video', param: 'training.mov' }
];
function myMapper() {
  const urls = [];
  for (let i = 0; i < items.length; i++) {
    urls.push(`https://localhost/${items[i].resource}/${items[i].param}`);
  }
  console.log(urls);
}

items = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];
function myReducer() {
  let val = 0;
  for (let i = 0; i < items.length; i++) {
    val += items[i];
  }
  console.log(val);
}

items = [1, 2, 3, 4, 5, 6, 7, 8];
function myFilter() {
  const vals = [];
  for (let i = 0; i < items.length; i++) {
    if (items[i] % 2 === 0) {
      vals.push(items[i]);
    }
  }
  console.log(vals);
}

myMapper();
myReducer();
myFilter();
