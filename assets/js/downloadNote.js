const macOSBtn = document.querySelector(".macOS");
const winBtn = document.querySelector(".windows");
const linuxBtn = document.querySelector(".linux");

macOSBtn.addEventListener("click", () => {
  window.open(
    "https://github.com/MOCMA-Project/mocma-notes/releases/download/v-1.0.1-pro/MOCMA.Notes-1.0.1.dmg"
  );
});

winBtn.addEventListener("click", () => {
  window.open(
    "https://github.com/MOCMA-Project/mocma-notes/releases/download/v-1.0.1-pro/MOCMA.Notes.Setup.1.0.1.exe"
  );
});

linuxBtn.addEventListener("click", () => {
  window.open(
    "https://github.com/MOCMA-Project/mocma-notes/releases/download/v-1.0.1-pro/MOCMA.Notes-1.0.1.AppImage"
  );
});
