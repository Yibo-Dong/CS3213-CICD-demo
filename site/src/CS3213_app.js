// app.js - demo frontend logic

document.addEventListener("DOMContentLoaded", () => {
  const routeEl = document.getElementById("route");
  const minutesEl = document.getElementById("minutes");

  // Simulate loading delay
  setTimeout(() => {
    const nextBus = getNextBus();
    routeEl.textContent = `Route: ${nextBus.route}`;
    minutesEl.textContent = nextBus.minutes;
  }, 800);
});

function getNextBus() {
  return {
    route: "Campus Loop",
    minutes: 3
  };
}
