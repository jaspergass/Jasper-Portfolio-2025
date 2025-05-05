
//Cursor
document.addEventListener("DOMContentLoaded", function(event) {
  var cursor = document.querySelector(".cursor");
  var links = document.querySelectorAll("a");
  var initCursor = false;

  for (var i = 0; i < links.length; i++) {
    var selfLink = links[i];

    selfLink.addEventListener("mouseover", function() {
      cursor.classList.add("custom-cursor--link");
    });
    selfLink.addEventListener("mouseout", function() {
      cursor.classList.remove("custom-cursor--link");
    });
  }

  window.onmousemove = function(e) {
    var mouseX = e.clientX;
    var mouseY = e.clientY;

    if (!initCursor) {
      // cursor.style.opacity = 1;
      gsap.to(cursor, 0.3, {
        opacity: 1
      });
      initCursor = true;
    }

    gsap.to(cursor, 0, {
      top: mouseY + "px",
      left: mouseX + "px"
    });
  };

  window.onmouseout = function(e) {
    gsap.to(cursor, 0.3, {
      opacity: 0
    });
    initCursor = false;
  };
});

// Collapsed menu
function showMenu() {
  var menucontent = document.getElementById("menu-content");

  var button = document.getElementById("menu-button");
  if (menucontent.style.display === "none") {
    menucontent.style.display = "block";
    button.innerHTML = "Close";
  } else {
    menucontent.style.display = "none";
    button.innerHTML = "Menu";
  }
}