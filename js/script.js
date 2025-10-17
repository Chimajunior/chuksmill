// Modal elements
const modal = document.getElementById("project-modal");
const modalMain = document.getElementById("modal-main");
const modalTitle = document.getElementById("modal-title");
const modalMeta = document.getElementById("modal-meta");
const modalDesc = document.getElementById("modal-desc");
const modalGallery = document.getElementById("modal-gallery");
const closeModal = document.getElementById("close-modal");
const menuBtn = document.getElementById("menu-btn");
const mobileMenu = document.getElementById("mobile-menu");

// Active nav highlight
const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll("#desktop-nav a, #mobile-menu a");

menuBtn.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
});



window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 120; // adjust for header height
    const sectionHeight = section.offsetHeight;
    if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href") === "#" + current) {
      link.classList.add("active");
    }
  });
});


// Open modal when a project card is clicked
document.querySelectorAll(".project-card").forEach(card => {
  card.addEventListener("click", () => {
    const title = card.dataset.title;
    const location = card.dataset.location;
    const main = card.dataset.main;
    const extras = card.dataset.extra.split(",");
    const desc = card.dataset.desc;

    modalTitle.textContent = title;
    modalMeta.textContent = location;
    modalMain.src = main.trim();
    modalDesc.textContent = desc;

    // Build gallery thumbnails
    modalGallery.innerHTML = "";
    extras.forEach(src => {
      const img = document.createElement("img");
      img.src = src.trim();
      img.className = "w-full h-24 object-cover rounded cursor-pointer hover:opacity-80";
      img.addEventListener("click", () => {
        modalMain.src = src.trim(); // 🔥 change main image
      });
      modalGallery.appendChild(img);
    });

    modal.classList.remove("hidden");
    modal.classList.add("flex");
  });
});

// Close modal
closeModal.addEventListener("click", () => {
  modal.classList.add("hidden");
  modal.classList.remove("flex");
});

// Also close when clicking outside modal box
modal.addEventListener("click", e => {
  if (e.target === modal) {
    modal.classList.add("hidden");
    modal.classList.remove("flex");
  }
});


// Update year
document.getElementById("year").textContent = new Date().getFullYear();

