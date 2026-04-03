document.addEventListener("DOMContentLoaded", function () {
  var page = document.body.getAttribute("data-page");
  if (!page) return;
  document.querySelectorAll("[data-nav]").forEach(function (el) {
    if (el.getAttribute("data-nav") === page) {
      el.classList.add("nav-active");
    }
  });
});
