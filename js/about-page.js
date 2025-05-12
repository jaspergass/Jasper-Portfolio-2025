document.addEventListener("DOMContentLoaded", function () {
  var coll = document.getElementsByClassName("collapsible");

  for (let i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function () {
      var content = this.nextElementSibling;
      var icon = this.querySelector(".star-icon");

      if (content.style.maxHeight) {
        setTimeout(function () {
          content.style.borderTop = "none";
        }, 180);
        content.style.maxHeight = null;
        if (icon) icon.classList.remove("rotated");
      } else {
        content.style.maxHeight = content.scrollHeight + "px";
        setTimeout(function () {
          content.style.borderTop = "0.09em solid #000000";
        }, 20);
        if (icon) icon.classList.add("rotated");
      }

      this.classList.toggle("active");
    });
  }
});