const button = document.querySelector("#reconnect");
const status = document.querySelector("#status");
const plaque = document.querySelector("#plaque");

const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

button?.addEventListener("click", async () => {
  if (!button || !status || !plaque) return;

  button.disabled = true;
  status.textContent = "Connecting…";

  await wait(1700);

  status.textContent = "Server not found.";
  button.textContent = "Reconnect";
  plaque.hidden = false;
  plaque.classList.add("revealed");
});
