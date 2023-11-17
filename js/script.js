document.addEventListener("DOMContentLoaded", function () {
    const navbarToggler = document.getElementById("navbar-toggler");
    const navbarSupportedContent = document.getElementById("navbarSupportedContent");
  
    navbarToggler.addEventListener("click", function () {
      navbarSupportedContent.classList.toggle("collapse");
    });
  
    const searchForm = document.getElementById("searchForm");
    searchForm.addEventListener("submit", function (e) {
      e.preventDefault();
      
      const searchTerm = document.getElementById("searchInput").value;
      console.log("Realizar búsqueda con el término:", searchTerm);
    });
  });
  