import "./styles/main.scss";
//---------------------переключения языка---------------------------//

document.addEventListener("DOMContentLoaded", function () {
  const languageSwitcherBtn = document.getElementById("language-switcher-btn");
  const dropdown = document.querySelector(".dropdown");

  languageSwitcherBtn.addEventListener("click", function () {
    dropdown.classList.toggle("show");
  });

  // Закрытие выпадающего списка при клике вне его области
  document.addEventListener("click", function (event) {
    if (
      !dropdown.contains(event.target) &&
      event.target !== languageSwitcherBtn
    ) {
      dropdown.classList.remove("show");
    }
  });
});
