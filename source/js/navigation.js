const nav = document.querySelector('.page-nav');
const navButton = document.querySelector('.page-nav__menu-button');
const logo = document.querySelector('.logo');
const navTrigger = document.querySelector('.page-nav__triger');


navButton.onclick = function () {

  navButton.classList.toggle('page-nav__menu-button--close');
  navButton.classList.toggle('page-nav__menu-button--open');

  nav.classList.toggle('page-nav--transparent');
  nav.classList.toggle('page-nav--white');

  logo.classList.toggle('logo--colorful');
  logo.classList.toggle('logo--white');
};

window.addEventListener("scroll", function(){
  nav.classList.remove("page-nav--transparent");
  nav.classList.add("page-nav--scroll");
  logo.classList.remove("logo--white");
  logo.classList.add("logo--colorful");
  navButton.classList.remove("page-nav__menu-button--close");
  navButton.classList.add("page-nav__menu-button--open-grey");


   if( scrollY === 0 && nav.classList.contains("page-nav--scroll")) {
     nav.classList.remove("page-nav--scroll");
     nav.classList.add("page-nav--transparent");
     logo.classList.remove("logo--colorful");
     logo.classList.add("logo--white");
     navButton.classList.remove("page-nav__menu-button--open-grey");
     navButton.classList.add("page-nav__menu-button--close");
  }
});
