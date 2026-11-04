import { renderCharacters } from "./characters/renderCharacters.js";
import { loadMoreCharacters } from "../operation/charactersPage/loadMoreCharacters.js";
import { loadMoreEpisodes } from "../operation/episodesPage/loadMoreEpisodes.js";
import { startMainCharactersEvents } from "../operation/homePage/mainCharacters.js";
import { startCharactersFilteringEvents } from "../operation/charactersPage/charactersFiltering.js";
import { renderEpisodes } from "./episodes/renderEpisodes.js";
import { startEpisodesFilteringEvents } from "../operation/episodesPage/episodesFiltering.js";
import { startCharacterModalEvents } from "../operation/charactersPage/characterModal.js";


const startEvents = async () => {
  const moreBtn = document.querySelector(".moreCharacters");

  if (moreBtn) {
    moreBtn.addEventListener("click", loadMoreCharacters);
  }

  const moreBtnEpisodes = document.querySelector(".moreEpisodes");

  if (moreBtnEpisodes) {
    moreBtnEpisodes.addEventListener("click", loadMoreEpisodes);
  }
  startMainCharactersEvents();
  startCharactersFilteringEvents();
  startEpisodesFilteringEvents();
    startCharacterModalEvents();
 
};
export const renderPage = async () => {
  await renderCharacters();
  await renderEpisodes();
  await startEvents();
};

