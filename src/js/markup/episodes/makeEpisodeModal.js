export const makeEpisodeModal = (episode, characters) => {
  const charactersMarkup = characters
    .map(
      (character) => `
        <div class="episode-modal__character">
          <img
            src="${character.image}"
            alt="${character.name}"
          />
          <span>${character.name}</span>
        </div>
      `,
    )
    .join("");

  return `
    <div class="episode-modal__overlay">
      <div class="episode-modal">

        <button class="episode-modal__close" type="button">
          &times;
        </button>

        <div class="episode-modal__content">

          <h2 class="episode-modal__title">
            ${episode.name}
          </h2>

          <div class="episode-modal__info">
            <div>
              <span>Id</span>
              <p>${episode.id}</p>
            </div>

            <div>
              <span>Air date</span>
              <p>${episode.air_date}</p>
            </div>
          </div>

          <h3 class="episode-modal__subtitle">
            Characters
          </h3>

          <span class="episode-modal__label">
            Major Characters
          </span>

          <div class="episode-modal__characters">
            ${charactersMarkup}
          </div>

        </div>
      </div>
    </div>
  `;
};