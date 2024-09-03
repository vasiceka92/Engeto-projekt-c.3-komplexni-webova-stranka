// ------ Switching menu for mobile ------ //

const navIconCont = document.querySelector(".menu-icon");
const iconsClass = document.querySelector(".fa-solid");
const navigationCont = document.querySelector(".navigation");

navIconCont.addEventListener("click", () => {
  if (iconsClass.classList[1] === "fa-bars") {
    iconsClass.classList.add("fa-xmark");
    iconsClass.classList.remove("fa-bars");
    navigationCont.style.visibility = "visible";
  } else {
    iconsClass.classList.add("fa-bars");
    iconsClass.classList.remove("fa-xmark");
    navigationCont.style.visibility = "hidden";
  }
});

// ----- Link's scroling control ----- //

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const targetId = this.getAttribute("href").substring(1);
    const targetElement = document.getElementById(targetId);

    window.scrollTo({
      top: targetElement.offsetTop,
      behavior: "smooth",
    });
  });
});

// ----- Light mode/ Dark mode ----- //

const modeSymbol = document.querySelector(".mode-box i");

// Switching mode
// Function for switching the Moon symbol for the Dark mode

const darkMode = () => {
  modeSymbol.classList.replace("fa-sun", "fa-moon");
};

// Function for switching the Sun symbol for the Light mode

const lightMode = () => {
  modeSymbol.classList.replace("fa-moon", "fa-sun");
};

// Dark/light switching function

const switchTheme = () => {
  const currentTheme = document.documentElement.getAttribute("data-theme");
  if (currentTheme === "dark") {
    document.documentElement.setAttribute("data-theme", "light");
    lightMode(); // light mode function calling
  } else {
    document.documentElement.setAttribute("data-theme", "dark");
    darkMode(); // dark mode function calling
  }
};

//  switchTheme function calling in EventListener

modeSymbol.addEventListener("click", switchTheme);

// ------ Password matching check ------ //

const validatePasswords = () => {
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirmPassword").value;
  const confirmPasswordField = document.getElementById("confirmPassword");

  if (password !== confirmPassword) {
    confirmPasswordField.value = ""; // field reset
    confirmPasswordField.placeholder = "Hesla se neshodují!";
    confirmPasswordField.classList.add("error");
  } else {
    confirmPasswordField.classList.remove("error");
    confirmPasswordField.placeholder = "Zadejte heslo znovu";
  }
};

const formular = document.querySelector("form");

formular.addEventListener("submit", (e) => {
  e.preventDefault();
  validatePasswords();
});

// ------ "Back-home-button" showing up after scrolling to the end------ //

window.onscroll = () => {
  const scrollPosition = window.scrollY + window.innerHeight;
  const pageHeight = document.documentElement.scrollHeight;
  const viewportWidth = window.innerWidth;
  const button = document.querySelector(".back-button button");

  // Condition for displaying the button: scroll to the bottom of the page and viewport width over 260px

  if (scrollPosition >= pageHeight - 5 && viewportWidth > 260) {
    button.classList.add("sticky");
  } else {
    button.classList.remove("sticky");
  }
};
