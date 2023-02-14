//*========================================
//*             3- FETCH API
//*========================================

//? Dis kaynaklardan veri getirmek icin kullanilan basit bir arabirimdir.
//? Ag istekleri yapmamizi ve cevaplari yontebilmemize olanak saglar.
//? Javascript ortaminda en cok kullanilan Asenkron islem orneklerinin basinda
//? gelmektedir.

//? fetch() fonksiyonu veri getirmek istediginiz kaynagin yolunu gosteren zorunlu
//? bir parametre almaktadir ve bu istegin cevabini gosteren bir Promise dondurmektedir.

console.log("FETCH");

fetch("https://api.github.com/users")
  .then((res) => res.json())
  .then((data) => showGithubUsers(data))
  .catch((err) => console.log(err));

const showGithubUsers = (users) => {
  console.log(users);
  const userArticle = document.querySelector(".users");
  users.forEach((user) => {
    userArticle.innerHTML += `
    <h2 class="">${user.login}</h2>
    <img class="w-25" src = ${user.avatar_url}/>`;
  });
};
