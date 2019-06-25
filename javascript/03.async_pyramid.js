// 1. determine what should be written on the console after this executes

let fs = require('fs');

console.log('1');

fs.readFile('./04.async_pyramid.js', 'utf8', function(error, data) {
  if (error) {
    throw error;
  }
  console.log('2');
});

console.log('3');

// 2. determine what should be written on the console after this executes

function job1(callback) {
  setTimeout(() => {
    callback('1');
  }, 2000);
}

function job2(callback) {
  setTimeout(() => {
    callback('2');
  }, 1000);
}

function job3(callback) {
  setTimeout(() => {
    callback('3');
  }, 3000);
}

function job4(callback) {
  setTimeout(() => {
    callback('4');
  }, 1000);
}

job1(data => {
  console.log(data);
});

job2(data => {
  console.log(data);
  job3(data => {
    console.log(data);
    job4(data => {
      console.log(data);
    });
  });
});
