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

  const fill = loader.querySelector("#loaderFill");

  let progress = 0;
  let domLoaded = false;
  let fullyLoaded = false;
  let appReady = false;

  // 📌 DOM loaded
  document.addEventListener("DOMContentLoaded", () => {
    domLoaded = true;
  });

  // 📌 všechny soubory (images, css…)
  window.addEventListener("load", () => {
    fullyLoaded = true;
  });

  // 📌 čekání na appku
  function checkAppReady() {
    if (window.appReady === true) {
      appReady = true;
    }
  }

  // 📊 PROGRESS LOOP
  const interval = setInterval(() => {
    checkAppReady();

    // progres podle stavu
    if (domLoaded) progress += 5;
    if (fullyLoaded) progress += 10;
    if (appReady) progress += 20;

    // limit
    if (progress > 100) progress = 100;

    fill.style.width = progress + "%";

    // hotovo
    if (domLoaded && fullyLoaded && appReady && progress >= 100) {
      clearInterval(interval);

      setTimeout(() => {
        loader.classList.add("hide");
        setTimeout(() => loader.remove(), 500);
      }, 300);
    }
  }, 100);
})();
