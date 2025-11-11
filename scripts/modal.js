const modal = document.getElementById("socialModal");
const btn = document.querySelector(".contact .btn");
const close = document.getElementById("closeModal");

btn.addEventListener("click", (e) => {
  e.preventDefault(); // prevent default mailto behavior
  modal.style.display = "flex"; // show modal
});

close.addEventListener("click", () => {
  modal.style.display = "none";
});

// Close modal if clicking outside the box
window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});
