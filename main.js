let GenBtn = document.getElementById("main-btn");
let clickCount = 0;
let navBTN = document.getElementById("nav-btn");
function alertBtn() {
  alert("works");
}
GenBtn.addEventListener("click", function () {
  window.location.href = "details.html";
});

navBTN.addEventListener("click", function () {
  if (clickCount == 0) {
    let cont = document.getElementById("leftcont");
    cont.classList.add("active");
    clickCount++;
  } else if (clickCount > 0) {
    let cont = document.getElementById("leftcont");
    cont.classList.remove("active");
    clickCount = 0;
  }
});
