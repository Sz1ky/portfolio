window.addEventListener("load", () => {
  if (window.location.hash) {
    // remove hash from URL
    history.replaceState(null, null, window.location.pathname);

    // scroll to top after URL cleanup
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "auto" });
    }, 1);
  }
});
