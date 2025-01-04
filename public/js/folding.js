document.addEventListener("DOMContentLoaded", function () {
    const toggles = document.querySelectorAll(".year-toggle");
    toggles.forEach(toggle => {
      toggle.addEventListener("click", function () {
        const year = toggle.getAttribute("data-year");
        const posts = document.getElementById(`posts-${year}`);
        if (posts.style.display === "none") {
          posts.style.display = "block";
        } else {
          posts.style.display = "none";
        }
      });
    });
  });
  