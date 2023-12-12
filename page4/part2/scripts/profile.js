import { logout } from "./firebase.js";

const tagPersonal = document.querySelector(".tag-personal");
const tagCollect = document.querySelector(".tag-collect");
const contentPersonal = document.querySelector(".content-personal");
const contentCollect = document.querySelector(".content-collect");
const infoBtn = document.querySelector(".info-btn");
const infoInputs = document.querySelectorAll(".info-input");
const tagLogout = document.querySelector(".tag-logout");
const memberBtn = document.querySelector("#member-btn");

tagPersonal.addEventListener("click", () => {
  contentCollect.style.display = "none";
  contentPersonal.style.display = "flex";
  infoInputs.forEach((infoInput) => {
    infoInput.classList.remove("info-form-edited");
    infoInput.classList.add("info-form-unedited");
  });
});

tagCollect.addEventListener("click", () => {
  contentPersonal.style.display = "none";
  contentCollect.style.display = "flex";
});

infoBtn.addEventListener("click", () => {
  infoInputs.forEach((infoInput) => {
    infoInput.classList.toggle("info-form-unedited");
    infoInput.classList.toggle("info-form-edited");
  });
});

tagLogout.addEventListener("click", () => {
  logout();
  window.location.href = `${window.location.origin}/index.html`;
});

memberBtn.href = `${window.location.origin}/profile.html${window.location.search}`;
