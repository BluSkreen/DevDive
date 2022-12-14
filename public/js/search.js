
document.querySelectorAll(".job-card-location").forEach((target) => {
    console.log(target.dataset.location);

    //loading icon
    //put this in async function

//     if (target.dataset.location != "remote") {
//     // Send a POST request to the API endpoint
//     const response = await fetch("", {
//       method: "get",
//       body: JSON.stringify({ location }),
//       headers: { "Content-Type": "application/json" },
//     });

//     if (response.ok) {
//       console.log("response.ok");
//     } else {
//       // display message
//     }
//   }
})

const displayLocation = (e) => {
    e.preventDefault();
    // get the id of the button(=job_id)
    console.log(e.target);
    const id = e.target.id;
    if (!e.target.classList.contains("active") && id.split("-")[0] == "info") {
        console.log("not active");
        // if not active then toggle active on both buttons
        e.target.classList.toggle("active");
        document.querySelector(`#location-${id.split('-')[1]}`).classList.toggle("active");
        // toggle hidden on both bodys
        document
          .querySelector(`#job-card-info-body-${id.split("-")[1]}`)
          .toggleAttribute("hidden");
        document
          .querySelector(`#job-card-location-body-${id.split("-")[1]}`)
          .toggleAttribute("hidden");
    } else if (!e.target.classList.contains("active") && id.split("-")[0] == "location") {
        console.log("not active");
        // if not active then toggle active on both buttons
        e.target.classList.toggle("active");
        document.querySelector(`#info-${id.split("-")[1]}`).classList.toggle("active");
        // toggle hidden on both bodys
        document
          .querySelector(`#job-card-info-body-${id.split("-")[1]}`)
          .toggleAttribute("hidden");
        document
          .querySelector(`#job-card-location-body-${id.split("-")[1]}`)
          .toggleAttribute("hidden");
    } else {
      console.log("active");
    }

}

const locationButtons = document.querySelectorAll(".job-card-location-button");
locationButtons.forEach((button) => button.addEventListener("click", displayLocation));

const infoButtons = document.querySelectorAll(".job-card-info-button");
infoButtons.forEach((button) => button.addEventListener("click", displayLocation));