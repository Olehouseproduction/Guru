import "./styles/main.scss";
import Swiper from "swiper";
import { Navigation } from "swiper/modules";
import "swiper/scss";
import "swiper/scss/navigation";

// -----------------slider----------------------

new Swiper(".swiper", {
  modules: [Navigation],
  // Опции слайдера
  direction: "horizontal",
  slidesPerView: 4,
  loop: true,
  // Navigation arrows
  navigation: {
    nextEl: ".right",
    prevEl: ".left",
  },
});

// -----------------slider-END---------------------
// //---------------------переключения языка---------------------------//

// // Закрыть раскрывающийся список, если пользователь щелкнет за его пределами.
// window.onclick = function (e) {
//   if (!e.target.matches(".dropbtn")) {
//     var myDropdown = document.getElementById("myDropdown");
//     if (myDropdown.classList.contains("show")) {
//       myDropdown.classList.remove("show");
//     }
//   }
// };

// function showDropdown() {
//   document.getElementById("dropdown-js").classList.toggle("show");
// }

// const element = document.getElementById("wrapper-language-js");
// // Добавляем обработку события
// element.addEventListener("click", () => {
//   showDropdown();
//   console.log("выпадающее меню открылось");
// // });
let myDropdown = document.getElementById("dropdown-js");
let activeLang = document.getElementById("active-lang-js");

window.onclick = function (e) {
  console.log(e.target);
  if (e.target.matches("#active-lang-js")) {
    console.log("Клик на флажок");
    if (myDropdown.classList.contains("show")) {
      myDropdown.classList.remove("show");
    } else {
      myDropdown.classList.add("show");
    }
  } else if (!e.target.matches(".dropdown")) {
    console.log("Клик вне флажка");
    if (myDropdown.classList.contains("show")) {
      myDropdown.classList.remove("show");
    }
  }
};

let languages = document.querySelectorAll(".lang");

languages.forEach((elem) => {
  displayLang(elem);

  elem.addEventListener("click", () => {
    languages.forEach((vari) => {
      vari.classList.remove("hide");
    });

    switchLang(elem);
    displayLang(elem);
  });
});

function langClassName(elem) {
  let classArray = Array.from(elem.classList);
  console.log(classArray);
  const lang = classArray.find((_class) => {
    const checkClass = _class.includes("flag");
    console.log(checkClass);
    return checkClass;
  });
  return lang;
}

function displayLang(elem) {
  const languageClassName = langClassName(elem);
  console.log(languageClassName);
  if (activeLang.classList.contains(languageClassName)) {
    elem.classList.add("hide");
  }
}

function switchLang(elem) {
  const languageClassName = langClassName(elem);
  const titleLangClassName = langClassName(activeLang);

  if (languageClassName != titleLangClassName) {
    console.log("Смена языка", titleLangClassName, languageClassName);
    activeLang.classList.remove(titleLangClassName);
    activeLang.classList.add(languageClassName);
  }
}

//Универсальный метод, который возвращает название класса, которое содержит слово flag

//     let classArray = Array.from(elem.classList);
//     console.log(classArray);
//     const languageClassName = classArray.find((_class) => {
//       const checkClass = _class.includes("flag");
//       console.log(checkClass);
//       return checkClass;
//     });
//     console.log(languageClassName);
//     if (activeLang.classList.contains(languageClassName)) {
//       elem.classList.add("hide");
//     }
//   });

// window.onclick = function () {
//   console.log("Кликнуто!");
//   //   hideDropdown();
// };

// function hideDropdown() {
//   document.getElementById("dropdown-js").classList.add("hide");
// }

// document.addEventListener("click", function(event) {
//     let
// }

// Как сделать, чтобы при клике на окно, вне dropdown , применялась функция hideDropdown
// // -------------------------
// document.addEventListener("click", function(event) {
//     var dropdown = document.getElementById("myDropdown");
//     if (!dropdown.contains(event.target)) {
//         hideDropdown();
//     }
// });

// function toggleDropdown() {
//     var dropdownContent = document.getElementById("dropdownContent");
//     dropdownContent.classList.toggle("show");
// }

// function hideDropdown() {
//     var dropdownContent = document.getElementById("dropdownContent");
//     dropdownContent.classList.remove("show");
// }

// -----------------header-input----------------------

let inputSearchCity = document.getElementById("find");
let inputSearchQuery = document.getElementById("where");

inputSearchCity.onfocus = function () {
  if (inputSearchCity.value === "Рестораны") {
    inputSearchCity.value = "";
  }
};

inputSearchCity.onblur = function () {
  if (inputSearchCity.value === "") {
    inputSearchCity.value = "Рестораны";
  }
};

inputSearchQuery.onfocus = function () {
  if (inputSearchQuery.value === "Москва") {
    inputSearchQuery.value = "";
  }
};

inputSearchQuery.onblur = function () {
  if (inputSearchQuery.value === "") {
    inputSearchQuery.value = "Москва";
  }
};
