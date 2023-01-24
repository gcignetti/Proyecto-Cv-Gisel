const datos = 
fetch('https://randomuser.me/api/?results=1')
    .then(response => response.json())
    .then(data => {

      const author = data.results[0];
      console.log(author);
      displayUser(author);
  });

function displayUser(author) {
  const name  = document.getElementById('name');
  const name_2 = document.getElementById('name_2');
  const email  = document.getElementById('email');
  const email_2  = document.getElementById('email_2');
  const cell = document.getElementById('cell');
  const cell_2 = document.getElementById('cell_2');
  const photo = document.getElementById('photo');
  
  name.innerText = `${author.name.last} ${author.name.first}`;
  name_2.innerText = `${author.name.last} ${author.name.first}`;
  email.innerText = `${author.email}`;
  email_2.innerText = `${author.email}`;
  cell.innerText = `${author.cell}`;
  cell_2.innerText = `${author.cell}`;
  photo.setAttribute('src',`${author.picture.large}`);
  
}

const menu = document.querySelector(".menu");
const openMenuBtn = document.querySelector(".open-menu");
const closeMenuBtn = document.querySelector(".close-menu");

function toggleMenu() {
  menu.classList.toggle("menu_opened");
}

openMenuBtn.addEventListener("click", toggleMenu);
closeMenuBtn.addEventListener("click", toggleMenu);

const menuLinks = document.querySelectorAll('.menu a[href^="#"]');

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      const id = entry.target.getAttribute("id");
      const menuLink = document.querySelector(`.menu a[href="#${id}"]`);

      if (entry.isIntersecting) { 
        menuLink.classList.add("selected");
      } else {
        menuLink.classList.remove("selected");
      }
    });
  },
  {rootMargin: "-30% 0px -70% 0px"}
  );

menuLinks.forEach((menuLink) => {
  menuLink.addEventListener("click", function () {
    menu.classList.remove("menu_opened");
  });

  const hash = menuLink.getAttribute("href");
  const target = document.querySelector(hash);
  if (target) {
    observer.observe(target);
  }
});




