import { getCharactersApi } from "../../api/characters/getCharactersApi.js";
import { makeCharactersList } from "./makeCharactersList.js";

export let charactersData = [];
export let nextPage = 2;

export const addCharacters = (newCharacters) => {
  charactersData.push(...newCharacters);
};

export const setNextPage = (page) => {
  nextPage = page;
};

export const renderCharacters = async () => {
  const charactersList = document.querySelector(".characters__list");
  const moreBtn = document.querySelector(".moreCharacters");

  if (!charactersList) return;

  const result = await getCharactersApi(1);

  if (!result || !Array.isArray(result.results)) return;

  charactersData = result.results;

  // Проверяем, существует ли следующая страница
  setNextPage(result.info.next ? 2 : null);

  charactersList.innerHTML = makeCharactersList(charactersData);

  if (moreBtn) {
    moreBtn.hidden = nextPage === null;
  }
};