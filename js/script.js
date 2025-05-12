
//Cursor
document.addEventListener("DOMContentLoaded", function(event) {
  var cursor = document.querySelector(".cursor");
  var links = document.querySelectorAll("a, button");
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
  var menuIcon = document.getElementById("menu-icon");
  var menuClose = document.getElementById("menu-close");

  var isHidden = window.getComputedStyle(menucontent).display === "none";
  if (isHidden) {
    menucontent.style.display = "block";
    menuClose.style.display = "block";
    menuIcon.style.display = "none";
  } else {
    menucontent.style.display = "none";
    menuClose.style.display = "none";
    menuIcon.style.display = "block";
  }
}

//back to top button, from https://www.w3schools.com/howto/howto_js_scroll_to_top.asp
// Get the button:
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

