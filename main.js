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
  // spaceBetween: -13,
  // slidesPerView: 2,
  spaceBetween: 21,
  loop: true,
  // centeredSlides: true,
  // slidesOffsetBefore: 50,

  navigation: {
    nextEl: ".right",
    prevEl: ".left",
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
      spaceBetween: 0,
    },

    320: {
      slidesPerView: 1,
      spaceBetween: -13,
    },

    400: {
      slidesPerView: 2,
      spaceBetween: 350,
    },

    600: {
      slidesPerView: 2,
      spaceBetween: 170,
    },

    720: {
      slidesPerView: 2,
      spaceBetween: 90,
    },

    730: {
      slidesPerView: 2,
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

/**
 * @return {string} возвращает имя ивента touchstart, если это тач девайс или click, если это ПК
 */
function isTouchDevice() {
  const isTouch =
    "ontouchstart" in window || // свойство ontouchstart существует
    navigator.maxTouchPoints > 0 || // значение navigator.maxTouchPoints больше нуля
    navigator.msMaxTouchPoints > 0; // то же в старых версиях Internet Explorer и Microsoft Edge
  console.log("touch or click? ", isTouch);

  return isTouch ? "touchstart" : "click";
}

// Функция, управляющая поведением выпадающего меню (dropdown)
function workWithDropDown(e) {
  // скрытие выпадающего меню
  const hideDropdown = () => {
    myDropdown.classList.remove("show");
    setTimeout(() => {
      myDropdown.classList.add("hide");
    }, 300);
  };

  if (
    e.target.matches("#active-lang-js") ||
    (!e.target.matches(".dropdown") && myDropdown.classList.contains("show"))
  ) {
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
  // Определение класса языка для заданного элемента
  function langClassName(elem) {
    let classArray = Array.from(elem.classList);
    const lang = classArray.find((_class) => {
      const checkClass = _class.includes("flag");
      return checkClass;
    });
    return lang;
  }
  // Смена языка, основываясь на выборе пользователя
  function switchLang(elem) {
    const languageClassName = langClassName(elem);
    const titleLangClassName = langClassName(activeLang);

    if (languageClassName != titleLangClassName) {
      // console.log("Смена языка", titleLangClassName, languageClassName);
      activeLang.classList.remove(titleLangClassName);
      activeLang.classList.add(languageClassName);
    }
  }

  // Предотвращение повторного выбора уже активного языка
  function displayLang(elem) {
    const languageClassName = langClassName(elem);
    if (activeLang.classList.contains(languageClassName)) {
      elem.classList.add("hide");
    }
  }

  function handleLangEvent(event) {
    console.log("Обработка события:", event.type);
    showLangElems();
    switchLang(event.currentTarget);
    displayLang(event.currentTarget);
  }

  languages.forEach((elem) => {
    displayLang(elem);
    elem.addEventListener(isTouchDevice(), handleLangEvent);
  });
}

// Вызов основных функций
window.addEventListener(isTouchDevice(), workWithDropDown, { passive: true });
workWithLangs();

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
