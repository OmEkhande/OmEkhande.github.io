const navbar = document.getElementById('navbar')

navbar.style.position = 'absolute';
navbar.style.top = '10px';
console.log(navbar.style.top); // 👉️ "150px"


function positionElement(el, x, y) {
  el.style.position = 'absolute';
  el.style.left = x + 'px';
  el.style.top = y + 'px';
}

const box = document.getElementById('navbar');
console.log(positionElement(box, 50, 150));

console.log(box.style.left);
console.log(box.style.top);

const game = document.getElementById('game')
game.style.resize = 1000;

google.accounts.id.initialize(IdConfiguration)
window.onload = function () {
  google.accounts.id.initialize({
    client_id: '350792185982-e6pkppmkod64j2ufnf8muo9afbe29tlo.apps.googleusercontent.com',
    callback: handleCredentialResponse
  });
  google.accounts.id.prompt('hello');
};

