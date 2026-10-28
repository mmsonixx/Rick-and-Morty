export const makeCharactersList = (characters) => {
  const markup = characters
    .map(
      (character) => `
        <li class="characters__item">
            <img src="${character.image}" alt="" class="characters__img">
            <h2 class="characters__title">${character.name}</h2>
            <p class="characters__info"><span>Origin:</span> ${character.origin.name}</p>
            <p class="characters__info"><span>Location:</span> Svazilend</p>
          </li>
      `,
    )
    .join("");

  return markup;
};
