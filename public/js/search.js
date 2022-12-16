const fetchLocation = (e) => {
  e.preventDefault();


  //loading icon
  //put this in async function

    console.log(e.target.dataset.location);
    if (e.target.dataset.location != "remote") {
    console.log("hi");
    // Send a POST request to the API endpoint
    fetch("/api/job/get-location", {
      method: "POST",
      body: JSON.stringify({location: e.target.dataset.location }),
      headers: { "Content-Type": "application/json" },
    }).then((response) => {
      console.log("inside .then");
      if (response.ok) {
        console.log("response.ok");
      } else {
        // display message
      }
    })
  }
};

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

const locationButtons = document.querySelectorAll(".location-button");
locationButtons.forEach((button) => button.addEventListener("click", fetchLocation));

const cardTabButtons = document.querySelectorAll(".job-card-button");
cardTabButtons.forEach((button) => button.addEventListener("click", toggleLocation));
