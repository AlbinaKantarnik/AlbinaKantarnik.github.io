
const GITHUB_URL = "https://api.github.com/users/AlbinaKantarnik"; 

fetch(GITHUB_URL)  //Получение HTTP-запросов и получения данных извне.

  .then(function (response) {
    return response.json(); //преобразование ответа в JavaScript-объект
  })
  .then(function (data) { //получаем данные от сервера

    const profileImage = document.getElementById("profile-image");
    const profileName = document.getElementById("profile-name");

    profileImage.src = data.avatar_url;
    profileName.textContent = data.name;
  });