const clock = document.getElementById("clock");
const toggleButton = document.getElementById("toggleFormat");

let is24Hour = false;

function updateClock() {
  const now = new Date();
  let hours = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();
  let ampm = "";

  if (!is24Hour) {
    ampm = hours >= 12 ? " PM" : " AM";
    hours = hours % 12;
    hours = hours ? hours : 12; // 0 => 12
  }

  const displayTime = [
    hours.toString().padStart(2, "0"),
    minutes.toString().padStart(2, "0"),
    seconds.toString().padStart(2, "0")
  ].join(":") + (is24Hour ? "" : ampm);

  clock.textContent = displayTime;
}

setInterval(updateClock, 1000);
updateClock();

toggleButton.addEventListener("click", () => {
  is24Hour = !is24Hour;
  toggleButton.textContent = is24Hour ? "Switch to 12-Hour" : "Switch to 24-Hour";
});
