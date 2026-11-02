import { renderCharacters } from "./renderCharacters.js";
import { loadMoreCharacters } from "../operation/charactersPage/loadMoreCharacters.js";
import { loadMoreEpisodes } from "../operation/episodesPage/loadMoreEpisodes.js";
import { startMainCharactersEvents } from "../operation/homePage/mainCharacters.js";
import { startCharactersFilteringEvents } from "../operation/charactersPage/charactersFiltering.js";
import { renderEpisodes } from "./episodes/renderEpisodes.js";

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
};

export const renderPage = async () => {
  await renderCharacters();
  await startEvents();
  await renderEpisodes();
};

