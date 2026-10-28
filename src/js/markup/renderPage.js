import { renderCharacters } from "./renderCharacters.js";
import { loadMoreCharacters } from "../operation/charactersPage/loadMoreCharacters.js";
import { startMainCharactersEvents } from "../operation/homePage/mainCharacters.js";

const startEvents = async () => {
  const moreBtn = document.querySelector(".moreCharacters");

  if (moreBtn) {
    moreBtn.addEventListener("click", loadMoreCharacters);
  }

  startMainCharactersEvents();
};

export const renderPage = async () => {
  await renderCharacters();
  await startEvents();
};