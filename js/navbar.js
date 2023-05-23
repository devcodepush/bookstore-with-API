const navbarElement = [
  {
    id: "homeLink",
    name: "Home",
    href: ""
  },
  {
    id: "storeLink",
    name: "Store",
    href: ""
  },
  {
    id: "contactLink",
    name: "Contact",
    href: ""
  },
  {
    id: "loginLink",
    name: "Login",
    href: "login/login.html"
  }
]  

const navbarContainer = document.createElement('div');
navbarContainer.classList.add('navbar-container');
document.body.appendChild(navbarContainer);



for (let i = 0; i < navbarElement.length; i++) {
  const selectedNavbarElement = navbarElement[i];

  const navElement = document.createElement("a");
  navElement.classList.add("navbar-anchor");
  navElement.innerText= selectedNavbarElement.name;
  navElement.href = selectedNavbarElement.href;
  navbarContainer.appendChild(navElement);


} 





