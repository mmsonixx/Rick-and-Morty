import { episodesData } from "../../markup/episodes/renderEpisodes.js";
import { makeEpisodesList } from "../../markup/episodes/makeEpisodesList.js";

import { filterEpisodes } from "./filterEpisodes.js";
import { searchEpisodes } from "./searchEpisodes.js";

import { renderEmptyState } from "../../markup/renderEmptyState.js";
export let updateEpisodes;

export const startEpisodesFilteringEvents = () => {
  const episodesList = document.querySelector(".episodes__list");
  const searchInput = document.querySelector("#search-episodes");

  const emptyState = document.querySelector(".episodes__empty-state");
const moreBtn = document.querySelector(".moreEpisodes");

  if (!episodesList || !searchInput) return;

  const selects = document.querySelectorAll(
    ".episodes__filtering .select",
  );



  let filters = {
    season: "",
  };

  // Обновление эпизодов

 updateEpisodes = () => {
  let filteredEpisodes = filterEpisodes(filters, episodesData);

  filteredEpisodes = searchEpisodes(searchInput.value, filteredEpisodes);

  episodesList.innerHTML = makeEpisodesList(filteredEpisodes);

  renderEmptyState(emptyState, filteredEpisodes.length === 0);

  if (moreBtn) {
    moreBtn.hidden =
      filteredEpisodes.length === 0 ||
      moreBtn.dataset.hasMore === "false";
  }
};
  // Поиск

  searchInput.addEventListener("input", updateEpisodes);


 // Открытие и закрытие select

selects.forEach((select) => {
  const selected = select.querySelector(".selected");
  const options = select.querySelectorAll(".option");
  const selectedText = select.querySelector(".selected-text");

  selected.addEventListener("click", (event) => {
    event.stopPropagation();

    selects.forEach((item) => {
      if (item !== select) {
        item.classList.remove("active");
      }
    });

    select.classList.toggle("active");
  });

  options.forEach((option) => {
    option.addEventListener("click", (event) => {
      event.stopPropagation();

      selectedText.textContent = option.textContent.trim();
      filters.season = option.dataset.season;

      select.classList.remove("active");

      updateEpisodes();
    });
  });
});
};