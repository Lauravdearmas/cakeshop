function sendData() {
  email = document.getElementById("email").value;

  phone = document.getElementById("phone").value;

  mobile = document.getElementById("mobile").value;

  description = document.getElementById("description").value;

  alert(email + "\n" + phone + "\n" + mobile + "\n" + description + "\n");
}

// nav bar responsive

const toggleButton = document.getElementsByClassName("toggle-button")[0];
const navbarLinks = document.getElementsByClassName("navbar-links")[0];

toggleButton.addEventListener("click", () => {
  navbarLinks.classList.toggle("active");
});
