window.onload = function () {
  let producto1 = document.getElementById("producto1");
  let producto2 = document.getElementById("producto2");
  let closeModalButton1 = document.getElementsByClassName("close")[0];
  let closeModalButton2 = document.getElementsByClassName("close")[1];
  producto1.addEventListener("click", openModal1, false);
  producto2.addEventListener("click", openModal2, false);
  closeModalButton1.addEventListener("click", closeModal1, false);
  closeModalButton2.addEventListener("click", closeModal2, false);
};

function openModal1() {
  let modal = document.getElementById("modal1");

  modal.style = "visibility: visible";
}

function closeModal1() {
  let modal = document.getElementById("modal1");
  modal.style = "visibility: hidden";
}

function openModal2() {
  let modal = document.getElementById("modal2");

  modal.style = "visibility: visible";
}

function closeModal2() {
  let modal = document.getElementById("modal2");
  modal.style = "visibility: hidden";
}

// nav bar responsive

const toggleButton = document.getElementsByClassName("toggle-button")[0];
const navbarLinks = document.getElementsByClassName("navbar-links")[0];

toggleButton.addEventListener("click", () => {
  navbarLinks.classList.toggle("active");
});
