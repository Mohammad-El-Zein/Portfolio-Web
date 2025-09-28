document.addEventListener("DOMContentLoaded", function () {
        fetch("navbar.html")
          .then((r) => r.text())
          .then((html) => {
            document.getElementsByClassName("header")[0].innerHTML = html;

            setActiveNavItem();
            setupMenuToggle();
          });
});

 function setActiveNavItem() {
        
        const currentPage =
          window.location.pathname.split("/").pop() || "index.html";

      
        const navLinks = document.querySelectorAll("nav a"); 

        navLinks.forEach((link) => {
          
          link.classList.remove("active");

          if (link.getAttribute("href") === "./" + currentPage) {
            link.classList.add("active");
          }
        });
      }

  function setupMenuToggle() {
  console.log('setupMenuToggle wird ausgeführt');
  
  const menuIcon = document.querySelector('#menu-icon');
  const icon = menuIcon ? menuIcon.querySelector('i') : null;
  const navbar = document.querySelector('.navbar');

  console.log('menuIcon gefunden:', menuIcon);
  console.log('icon gefunden:', icon);
  console.log('navbar gefunden:', navbar);

  if (!menuIcon || !icon || !navbar) {
    console.error('Ein Element wurde nicht gefunden!');
    return;
  }

  menuIcon.addEventListener('click', () => {
    console.log('Click detected!');
    console.log('Vor Toggle - Icon classes:', icon.classList.toString());
    
    navbar.classList.toggle('active');
    icon.classList.toggle('fa-bars');
    icon.classList.toggle('fa-times');
    
    console.log('Nach Toggle - Icon classes:', icon.classList.toString());
    console.log('Navbar classes:', navbar.classList.toString());
  });
}

