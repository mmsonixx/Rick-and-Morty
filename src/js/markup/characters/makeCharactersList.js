export const makeCharactersList = (characters) => {
  return characters
    .map(
      (character) => `
        <li class="characters__item">
          <img
            src="${character.image}"
            alt="${character.name}"
            class="characters__img"
          >

          <h2 class="characters__title">
            <button
              type="button"
              class="characters__name"
              data-character-id="${character.id}"
            >
              ${character.name}
            </button>
          </h2>

          <p class="characters__info">
            <span>Origin:</span>
            ${character.origin?.name || "Unknown"}
          </p>

          <p class="characters__info">
            <span>Location:</span>
            ${character.location?.name || "Unknown"}
          </p>
        </li>
      `
    )
    .join("");
};