import rick from "../../img/main-characters/rick-sanchez.webp";
import morty from "../../img/main-characters/morty-smith.webp";
import summer from "../../img/main-characters/summer-smith.webp";
import beth from "../../img/main-characters/beth-smith.webp";
import jerry from "../../img/main-characters/jerry-smith.webp";

const names = document.querySelectorAll(".main-characters__subtitle");
const image = document.querySelector(".main-characters__img");

const characterImages = {
  "Rick Sanchez": rick,
  "Morty Smith": morty,
  "Summer Smith": summer,
  "Beth Smith": beth,
  "Jerry Smith": jerry,
};

names.forEach((name) => {
  name.addEventListener("click", () => {
    const characterName = name.textContent.trim();
    const imagePath = characterImages[characterName];

  console.log("Изображение:", imagePath);
console.log("Тип:", typeof imagePath);
console.log("Ключи:", Object.keys(imagePath));

    image.src = imagePath;
    image.alt = characterName;
  });
});