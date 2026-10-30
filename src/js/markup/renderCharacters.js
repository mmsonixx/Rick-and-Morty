import { getCharactersApi } from "../api/characters/getCharactersApi.js";
import { makeCharactersList } from "./makeCharactersList.js";

export let charactersData = [];

export const addCharacters = (newCharacters) => {
  charactersData.push(...newCharacters);
};

export const renderCharacters = async () => {
  const charactersList = document.querySelector(".characters__list");

  if (!charactersList) return;

  const result = await getCharactersApi();

  charactersData = result.results;

  charactersList.innerHTML = makeCharactersList(charactersData);
};