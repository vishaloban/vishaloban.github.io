var body  = document.getElementsByTagName('body')[0];
var intro = document.getElementById('intro');



var a = function() {
  return new Promise(function(resolve, reject) {
    intro.setAttribute('data-text', 'Resume');
    resolve();
  });
}

var b = function() {
  return new Promise(function(resolve, reject) {
    body.classList.add('is-first');
    resolve();
  });
}

var c = function() {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      body.classList.add('is-second');
      resolve();
    }, 500);
  });
}

var d = function() {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      body.classList.add('is-third');
      resolve();
    }, 1000);
  });
}

var done = function() {
  return new Promise(function(resolve, reject) {
  });
}

var start = function() {
  a()
  .then(b)
  .then(c)
  .then(d)
  .then(done);
}

var init = function() {
  window.onload = function () {
    start();
  }
}
init();
