
import { searchCharactersApi } from "../../api/characters/searchCharactersApi.js";
import { searchEpisodesApi } from "../../api/episodes/searchEpisodesApi.js";
import { makeHeroPreview } from "../../markup/homePage/makeHeroPreview.js";

const emptyImage = new URL("../../../img/kisspng-portal-morty-rick.webp", import.meta.url).href;

export const startHeroSearchEvents = () => {
  const searchInput = document.querySelector("#search-movie");
  const heroDefault = document.querySelector("[data-hero-default]");
  const heroResult = document.querySelector("[data-hero-result]");

  if (!searchInput || !heroDefault || !heroResult) return;

  searchInput.addEventListener("input", async () => {
    const searchValue = searchInput.value.trim();

    if (!searchValue) {
      heroDefault.hidden = false;
      heroResult.innerHTML = "";
      return;
    }

    const [characters, episodes] = await Promise.all([
      searchCharactersApi(searchValue),
      searchEpisodesApi(searchValue),
    ]);

    const character = characters?.results?.[0];
    const episode = episodes?.results?.[0];

    if (character || episode) {
      heroDefault.hidden = true;

      heroResult.innerHTML = `
        ${character ? makeHeroPreview(character, "character") : ""}
        ${episode ? makeHeroPreview(episode, "episode") : ""}
      `;
    } else {
      heroDefault.hidden = true;

      heroResult.innerHTML = `
        <div class="empty-state">
          <img
            src="${emptyImage}"
            alt="No results found"
            class="empty-state__img"
          />
          <p>Oops! Try looking for something else...</p>
        </div>
      `;
    }
  });
};
