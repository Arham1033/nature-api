const menuBtn = document.querySelector(".menu-btn");
const sidebar = document.querySelector(".sidebar");

menuBtn.addEventListener("click",(e)=>{

e.stopPropagation();

sidebar.classList.toggle("active");

});

document.addEventListener("click",(e)=>{

if(
!sidebar.contains(e.target) &&
!menuBtn.contains(e.target)
){

sidebar.classList.remove("active");

}

});