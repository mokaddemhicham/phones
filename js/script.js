AOS.init();
// Toggle Navbar

let toggleBtn = document.querySelector(".menu-hamburger"),
    navBar = document.querySelector(".main-nav");

toggleBtn.onclick = ()=>{
    navBar.classList.toggle("active");
}