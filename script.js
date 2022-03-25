const seatsArray = [];
const seatsView = document.querySelector(".booked-seat-info");

function myFunction(cls) {
  let seatMaps = document.getElementById(cls);
  let seatMapsStyle = seatMaps.style.display;

  if (seatMapsStyle == "block") {
    seatMaps.style.display = "none";
  } else {
    seatMaps.style.animation = "expand 3s";
    seatMaps.style.display = "block";
  }
}

// cost
document.querySelectorAll("#bus-input").forEach((el) => {
  el.addEventListener("click", function (e) {
    if (seatsArray.includes(e.target.title)) {
      return;
    } else {
      seatsArray.push(e.target.title);

      const firstElementChild = seatsView.firstElementChild;
      seatsView.innerHTML = "";
      seatsView.append(firstElementChild);

      const seats = seatsArray.map(
        (seat) =>
          `<div class="row">
        <div class="col-4 text-center">${seat}</div>
        <div class="col-4 text-center">600</div>
        <div class="col-4 text-center">Economy</div>
      </div>`
      );
      seatsView.insertAdjacentHTML("beforeend", seats.join(" "));

      const cost = document.getElementById("total-cost");
      cost.innerText = seatsArray.length * 600;
    }
  });
});
