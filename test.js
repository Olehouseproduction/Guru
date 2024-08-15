// Проверка на устройство (+добавить в дом элемент id = "test")
window.addEventListener("touchstart", () => {
  const element = document.getElementById("test");
  console.log(navigator.userAgent);
  element.textContent = navigator.userAgent;
});

window.addEventListener("click", () => {
  const element = document.getElementById("test");
  console.log(navigator.userAgent);
  element.textContent = navigator.userAgent;
});
