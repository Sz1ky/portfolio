const emailLink = document.getElementById("emailLink");
const email = "patrikszikora04@gmail.com";

document.addEventListener("DOMContentLoaded", () => {
  const emailLink = document.getElementById("emailLink");
  if (!emailLink) return; // just in case

  const email = "patrikszikora04@gmail.com";

  emailLink.addEventListener("click", (e) => {
    e.preventDefault();

    const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);

    if (isMobile) {
      window.location.href = `googlegmail://co?to=${email}`;
      setTimeout(() => {
        window.open(
          `https://mail.google.com/mail/?view=cm&fs=1&to=${email}`,
          "_blank"
        );
      }, 500);
    } else {
      window.open(
        `https://mail.google.com/mail/?view=cm&fs=1&to=${email}`,
        "_blank"
      );
    }
  });
});
