const fetchLocation = (e) => {
  e.preventDefault();




    console.log(e.target.dataset.location);
    if (e.target.dataset.location != "remote") {

      //loading icon
      //put this in async function
      const key1 = "2768f4e462cf5ac";
      const key2 = "7fe624327115c943a";
      // console.log(location.replace);
      // let location = location.replace(" ", "");
      // var geocodingAPI = "https://api.openweathermap.org/geo/1.0/direct";
      // var apiUrl = "http://api.openweathermap.org/geo/1.0/direct?q=" + location.replace(" ", "") + "&appid=" + key1 + key2;
      // // var apiCall = geocodingAPI + "?q=" + e.target.dataset.location.replace(" ", "") + "&appid=" + key1 + key2;

      // fetch(apiUrl)
      //   .then(function (response) {
      //     // console.log(response);
      //     if (!response.ok) {
      //       throw new Error("Network response was not OK");
      //     }
      //     return response.json();
      //   })
      //   .then(function (data) {
      //     console.log(data);
      //     geoData = data;

      //   })
      //   .catch(function (error) {
      //     console.error("There has been a problem with your fetch operation: ", error);
      //   });






    console.log("hi");
    // Send a POST request to the API endpoint
    // fetch("/api/job/get-location", {
    //   method: "POST",
    //   body: JSON.stringify({location: e.target.dataset.location }),
    //   headers: { "Content-Type": "application/json" },
    // }).then((response) => {
    //   console.log("inside .then");
    //   if (response.ok) {
    //     console.log(response.json());
    //   } else {
    //     console.log("response is not ok");
    //   }
    // })
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
