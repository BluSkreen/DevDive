document.getElementById("save").addEventListener("click", async (event) => {
  const username = document.querySelector("#username").value.trim();
  const role = document.getElementById("devType").value.trim();
  const first_name = document.querySelector("#first_name").value.trim();
  const last_name = document.querySelector("#last_name").value.trim();
  const email = document.querySelector("#email").value.trim();
  const location = document.querySelector("#location").value.trim();
  const website = document.querySelector("#website").value.trim();
  const github = document.querySelector("#github").value.trim();
  const phone = document.querySelector("#phone").value.trim();
  const intro = document.querySelector("#intro").value.trim();
  const aboutMe = document.querySelector("#aboutMe").value.trim();
  const id = document.getElementById("username").getAttribute("data-userId");

  console.log(id);

  const response = await fetch(`/api/user/update/${id}`, {
    method: "PUT",
    body: JSON.stringify({
      first_name,
      last_name,
      username,
      role,
      email,
      location,
      website,
      github,
      phone,
      intro,
      aboutMe,
    }),
    headers: { "Content-Type": "application/json" },
  });
  const newUserInfo = await response.json();
  if (response.ok) {
    console.log(newUserInfo);
    document.location.replace(`/profile/${newUserInfo.username}`);
  } else {
    alert("Error: Could not update info");
  }
});
