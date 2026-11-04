import { makeCharacterModal } from "./makeCharactersModal.js";
import { makeCharacterEpisodesList } from "./makeCharacterEpisodesList.js";

export const renderCharacterModal = async (characterId) => {
  const modalContainer = document.querySelector(".character-modal-container");

  try {
    // Получаем персонажа
    const response = await fetch(
      `https://rickandmortyapi.com/api/character/${characterId}`,
    );

    const character = await response.json();

    if (!response.ok) {
      throw new Error("Character not found");
    }

    // Рендерим модалку
    modalContainer.innerHTML = makeCharacterModal(character);

    // Получаем эпизоды персонажа
    const episodes = await Promise.all(
      character.episode.map(async (url) => {
        const response = await fetch(url);
        return response.json();
      }),
    );

    // Рендерим список эпизодов
    const episodesList = modalContainer.querySelector(
      ".character-modal__episodes",
    );

    episodesList.innerHTML = makeCharacterEpisodesList(episodes);

  } catch (error) {
    console.error("Error rendering character modal:", error);
  }
};