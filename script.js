function updateUTCTime() {
  const now = new Date();
  let hours = now.getUTCHours();
  const minutes = now.getUTCMinutes().toString().padStart(2, "0");
  const seconds = now.getUTCSeconds().toString().padStart(2, "0");

  const ampm = hours >= 12 ? "PM" : "AM";
  hours = hours % 12 || 12; // Convert 24-hour format to 12-hour format

  const utcTime = `${hours
    .toString()
    .padStart(2, "0")}:${minutes}:${seconds} ${ampm}`;
  document.getElementById("utc-time").innerText = utcTime;
}

setInterval(updateUTCTime, 1000);

updateUTCTime();
