document.addEventListener("DOMContentLoaded", function () {
  var root = document.getElementById("projects-root");
  var sections = window.PROJECT_SECTIONS;
  if (!root || !sections || !sections.length) return;

  sections.forEach(function (section) {
    var sec = document.createElement("section");
    sec.className = "projects-section";

    var h = document.createElement("h2");
    h.className = "projects-section-title";
    h.textContent = section.title;
    sec.appendChild(h);

    var grid = document.createElement("div");
    grid.className = "project-grid";

    (section.projects || []).forEach(function (p) {
      var card = document.createElement("article");
      card.className = "project-card";

      var title = document.createElement("h3");
      title.className = "project-card-title";
      title.textContent = p.title;
      card.appendChild(title);

      var sum = document.createElement("p");
      sum.className = "project-card-summary";
      sum.textContent = p.summary;
      card.appendChild(sum);

      if (p.links && p.links.length) {
        var links = document.createElement("p");
        links.className = "project-card-links";
        p.links.forEach(function (link, i) {
          if (i > 0) links.appendChild(document.createTextNode(" · "));
          var a = document.createElement("a");
          a.href = link.href;
          a.textContent = link.label;
          links.appendChild(a);
        });
        card.appendChild(links);
      }

      grid.appendChild(card);
    });

    sec.appendChild(grid);
    root.appendChild(sec);
  });
});
