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

  if (isLoading || nextPage === null) return;

  isLoading = true;

  const pageToLoad = nextPage;

  if (moreBtn) {
    moreBtn.disabled = true;
    moreBtn.textContent = "Loading...";
  }

  try {
    const result = await getCharactersApi(pageToLoad);

    if (!result || !Array.isArray(result.results)) {
      throw new Error("Invalid characters response");
    }

    console.log("Characters received:", result.results.length);
    console.log("Page loaded:", pageToLoad);

    addCharacters(result.results);

    if (result.info?.next) {
      const url = new URL(result.info.next);
      setNextPage(Number(url.searchParams.get("page")));
    } else {
      setNextPage(null);
    }

    if (typeof updateCharacters === "function") {
      updateCharacters();
    }

    if (moreBtn) {
      moreBtn.hidden = nextPage === null;
    }

  } catch (error) {
    console.error("Error loading characters:", error);
  } finally {
    isLoading = false;

    if (moreBtn) {
      moreBtn.disabled = false;
      moreBtn.textContent = "Load more";
    }
  }
};