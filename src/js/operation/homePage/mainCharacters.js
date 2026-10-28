const characterImages = {
  "Rick Sanchez": new URL(
    "../../../img/main-characters/rick-sanchez.webp",
    import.meta.url,
  ).href,
  "Morty Smith": new URL(
    "../../../img/main-characters/morty-smith.webp",
    import.meta.url,
  ).href,
  "Summer Smith": new URL(
    "../../../img/main-characters/summer-smith.webp",
    import.meta.url,
  ).href,
  "Beth Smith": new URL(
    "../../../img/main-characters/beth-smith.webp",
    import.meta.url,
  ).href,
  "Jerry Smith": new URL(
    "../../../img/main-characters/jerry-smith.webp",
    import.meta.url,
  ).href,
};
export const startMainCharactersEvents = () => {
  const names = document.querySelectorAll(".main-characters__subtitle");
  const image = document.querySelector("#mainCharacterImage");

  console.log("Имена:", names.length);
  console.log("Изображение:", image);

  if (!image || !names.length) return;

  names.forEach((name) => {
    name.addEventListener("click", () => {
      const characterName = name.textContent.trim();

      if (!characterImages[characterName]) return;

      image.src = characterImages[characterName];
      image.alt = characterName;

      names.forEach((item) => item.classList.remove("active"));
      name.classList.add("active");
    });
  });
};
