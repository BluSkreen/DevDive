const e = require("express");

const updateFormHandler = async (event) => {
  event.preventDefault();

  const username = document.querySelector("#username").value.trim();
  const first_name = document.querySelector("#first_name").value.trim();
  const last_name = document.querySelector("#last_name").value.trim();
  const email = document.querySelector("#email").value.trim();
  const location = document.querySelector("#location").value.trim();
  const website = document.querySelector("#website").value.trim();
  const github = document.querySelector("#github").value.trim();
  const phone = document.querySelector("#phone").value.trim();
  const intro = document.querySelector("#intro").value.trim();
  const about_me = document.querySelector("#aboutMe").value.trim();

  if (
    username ||
    first_name ||
    last_name ||
    email ||
    location ||
    website ||
    github ||
    phone ||
    intro ||
    about_me
  ) {
    const response = await fetch("/api/user/")
  }
};
