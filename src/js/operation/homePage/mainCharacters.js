const characterImages = {
  "Rick Sanchez": {
    desktop: [
      new URL("../../../img/desktop/main-characters/rick-sanchez@desktop-1x.webp", import.meta.url).href,
      new URL("../../../img/desktop/main-characters/rick-sanchez@desktop-2x.webp", import.meta.url).href,
    ],
    tablet: [
      new URL("../../../img/tablet/main-characters/rick-sanchez@tablet-1x.webp", import.meta.url).href,
      new URL("../../../img/tablet/main-characters/rick-sanchez@tablet-2x.webp", import.meta.url).href,
    ],
    mobile: [
      new URL("../../../img/mobile/main-characters/rick-sanchez@mobile-1x.webp", import.meta.url).href,
      new URL("../../../img/mobile/main-characters/rick-sanchez@mobile-2x.webp", import.meta.url).href,
    ],
  },

  "Morty Smith": {
    desktop: [
      new URL("../../../img/desktop/main-characters/morty-smith@desktop-1x.webp", import.meta.url).href,
      new URL("../../../img/desktop/main-characters/morty-smith@desktop-2x.webp", import.meta.url).href,
    ],
    tablet: [
      new URL("../../../img/tablet/main-characters/morty-smith@tablet-1x.webp", import.meta.url).href,
      new URL("../../../img/tablet/main-characters/morty-smith@tablet-2x.webp", import.meta.url).href,
    ],
    mobile: [
      new URL("../../../img/mobile/main-characters/morty-smith@mobile-1x.webp", import.meta.url).href,
      new URL("../../../img/mobile/main-characters/morty-smith@mobile-2x.webp", import.meta.url).href,
    ],
  },

  "Summer Smith": {
    desktop: [
      new URL("../../../img/desktop/main-characters/summer-smith@desktop-1x.webp", import.meta.url).href,
      new URL("../../../img/desktop/main-characters/summer-smith@desktop-2x.webp", import.meta.url).href,
    ],
    tablet: [
      new URL("../../../img/tablet/main-characters/summer-smith@tablet-1x.webp", import.meta.url).href,
      new URL("../../../img/tablet/main-characters/summer-smith@tablet-2x.webp", import.meta.url).href,
    ],
    mobile: [
      new URL("../../../img/mobile/main-characters/summer-smith@mobile-1x.webp", import.meta.url).href,
      new URL("../../../img/mobile/main-characters/summer-smith@mobile-2x.webp", import.meta.url).href,
    ],
  },

  "Beth Smith": {
    desktop: [
      new URL("../../../img/desktop/main-characters/beth-smith@desktop-1x.webp", import.meta.url).href,
      new URL("../../../img/desktop/main-characters/beth-smith@desktop-2x.webp", import.meta.url).href,
    ],
    tablet: [
      new URL("../../../img/tablet/main-characters/beth-smith@tablet-1x.webp", import.meta.url).href,
      new URL("../../../img/tablet/main-characters/beth-smith@tablet-2x.webp", import.meta.url).href,
    ],
    mobile: [
      new URL("../../../img/mobile/main-characters/beth-smith@mobile-1x.webp", import.meta.url).href,
      new URL("../../../img/mobile/main-characters/beth-smith@mobile-2x.webp", import.meta.url).href,
    ],
  },

  "Jerry Smith": {
    desktop: [
      new URL("../../../img/desktop/main-characters/jerry-smith@desktop-1x.webp", import.meta.url).href,
      new URL("../../../img/desktop/main-characters/jerry-smith@desktop-2x.webp", import.meta.url).href,
    ],
    tablet: [
      new URL("../../../img/tablet/main-characters/jerry-smith@tablet-1x.webp", import.meta.url).href,
      new URL("../../../img/tablet/main-characters/jerry-smith@tablet-2x.webp", import.meta.url).href,
    ],
    mobile: [
      new URL("../../../img/mobile/main-characters/jerry-smith@mobile-1x.webp", import.meta.url).href,
      new URL("../../../img/mobile/main-characters/jerry-smith@mobile-2x.webp", import.meta.url).href,
    ],
  },
};
export const startMainCharactersEvents = () => {
  const names = document.querySelectorAll(".main-characters__subtitle");

  const image = document.querySelector("#mainCharacterImage");

  const desktop = document.querySelector(".main-characters__desktop");
  const tablet = document.querySelector(".main-characters__tablet");
  const mobile = document.querySelector(".main-characters__mobile");

  if (!image || !names.length || !desktop || !tablet || !mobile) return;

  names.forEach((name) => {
    name.addEventListener("click", () => {
      const characterName = name.textContent.trim();
      const character = characterImages[characterName];

      if (!character) return;

      desktop.srcset = `${character.desktop[0]} 1x, ${character.desktop[1]} 2x`;

      tablet.srcset = `${character.tablet[0]} 1x, ${character.tablet[1]} 2x`;

      mobile.srcset = `${character.mobile[0]} 1x, ${character.mobile[1]} 2x`;

      image.src = character.desktop[0];
      image.alt = characterName;

      names.forEach((item) => item.classList.remove("active"));

      name.classList.add("active");
    });
  });
};
