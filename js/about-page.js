// // Collapsed menu

// function toggleAboutContent() {
//     const box = document.getElementById("aboutContent");
//     const icon = document.getElementById("star-icon");

  
//     if (box.classList.contains("expanded")) {
//       // COLLAPSE
//       box.style.height = box.scrollHeight + "px"; // Set to current full height first
//       requestAnimationFrame(() => {
//         box.style.height = "0px"; // Then animate to collapsed
//         box.style.padding = "0 1em";
//         box.style.borderBottom = "0em";
//         box.classList.remove("expanded");
//         icon.classList.remove("rotated");
//       });
//     } else {
//       // EXPAND
//       box.style.height = box.scrollHeight + "px"; // Start animation
//       box.classList.add("expanded");
//       box.style.padding = "1em";
//       box.style.borderBottom = "0.09em solid black";
//       icon.classList.add("rotated");
  
//       // After transition ends, let it auto-grow with content
//       box.addEventListener("transitionend", function handler() {
//         box.style.height = "auto";
//         box.removeEventListener("transitionend", handler);
//       });
//     }
//   }

// function toggleAboutContent(button) {
//     const section = button.closest(".collapsible-section");
//     const box = section.querySelector(".about-box");
//     const icon = button.querySelector("img");
  
//     if (box.classList.contains("expanded")) {
//       box.style.height = box.scrollHeight + "px";
//       requestAnimationFrame(() => {
//         box.style.height = "0px";
//         box.style.padding = "0 1em";
//         box.classList.remove("expanded");
//         icon.classList.remove("rotated");
      
//         // After transition ends, THEN remove border-bottom
//         box.addEventListener("transitionend", function handler(e) {
//           if (e.propertyName === "height") {
//             box.style.borderBottom = "0em";
//             box.removeEventListener("transitionend", handler);
//           }
//         });
//       });
//     } else {
//       box.style.height = box.scrollHeight + "px";
//       box.classList.add("expanded");
//       box.style.padding = "1em";
//       box.style.borderBottom = "0.09em solid black";
//       icon.classList.add("rotated");
  
//       box.addEventListener("transitionend", function handler() {
//         box.style.height = "auto";
//         box.removeEventListener("transitionend", handler);
//       });
//     }
//   }

function toggleAboutContent(trigger) {
  const section = trigger.closest(".collapsible-section");
  const box = section.querySelector(".aboutContent");
  const icon = section.querySelector(".star-icon");

  const isExpanded = box.classList.contains("expanded");

  if (isExpanded) {
    box.style.height = box.scrollHeight + "px"; // set explicit height
    requestAnimationFrame(() => {
      box.style.height = "0px";
      box.style.padding = "0 1em";
      icon.classList.remove("rotated");
      box.classList.remove("expanded");
    });
  } else {
    box.style.display = "block";
    const height = box.scrollHeight + "px";
    box.style.height = "0px"; // reset to zero before expanding
    box.classList.add("expanded");
    icon.classList.add("rotated");
    requestAnimationFrame(() => {
      box.style.height = height;
      box.style.padding = "1em";
    });
  }

  // Clean up height after expansion
  box.addEventListener("transitionend", function handler(e) {
    if (e.propertyName === "height") {
      if (box.classList.contains("expanded")) {
        box.style.height = "auto";
      } else {
        box.style.display = "none"; // hide completely when collapsed
      }
      box.removeEventListener("transitionend", handler);
    }
  });
}
