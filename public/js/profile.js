const profile = async () => {
  const response = await fetch(`/api/user/your_profile`, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  });
  if (!response.ok) {
    alert("user not found!");
  }
};

document.querySelector("#profile").addEventListener("click", profile);
