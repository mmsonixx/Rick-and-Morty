import { renderCharacterModal } from "../../markup/characters/renderCharactersModal.js";

export const startCharacterModalEvents = () => {
  const charactersList = document.querySelector(".characters__list");
  const modalContainer = document.querySelector(".character-modal-container");

  if (!charactersList || !modalContainer) return;

  charactersList.addEventListener("click", async (event) => {
    const button = event.target.closest(".characters__name");

    if (!button) return;

    await renderCharacterModal(button.dataset.characterId);

    document.body.classList.add("modal-open");
    modalContainer.classList.add("active");
  });

  modalContainer.addEventListener("click", (event) => {
    if (
      event.target.classList.contains("character-modal-container") ||
      event.target.classList.contains("character-modal__overlay") ||
      event.target.closest(".character-modal__close")
    ) {
      modalContainer.classList.remove("active");
      document.body.classList.remove("modal-open");
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      modalContainer.classList.remove("active");
      document.body.classList.remove("modal-open");
    }
  });
};