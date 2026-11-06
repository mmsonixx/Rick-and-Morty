import { renderCharacters } from "./characters/renderCharacters.js";
import { loadMoreCharacters } from "../operation/charactersPage/loadMoreCharacters.js";
import { loadMoreEpisodes } from "../operation/episodesPage/loadMoreEpisodes.js";
import { startMainCharactersEvents } from "../operation/homePage/mainCharacters.js";
import { startCharactersFilteringEvents } from "../operation/charactersPage/charactersFiltering.js";
import { renderEpisodes } from "./episodes/renderEpisodes.js";
import { startEpisodesFilteringEvents } from "../operation/episodesPage/episodesFiltering.js";
import { startCharacterModalEvents } from "../operation/charactersPage/characterModal.js";
import { renderExplore } from "./episodes/renderExplore.js";
import { startEpisodeModalEvents } from "../operation/episodesPage/episodeModal.js";
import { startHeroSearchEvents } from "../operation/homePage/searchHero.js";

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
  startHeroSearchEvents();
  startCharactersFilteringEvents();
  startEpisodesFilteringEvents();
    startCharacterModalEvents();
    startEpisodeModalEvents();
 
};
export const renderPage = async () => {
  await renderCharacters();
  await renderEpisodes();
await  renderExplore();
  await startEvents();
};

