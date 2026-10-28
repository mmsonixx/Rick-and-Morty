import { getCharactersApi } from "../api/characters/getCharactersApi.js";
import { makeCharactersList } from "./makeCharactersList.js";

export const renderCharacters = async () => {
  const charactersList = document.querySelector(".characters__list");

  if (!charactersList) return;

  const result = await getCharactersApi();

  charactersList.innerHTML = makeCharactersList(result.results);
};