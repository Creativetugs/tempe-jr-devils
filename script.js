const toggle = document.querySelector(".nav-toggle");
const nav = document.querySelector(".site-nav");

toggle.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  toggle.setAttribute("aria-expanded", open ? "true" : "false");
});

nav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
    toggle.setAttribute("aria-expanded", "false");
  });
});

const form = document.querySelector("#interest-form");
const note = document.querySelector("#form-note");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  note.hidden = false;
  form.reset();
});

const dialog = document.querySelector("#lightbox");
const dialogImage = dialog.querySelector("img");

document.querySelectorAll(".shot").forEach((shot) => {
  shot.addEventListener("click", () => {
    dialogImage.src = shot.dataset.full;
    dialogImage.alt = shot.querySelector("img").alt;
    dialog.showModal();
  });
});

dialog.querySelector(".close-light").addEventListener("click", () => dialog.close());
dialog.addEventListener("click", (event) => {
  if (event.target === dialog) dialog.close();
});
