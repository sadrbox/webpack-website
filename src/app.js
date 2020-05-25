import "./assets/scss/main.scss";

// development grid system
import grid from "./components/grid.html";

// website blocks
import header from "./components/header.html";
import content from "./components/content.html";
import footer from "./components/footer.html";

console.log("Executing app.js");

if (typeof document !== "undefined") {
  console.log("Inject components");

  document.addEventListener("DOMContentLoaded", () => {
    document.getElementById('root').insertAdjacentHTML("afterBegin", header + content + footer);

    // injects development grid system
    if (typeof grid !== "undefined") {
      document.body.insertAdjacentHTML("afterBegin", grid);
    }
  });
}
