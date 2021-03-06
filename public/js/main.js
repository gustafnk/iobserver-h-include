var loaded = 0;
function handler(entries, observer) {
  for (entry of entries) {
    if (entry.isIntersecting) {
      const base = document.getElementsByClassName("panels")[0];
      
      // create h-include custom element
      const panel = document.createElement("h-include");

      const loadingWrapper = document.createElement("div");
      loadingWrapper.classList.add("panel");

      const loadingText = document.createTextNode("..loading panel");
      loadingWrapper.appendChild(loadingText);

      panel.appendChild(loadingWrapper);
      panel.setAttribute("src", "http://localhost:4000/panel");
      base.appendChild(panel);
      loaded += 1;
      document.getElementById("amount").innerText = " " + loaded;
    }
  }
}

document.addEventListener("DOMContentLoaded", function(event) {
  let observer = new IntersectionObserver(handler);
  observer.observe(document.getElementById("target"));
});
