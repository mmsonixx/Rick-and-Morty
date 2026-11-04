import { makeEpisodeModal } from "./makeEpisodeModal.js";

import { getEpisodeByIdApi } from "../../api/episodes/getEpisodeByIdApi.js";
import { getEpisodeCharactersApi } from "../../api/episodes/getEpisodeCharactersApi.js";

export const renderEpisodeModal = async (episodeId) => {
  const modalContainer = document.querySelector(".episode-modal-container");

  if (!modalContainer) return false;

  // Получаем информацию об эпизоде
  const episode = await getEpisodeByIdApi(episodeId);

  if (!episode) return false;

  // Получаем персонажей этого эпизода
  const characters = await getEpisodeCharactersApi(episode.characters);

  if (!characters) return false;

  // Создаём HTML модального окна
  modalContainer.innerHTML = makeEpisodeModal(episode, characters);

  return true;
};