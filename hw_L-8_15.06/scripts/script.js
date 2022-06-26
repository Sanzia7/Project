/*  HW_15.06.2022(Карточки из массива объектов)

Создать скрипт, который формирует карточки с данными пользователей из данного массива объектов.
В карточке должна быть фото и ссылка на почту. 
*/

const users = [{
    id: 1,
    email: "michael.lawson@gmail.com",
    first_name: "Michael",
    last_name: "Lawson",
    avatar:"./img/img1.jpeg",
  },
  {
    id: 2,
    email: "lindsay.ferguson@rgmail.com",
    first_name: "Lindsay",
    last_name: "Ferguson",
    avatar: "./img/img2.jpeg",
  },
  {
    id: 3,
    email: "tobias.funke@gmail.com",
    first_name: "Tobias",
    last_name: "Funke",
    //avatar: "https://reqres.in/img/faces/9-image.jpg",
    avatar: "./img/img3.jpeg",
  },
];

const rootElem = document.querySelector("#root");

users.forEach(({
  id,
  email,
  first_name,
  last_name,
  avatar
}) => {
  const container = document.createElement("div");
  const idElem = document.createElement("p");
  const emailElem = document.createElement("a");
  const firstNameElem = document.createElement("p");
  const lastNameElem = document.createElement("p");
  const avatarElem = document.createElement("img");

  idElem.innerText = `ID: ${id}`;
  emailElem.innerText = `${email}`;
  firstNameElem.innerText = `First name: ${first_name}`;
  lastNameElem.innerText = `Last name: ${last_name}`;
  avatarElem.innerText = avatar;

  emailElem.setAttribute("href", `mailto: ${email}`);
  avatarElem.setAttribute("src", avatar);
  avatarElem.setAttribute("alt", "avatar of user");

  container.classList.add("user");
  idElem.classList.add("id");
  emailElem.classList.add("email");
  firstNameElem.classList.add("first_name");
  lastNameElem.classList.add("last_name");
  avatarElem.classList.add("avatar");

  container.append(idElem, emailElem, firstNameElem, lastNameElem, avatarElem);
  rootElem.append(container);
});