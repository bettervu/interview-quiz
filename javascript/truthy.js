// write out what will be shown in the console
/* eslint-disable */

function easy() {
  if (true) {
    console.log(1);
  } else {
    console.log(2);
  }

  if (false) {
    console.log(3);
  } else {
    console.log(4);
  }

  if (1 == 1) {
    console.log(5);
  } else {
    console.log(6);
  }

  if (1 === 1) {
    console.log(7);
  } else {
    console.log(8);
  }
}

function strings() {
  if ("") {
    console.log(1);
  } else {
    console.log(2);
  }

  if (" ") {
    console.log(3);
  } else {
    console.log(4);
  }

  if ("false") {
    console.log(5);
  } else {
    console.log(6);
  }

  if ("true") {
    console.log(7);
  } else {
    console.log(8);
  }

  if ("0") {
    console.log(9);
  } else {
    console.log(10);
  }

  if ("1") {
    console.log(11);
  } else {
    console.log(12);
  }
}

function numbers() {
  if (0) {
    console.log(1);
  } else {
    console.log(2);
  }

  if (25) {
    console.log(3);
  } else {
    console.log(4);
  }

  if (-25) {
    console.log(5);
  } else {
    console.log(6);
  }
}

function extra() {
  if ({}) {
    console.log(1);
  } else {
    console.log(2);
  }

  if ([]) {
    console.log(3);
  } else {
    console.log(4);
  }

  if ([].length) {
    console.log(5);
  } else {
    console.log(6);
  }

  if (+"0") {
    console.log(7);
  } else {
    console.log(8);
  }

  if (-"1") {
    console.log(9);
  } else {
    console.log(10);
  }

  if ("test".indexOf("abc") > -1) {
    console.log(11);
  } else {
    console.log(12);
  }
}
