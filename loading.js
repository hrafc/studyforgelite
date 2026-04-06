(function () {
  const loader = document.createElement("div");
  loader.id = "appLoader";

  loader.innerHTML = `
    <div class="loader-content">
      <img src="icon-512.png" class="loader-icon" />
      <h2>StudyForge Lite</h2>

      <p id="loadingText">Inicializace...</p>

      <div class="loader-bar">
        <div class="loader-fill" id="loaderFill"></div>
      </div>

      <div class="loader-percent" id="loaderPercent">0%</div>
    </div>
  `;

  document.body.appendChild(loader);

  const fill = document.getElementById("loaderFill");
  const percentText = document.getElementById("loaderPercent");
  const loadingText = document.getElementById("loadingText");

  let progress = 0;

  let states = {
    dom: false,
    assets: false,
    data: false,
    app: false
  };

  // 🔹 TEXTY (tipy)
  const tips = [
    "Načítám otázky...",
    "Připravuju quiz...",
    "Optimalizuji výkon...",
    "Načítám data...",
    "Inicializuji systém...",
    "Téměř hotovo..."
  ];

  function randomTip() {
    loadingText.textContent = tips[Math.floor(Math.random() * tips.length)];
  }

  setInterval(randomTip, 1200);

  // 🔹 DOM
  document.addEventListener("DOMContentLoaded", () => {
    states.dom = true;
  });

  // 🔹 ASSETS
  window.addEventListener("load", () => {
    states.assets = true;
  });

  // 🔹 PRELOAD DAT (simulace + real feel)
  function preloadData() {
    return new Promise((resolve) => {
      setTimeout(() => {
        states.data = true;
        resolve();
      }, 800); // 👈 zpomaleno
    });
  }

  preloadData();

  // 🔹 čekání na appku
  function checkAppReady() {
    if (window.appReady === true) {
      states.app = true;
    }
  }

  // 🔥 PROGRESS ENGINE
  const interval = setInterval(() => {
    checkAppReady();

    let target = 0;

    if (states.dom) target += 25;
    if (states.assets) target += 25;
    if (states.data) target += 25;
    if (states.app) target += 25;

    // 🔥 SMOOTH PROGRESS (pomalejší)
    if (progress < target) {
      progress += Math.random() * 3 + 1; // zpomalení
    }

    if (progress > 100) progress = 100;

    fill.style.width = progress + "%";
    percentText.textContent = Math.floor(progress) + "%";

    // 🔥 FINISH
    if (progress >= 100 && states.app) {
      clearInterval(interval);

      loadingText.textContent = "Hotovo ✔";

      setTimeout(() => {
        loader.classList.add("hide");
        setTimeout(() => loader.remove(), 500);
      }, 500);
    }
  }, 80);
})();
