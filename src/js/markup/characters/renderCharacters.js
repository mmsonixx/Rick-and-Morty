import { getCharactersApi } from "../../api/characters/getCharactersApi.js";
import { makeCharactersList } from "./makeCharactersList.js";

export let charactersData = [];
export let nextPage = null;

export const setNextPage = (page) => {
  nextPage = page;
};

export const setCharacters = (characters) => {
  charactersData = characters;
};

export const addCharacters = (newCharacters) => {
  const existingIds = new Set(
    charactersData.map((character) => character.id)
  );

  const uniqueCharacters = newCharacters.filter(
    (character) => !existingIds.has(character.id)
  );

  charactersData.push(...uniqueCharacters);
};

export const renderCharacters = async () => {
  const charactersList = document.querySelector(".characters__list");
  const moreBtn = document.querySelector(".moreCharacters");

  if (!charactersList) return;

  try {
    const result = await getCharactersApi(1);

    if (!result || !Array.isArray(result.results)) {
      throw new Error("Invalid characters response");
    }

    setCharacters(result.results);

    if (result.info?.next) {
      const url = new URL(result.info.next);
      setNextPage(Number(url.searchParams.get("page")));
    } else {
      setNextPage(null);
    }

    charactersList.innerHTML = makeCharactersList(charactersData);

    if (moreBtn) {
      moreBtn.hidden = nextPage === null;
    }

  } catch (error) {
    console.error("Error rendering characters:", error);
  }
};