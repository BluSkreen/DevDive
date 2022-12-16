const locationButtons = document.querySelectorAll(".location-button");
const cardTabButtons = document.querySelectorAll(".job-card-button");

const toggleLocation = (e) => {
  e.preventDefault();
  // get the id of the button(=job_id)
  // console.log(e.target);
  const id = e.target.id;
  if (!e.target.classList.contains("active") && id.split("-")[0] == "info") {
    console.log("not active");
    // if not active then toggle active on both buttons
    // e.target.classList.toggle("active");
    document.querySelector(`#info-${id.split("-")[1]}`).classList.toggle("active");
    document.querySelector(`#location-${id.split("-")[1]}`).classList.toggle("active");
    // toggle hidden on both bodys
    document.querySelector(`#job-card-info-body-${id.split("-")[1]}`).toggleAttribute("hidden");
    document.querySelector(`#job-card-location-body-${id.split("-")[1]}`).toggleAttribute("hidden");
  } else if (!e.target.classList.contains("active") && id.split("-")[0] == "location") {

    console.log("not active");
    // if not active then toggle active on both buttons
    // e.target.classList.toggle("active");
    document.querySelector(`#location-${id.split("-")[1]}`).classList.toggle("active");
    document.querySelector(`#info-${id.split("-")[1]}`).classList.toggle("active");
    // toggle hidden on both bodys
    document.querySelector(`#job-card-info-body-${id.split("-")[1]}`).toggleAttribute("hidden");
    document.querySelector(`#job-card-location-body-${id.split("-")[1]}`).toggleAttribute("hidden");
  } else {
    console.log("active");
  }
};

locationButtons.forEach( async (e) => {
  console.log(e);
  await fetch("/api/job/get-location", {
    method: "POST",
    body: JSON.stringify({ location: e.dataset.location }),
    headers: { "Content-Type": "application/json" },
  })
    .then(function (response) {
      // console.log(response);
      if (!response.ok) {
        throw new Error("Network response was not OK");
      }
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      geoData = data;
      document
        .querySelector(`#iframe-${e.id.split("-")[1]}`)
        .setAttribute(
          "src",
          `https://embed.waze.com/iframe?zoom=11&lat=${geoData[0].lat}&lon=${geoData[0].lon}&ct=livemap`
        );
    })
    .catch(function (error) {
      console.error("There has been a problem with your fetch operation: ", error);
    });
});

cardTabButtons.forEach((button) => button.addEventListener("click", toggleLocation));