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

const startEvents = () => {
  const moreBtn = document.querySelector(".moreCharacters");

  moreBtn?.addEventListener("click", loadMoreCharacters);

  const moreBtnEpisodes = document.querySelector(".moreEpisodes");

  moreBtnEpisodes?.addEventListener("click", loadMoreEpisodes);

  startMainCharactersEvents();
  startHeroSearchEvents();
  startCharactersFilteringEvents();
  startEpisodesFilteringEvents();

  startCharacterModalEvents();
  startEpisodeModalEvents();
};

export const renderPage = async () => {
  startEvents();

  await Promise.all([
    renderCharacters(),
    renderEpisodes(),
    renderExplore(),
  ]);
};


