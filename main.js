import "./styles/main.scss";
import Swiper from "swiper";
import { Navigation } from "swiper/modules";
import "swiper/scss";
import "swiper/scss/navigation";

// -----------------slider----------------------

const swiper = new Swiper(".swiper", {
  modules: [Navigation],
  direction: "horizontal", //направление горизонтальное
  slidesPerView: 1, // видим один слайдер
  spaceBetween: 21, // расстояние между слайдерами px
  loop: true, // бесконечность

  navigation: {
    nextEl: ".right",
    prevEl: ".left",
  },

  // точки скипа
  breakpoints: {
    // 0: { 
    //   width: 500,
    //   slidesPerView: 1,
    // }, 
    730: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    //  max 1024
    1024: {
      slidesPerView: 3,
      // spaceBetween: 21,
    },

    1288: {
      slidesPerView: 4,
      // spaceBetween: 21,
    },
    // 1288: {
    //   slidesPerView: 3,
    //   // spaceBetween: 21,
    // },
  },
});

addEventListener("resize", () => {
  swiper.update();
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

// Глобальные переменные
const myDropdown = document.getElementById("dropdown-js");
const activeLang = document.getElementById("active-lang-js");
const languages = document.querySelectorAll(".lang");

function workWithDropDown(e) {
  // Функция скрытия dropdown (Через метод)
  const hideDropdown = () => {
    myDropdown.classList.remove("show");
    setTimeout(() => {
      myDropdown.classList.add("hide");
    }, 300);
  };
  // e.target - цель ивента (первое, что попалось под клик)
  // console.log(e.target);

  if (e.target.matches("#active-lang-js")) {
    console.log("Клик на флажок");
    if (myDropdown.classList.contains("show")) {
      hideDropdown();
    } else {
      myDropdown.classList.remove("hide");
      setTimeout(() => {
        myDropdown.classList.add("show");
      }, 10);
    }
  } else if (
    !e.target.matches(".dropdown") &&
    myDropdown.classList.contains("show")
  ) {
    console.log("Клик вне флажка");
    hideDropdown();
  }
}

function workWithLangs() {
  /** Отобразить элементы выбора языка */
  function showLangElems() {
    languages.forEach((elements) => {
      elements.classList.remove("hide");
    });
  }
  /**
   * Возвращается выбранный язык
   * @param {Element} elem Контейнер с языками
   * @returns {string|undefined} Возвращает выбор нужного языка
   */
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

  function switchLang(elem) {
    const languageClassName = langClassName(elem);
    const titleLangClassName = langClassName(activeLang);

    if (languageClassName != titleLangClassName) {
      console.log("Смена языка", titleLangClassName, languageClassName);
      activeLang.classList.remove(titleLangClassName);
      activeLang.classList.add(languageClassName);
    }
  }

  function displayLang(elem) {
    const languageClassName = langClassName(elem);
    console.log(languageClassName);
    if (activeLang.classList.contains(languageClassName)) {
      elem.classList.add("hide");
    }
  }

  // Цикл

  languages.forEach((elem) => {
    // elem - каждый контейнер, связанный с языком

    displayLang(elem);
    elem.addEventListener("click", () => {
      showLangElems();
      switchLang(elem);
      displayLang(elem);
    });
  });
}

//  Вызов основных функций
window.onclick = workWithDropDown;
workWithLangs();

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

// inputSearchCity.onfocus = function () {
//   if (inputSearchCity.value === "Рестораны") {
//     inputSearchCity.value = "";
//   }
// };

// inputSearchCity.onblur = function () {
//   if (inputSearchCity.value === "") {
//     inputSearchCity.value = "Рестораны";
//   }
// };

// inputSearchQuery.onfocus = function () {
//   if (inputSearchQuery.value === "Москва") {
//     inputSearchQuery.value = "";
//   }
// };

// inputSearchQuery.onblur = function () {
//   if (inputSearchQuery.value === "") {
//     inputSearchQuery.value = "Москва";
//   }
// };

/**
 * 
 * @param {Element|null} elem element через которого проходит проверка
 * @param {string} value то значение с которым сравнивается значение элемента
 * @param {string} nextValue то значение, которое мы применяем к значению элемента после сравнения
 */
function switchInput(elem, value, nextValue) {
  if (elem.value === value) elem.value = nextValue
}

inputSearchCity.onfocus = function () { switchInput(this, "Рестораны", "") }
inputSearchCity.onblur = function () { switchInput(this, "", "Рестораны") }
inputSearchQuery.onfocus = function () { switchInput(this, "Москва", "") }
inputSearchQuery.onblur = function () { switchInput(this, "", "Москва") }


// ПРОСТАЯ РАБОТА CALLBACK
// document.addEventListener("click", () => {

// })

// const obj = {
//   addEventListener: function (eventName, callback) {
//     switch (eventName) {
//       case "click": {
//         console.log("compiled started")
//         setTimeout(() => {
//           console.log("compiled ready")
//           callback()
//         }, 2000)
//       }
//         break;
//       default: console.error("not correct event name"); break;
//     }
//   }
// }

// obj.addEventListener("click", ()=> {
//   setTimeout(()=> {
//     console.log("I M CLICKED")
//   })
// })

// obj.addEventListener("done", () => {
//   console.log("am i ready")
// })
// /**