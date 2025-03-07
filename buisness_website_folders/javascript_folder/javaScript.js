themeToggle.addEventListener("click",function(){
  document.body.classList.toggle("light-mode");
  document.body.classList.toggle("dark-mode");

  const discount = document.querySelector(".discount");
  if (discount) discount.classList.toggle("dark-mode");
  
    const customersReview = document.querySelector(".customers_Review");
  if (customersReview) customersReview.classList.toggle("dark-mode");

  const footer = document.querySelector(".footer");
  if (footer) footer.classList.toggle("dark-mode");

  const navBar = document.querySelector("#nav-bar");
  if (navBar) navBar.classList.toggle("dark-mode");

  const sec3 = document.querySelector("#section3");
  if (sec3) sec3.classList.toggle("dark-mode");


  document.querySelectorAll("background-image").forEach((backgroundimage) => backgroundimage.classList.toggle("dark-mode"));
  document.querySelectorAll("img").forEach((img) => img.classList.toggle("dark-mode"));
  document.querySelectorAll(".drop-down").forEach((dropdown) => dropdown.classList.toggle("dark-mode"));
  document.querySelectorAll("p").forEach((p) => p.classList.toggle("dark-mode"));
  document.querySelectorAll("h2").forEach((h2) => h2.classList.toggle("light-mode"));
  document.querySelectorAll("h3").forEach((h3) => h3.classList.toggle("dark-mode"));

  themeToggle.textContent = document.body.classList.contains("dark-mode")
   ? "☀️"
   : "☾";

});






