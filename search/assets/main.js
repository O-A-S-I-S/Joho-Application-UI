const exportCheck = document.getElementById("export");
const casillas = document.querySelectorAll(".check");
const resultados = document.querySelectorAll(".result-preview");
const confirm = document.getElementById("confirm");
const back = document.getElementById("back");
const confirmExport = document.querySelector(".confirm__export");
const failedExport = document.querySelector(".failed__export");
const finalConfirmation = document.querySelector(".final__confirmation");
const failBack = document.querySelector(".failed__back");
const exportSuccess = document.querySelector(".export__success");
const successBack = document.querySelector(".success__back");
const confirmationBack = document.querySelector(".confirmation__back");
const header = document.querySelector(".header");
const container = document.querySelector(".container");
const menuBar = document.querySelector(".menu__bar");

var countChecks = 0;
exportCheck.addEventListener("click", () => {
  if (exportCheck.checked) {
    confirm.style.display = "block";
    back.style.display = "block";
    casillas.forEach((casilla, i) => {
      casillas[i].classList.add("active");
    });

    resultados.forEach((result, i) => {
      resultados[i].classList.remove("result-preview");
      resultados[i].classList.add("result-preview-modified");
    });
  } else {
    confirm.style.display = "none";
    back.style.display = "none";
    casillas.forEach((casilla, i) => {
      casillas[i].classList.remove("active");
      if (casillas[i].checked) {
        casillas[i].checked = false;
      }
    });
    resultados.forEach((result, i) => {
      resultados[i].classList.remove("result-preview-modified");
      resultados[i].classList.add("result-preview");
    });
  }
});

confirm.addEventListener("click", () => {
  header.classList.add("shadow");
  container.classList.add("shadow");
  menuBar.classList.add("shadow");
  casillas.forEach((casilla, i) => {
    if (casillas[i].checked) {
      countChecks += 1;
    }
  });

  if (countChecks == 0) {
    failedExport.classList.add("show");
  } else {
    confirmExport.classList.add("show");
  }
});

finalConfirmation.addEventListener("click", () => {
  confirmExport.classList.remove("show");
  exportSuccess.classList.add("show");
  exportCheck.checked = false;
  confirm.style.display = "none";
  back.style.display = "none";
  countChecks = 0;
});

failBack.addEventListener("click", () => {
  failedExport.classList.remove("show");
  confirm.style.display = "none";
  back.style.display = "none";
  header.classList.remove("shadow");
  container.classList.remove("shadow");
  menuBar.classList.remove("shadow");
  casillas.forEach((casilla, i) => {
    casillas[i].classList.remove("active");
    if (casillas[i].checked) {
      casillas[i].checked = false;
    }
  });
  resultados.forEach((result, i) => {
    resultados[i].classList.remove("result-preview-modified");
    resultados[i].classList.add("result-preview");
  });
  countChecks = 0;
});

confirmationBack.addEventListener("click", () => {
  confirmExport.classList.remove("show");
  exportCheck.checked = false;
  confirm.style.display = "none";
  back.style.display = "none";
  countChecks = 0;
  casillas.forEach((casilla, i) => {
    if (casillas[i].classList.contains("active")) {
      casillas[i].classList.remove("active");
      if (casillas[i].checked) {
        casillas[i].checked = false;
      }
    }
  });

  resultados.forEach((result, i) => {
    resultados[i].classList.remove("result-preview-modified");
    resultados[i].classList.add("result-preview");
  });
  header.classList.remove("shadow");
  container.classList.remove("shadow");
  menuBar.classList.remove("shadow");
});

back.addEventListener("click", () => {
  confirmExport.classList.remove("show");
  exportCheck.checked = false;
  back.style.display = "none";
  confirm.style.display = "none";
  casillas.forEach((casilla, i) => {
    if (casillas[i].classList.contains("active")) {
      casillas[i].classList.remove("active");
      if (casillas[i].checked) {
        casillas[i].checked = false;
      }
    }
  });

  resultados.forEach((result, i) => {
    resultados[i].classList.remove("result-preview-modified");
    resultados[i].classList.add("result-preview");
  });
  header.classList.remove("shadow");
  container.classList.remove("shadow");
  menuBar.classList.remove("shadow");
  countChecks = 0;
});
successBack.addEventListener("click", () => {
  exportSuccess.classList.remove("show");
  countChecks = 0;
  casillas.forEach((casilla, i) => {
    if (casillas[i].classList.contains("active")) {
      casillas[i].classList.remove("active");
      if (casillas[i].checked) {
        casillas[i].checked = false;
      }
      casillas[i].classList.remove("active");
    }
  });

  resultados.forEach((result, i) => {
    resultados[i].classList.remove("result-preview-modified");
    resultados[i].classList.add("result-preview");
  });
  header.classList.remove("shadow");
  container.classList.remove("shadow");
  menuBar.classList.remove("shadow");
});
