document.addEventListener("DOMContentLoaded", () => {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const prof = urlParams.get("prof");
  const title = document.getElementById("title");
  title.textContent += " " + prof;
});
