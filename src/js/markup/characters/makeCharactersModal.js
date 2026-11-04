export const makeCharacterModal = (character) => {
  return `
    <div class="character-modal__overlay">
      <div class="character-modal">

        <button class="character-modal__close" type="button">
          &times;
        </button>

        <div class="character-modal__left">

          <img
            src="${character.image}"
            alt="${character.name}"
            class="character-modal__image"
          >

          <div class="character-modal__details">

            <div class="character-modal__detail">
              <span>Status</span>
              <p>${character.status}</p>
            </div>

            <div class="character-modal__detail">
              <span>Species</span>
              <p>${character.species}</p>
            </div>

            <div class="character-modal__detail">
              <span>Gender</span>
              <p>${character.gender}</p>
            </div>

            <div class="character-modal__detail">
              <span>Origin</span>
              <p${character.origin.name.replace(/\s*\(.*?\)/g, "")}</p>
            </div>

            <div class="character-modal__detail">
              <span>Location</span>
              <p>${character.location.name.replace(/\s*\(.*?\)/g, "")}</p>
            </div>

            <div class="character-modal__detail">
              <span>Type</span>
              <p>${character.type || "Unknown"}</p>
            </div>

          </div>
        </div>

        <div class="character-modal__right">

          <h2 class="character-modal__title">Episodes</h2>

          <ul class="character-modal__episodes"></ul>

        </div>

      </div>
    </div>
  `;
};