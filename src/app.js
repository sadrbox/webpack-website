import "./assets/scss/main.scss";

import grid from "./components/grid.html";
import header from "./components/header.html";
import footer from "./components/footer.html";

console.log("Executing index.js");

if (typeof document !== "undefined") {
  console.log("Inject components");

  document.addEventListener("DOMContentLoaded", () => {
    // document.getElementById("root").innerHTML = header + footer;
    document.body.insertAdjacentHTML("afterBegin", grid);
    document.body.insertAdjacentHTML("beforeEnd", header + footer);
  });
}
