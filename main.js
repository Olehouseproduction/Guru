import "./styles/main.scss";
import Swiper from "swiper";
import { Navigation } from "swiper/modules";
import "swiper/scss";
import "swiper/scss/navigation";

// -----------------slider----------------------

const swiper = new Swiper(".swiper", {
  modules: [Navigation],
  direction: "horizontal",
  slidesPerView: 1,
  spaceBetween: 21,
  // slidesPerView: 2,
  // spaceBetween: 21,
  loop: true,
  // centeredSlides: true,
  // slidesOffsetBefore: 50,

  navigation: {
    nextEl: ".right",
    prevEl: ".left",
  },

  breakpoints: {
    730: {
      slidesPerView: 2,
      // spaceBetween: 10,
      spaceBetween: 30,
    },

    1024: {
      slidesPerView: 3,
    },

    1288: {
      slidesPerView: 4,
    },
  },
});

addEventListener("resize", () => {
  swiper.update();
});

// -----------------slider-END---------------------

//--------------------переключения языка-----------

// Глобальные переменные
const myDropdown = document.getElementById("dropdown-js");
const activeLang = document.getElementById("active-lang-js");
const languages = document.querySelectorAll(".lang");
let index = 0;

function workWithDropDown(e) {
  // Функция скрытия dropdown
  const hideDropdown = () => {
    myDropdown.classList.remove("show");
    setTimeout(() => {
      myDropdown.classList.add("hide");
    }, 300);
  };

  // console.log(e.target);
  // Проверка, является ли событие кликом на флажке или вне меню

  // if (e.target.matches("#active-lang-js")) {
  //   console.log("Клик на флажок");
  //   if (myDropdown.classList.contains("show")) {
  //     hideDropdown();
  //   } else {
  //     myDropdown.classList.remove("hide");
  //     setTimeout(() => {
  //       myDropdown.classList.add("show");
  //     }, 10);
  //   }
  // } else if (
  //   !e.target.matches(".dropdown") &&
  //   myDropdown.classList.contains("show")
  // ) {
  //   console.log("Клик вне флажка");
  //   hideDropdown();
  // }
  if (
    e.target.matches("#active-lang-js") ||
    (!e.target.matches(".dropdown") && myDropdown.classList.contains("show"))
  ) {
    index++;
    console.log("click active flag", index);
    if (myDropdown.classList.contains("show")) {
      hideDropdown();
    } else {
      myDropdown.classList.remove("hide");
      setTimeout(() => {
        myDropdown.classList.add("show");
      }, 10);
    }
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
    // console.log(classArray);
    const lang = classArray.find((_class) => {
      const checkClass = _class.includes("flag");
      // console.log(checkClass);
      return checkClass;
    });
    return lang;
  }

  function switchLang(elem) {
    const languageClassName = langClassName(elem);
    const titleLangClassName = langClassName(activeLang);

    if (languageClassName != titleLangClassName) {
      // console.log("Смена языка", titleLangClassName, languageClassName);
      activeLang.classList.remove(titleLangClassName);
      activeLang.classList.add(languageClassName);
    }
  }

  function displayLang(elem) {
    const languageClassName = langClassName(elem);
    // console.log(languageClassName);
    if (activeLang.classList.contains(languageClassName)) {
      elem.classList.add("hide");
    }
  }

  // Цикл по элементам выбора языка

  languages.forEach((elem) => {
    displayLang(elem);
    elem.addEventListener("click", () => {
      // event.stopPropagation(); // Предотвращаем всплытие события
      showLangElems();
      switchLang(elem);
      displayLang(elem);
    });
  });
}

//  Вызов основных функций
// Добавляем обработчик события для всего окна
// window.onclick = workWithDropDown;
window.addEventListener("touchstart", workWithDropDown, { passive: true });
window.addEventListener("click", workWithDropDown);
// window.addEventListener("touchstart", workWithLangs, { passive: true });
workWithLangs();
window.addEventListener("touchstart", workWithLangs, { passive: true });
window.addEventListener("click", workWithLangs);

// -----------------header-input----------------------

let inputSearchCity = document.getElementById("find");
let inputSearchQuery = document.getElementById("where");

/**
 *
 * @param {Element|null} elem element через которого проходит проверка
 * @param {string} value то значение с которым сравнивается значение элемента
 * @param {string} nextValue то значение, которое мы применяем к значению элемента после сравнения
 */
function switchInput(elem, value, nextValue) {
  if (elem.value === value) elem.value = nextValue;
}

inputSearchCity.onfocus = function () {
  switchInput(this, "Рестораны", "");
};
inputSearchCity.onblur = function () {
  switchInput(this, "", "Рестораны");
};
inputSearchQuery.onfocus = function () {
  switchInput(this, "Москва", "");
};
inputSearchQuery.onblur = function () {
  switchInput(this, "", "Москва");
};
