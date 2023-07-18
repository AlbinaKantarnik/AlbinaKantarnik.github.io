
const GITHUB_URL = "https://api.github.com/users/AlbinaKantarnik"; 

fetch(GITHUB_URL)
  //Asks for retrieveng information from the server.

  .then(function (response) {
    return response.json();
  })
  //Means to retrieve from the server and "then" execute the function according to the server's response.
  //Creates an object from the corresponding response.

  .then(function (data) {
    //"Then" make a function witrh the "data", which is whatever the server sent back to us.

    const profileImage = document.getElementById("profile-image");
    const profileName = document.getElementById("profile-name");

    profileImage.src = data.avatar_url;
    profileName.textContent = data.name;
  });