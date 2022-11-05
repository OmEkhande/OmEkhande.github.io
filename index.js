const navbar = document.getElementById('navbar')

navbar.style.position = 'absolute';
navbar.style.top = '10px';
console.log(navbar.style.top); // 👉️ "150px"


function positionElement(el, x, y) {
    el.style.position = 'absolute';
    el.style.left = x + 'px';
    el.style.top = y + 'px';
  }
  
  const box = document.getElementById('box');
  console.log(positionElement(box, 50, 150));
  
  console.log(box.style.left); // 👉️ "50px"
  console.log(box.style.top); // 👉️ "150px"

