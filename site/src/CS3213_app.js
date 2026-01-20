// app.js - demo frontend logic
document.addEventListener("DOMContentLoaded", () => {
  const busInfo = document.getElementById("bus-info");

  // Demo: static next bus info
  const nextBus = getNextBus();
  busInfo.textContent = `Next bus (${nextBus.route}) arriving in ${nextBus.minutes} minutes.`;
});

function getNextBus() {
  return {
    route: "Campus Loop",
    minutes: 3
  };
}
