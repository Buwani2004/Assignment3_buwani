function changeImage(src, photographer) {
  document.getElementById("photo").src = src;
  document.getElementById("photographer").textContent = photographer;
}

function toggleTheme() {
  const currentTheme = document.documentElement.getAttribute("data-theme");
  const newTheme = currentTheme === "dark" ? "light" : "dark";
  document.documentElement.setAttribute("data-theme", newTheme);
  localStorage.setItem("theme", newTheme);
}

function updateName() {
  const userName = document.querySelector('[name="user_name"]').value;
  document.getElementById("greeting").textContent = "Hello, " + userName;
  localStorage.setItem("userName", userName);
}

window.onload = function () {
  const storedName = localStorage.getItem("userName");
  const savedTheme = localStorage.getItem("theme") || "light";
  document.documentElement.setAttribute("data-theme", savedTheme);
  if (storedName) {
    document.getElementById("greeting").textContent = "Hello, " + storedName;
  }
};
