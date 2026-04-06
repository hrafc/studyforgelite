// vytvoří loading screen dynamicky
(function () {
  const loader = document.createElement("div");
  loader.id = "appLoader";

  loader.innerHTML = `
    <div class="loader-content">
      <img src="icon-512.png" class="loader-icon" />
      <h2>StudyForge Lite</h2>

      <div class="loader-bar">
        <div class="loader-fill" id="loaderFill"></div>
      </div>
    </div>
  `;

  document.body.appendChild(loader);

  // fake loading progress
  let progress = 0;
  const fill = loader.querySelector("#loaderFill");

  const interval = setInterval(() => {
    progress += Math.random() * 15;

    if (progress >= 100) {
      progress = 100;
      fill.style.width = progress + "%";

      setTimeout(() => {
        loader.classList.add("hide");
        setTimeout(() => loader.remove(), 500);
      }, 400);

      clearInterval(interval);
    } else {
      fill.style.width = progress + "%";
    }
  }, 200);
})();
