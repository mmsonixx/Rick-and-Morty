import { getCharactersApi } from "../../api/characters/getCharactersApi.js";

import {
  addCharacters,
  nextPage,
  setNextPage,
} from "../../markup/characters/renderCharacters.js";

import { updateCharacters } from "./charactersFiltering.js";

let isLoading = false;

export const loadMoreCharacters = async () => {
  const moreBtn = document.querySelector(".moreCharacters");

  if (!nextPage || isLoading) return;

  isLoading = true;

  if (moreBtn) {
    moreBtn.disabled = true;
  }

  try {
    const currentPage = nextPage;
    const result = await getCharactersApi(currentPage);

    if (!result || !Array.isArray(result.results)) return;

    addCharacters(result.results);

    setNextPage(result.info.next ? currentPage + 1 : null);

    updateCharacters();

    if (moreBtn) {
      moreBtn.hidden = nextPage === null;
    }
  } catch (error) {
    console.error("Error loading characters:", error);
  } finally {
    isLoading = false;

    if (moreBtn) {
      moreBtn.disabled = false;
    }
  }
};