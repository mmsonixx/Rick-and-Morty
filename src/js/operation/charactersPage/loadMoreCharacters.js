import { getCharactersApi } from "../../api/characters/getCharactersApi.js";
import { makeCharactersList } from "../../markup/makeCharactersList.js";
import { addCharacters } from "../../markup/renderCharacters.js";

const charactersList = document.querySelector(".characters__list");
const moreBtn = document.querySelector(".moreCharacters");

let page = 2;

export const loadMoreCharacters = async () => {
  const result = await getCharactersApi(page);

  if (!result || !Array.isArray(result.results)) return;

  addCharacters(result.results);

  charactersList.insertAdjacentHTML(
    "beforeend",
    makeCharactersList(result.results),
  );

  if (result.info.next === null) {
    moreBtn.hidden = true;
    return;
  }

  page++;
};