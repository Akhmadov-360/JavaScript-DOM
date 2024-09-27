let btnWindow = document.getElementById("openWindow");
let modal = document.getElementById("myModal");
let closeBtn = document.getElementsByClassName("close")[0];



btnWindow.onclick = () => {
  modal.style.display = "block";
  modal.classList.add("show");
};

closeBtn.onclick = () => {
  modal.style.display = "none";
  modal.classList.remove("show");
  setTimeout(() => {
        modal.style.display = "none";
    }, 5000);
};

window.onclick = (e) => {
  if (e.target == modal) {
    modal.style.display = "none";
    modal.classList.remove("show");
    setTimeout(() => {
        modal.style.display = "none";
    }, 5000);
  }

};
