import { episodesData } from "../../markup/episodes/renderEpisodes.js";
import { makeEpisodesList } from "../../markup/episodes/makeEpisodesList.js";

import { filterEpisodes } from "./filterEpisodes.js";
import { searchEpisodes } from "./searchEpisodes.js";

export let updateEpisodes;

export const startEpisodesFilteringEvents = () => {
  const episodesList = document.querySelector(".episodes__list");
  const searchInput = document.querySelector("#search-episodes");

  if (!episodesList || !searchInput) return;

  const selects = document.querySelectorAll(
    ".episodes__filtering .select",
  );

  const seasonOptions = document.querySelectorAll(
    ".episodes__filtering .option[data-season]",
  );

  let filters = {
    season: "",
  };

  // Обновление эпизодов

  updateEpisodes = () => {
    let filteredEpisodes = filterEpisodes(filters, episodesData);

    filteredEpisodes = searchEpisodes(
      searchInput.value,
      filteredEpisodes,
    );

    episodesList.innerHTML = makeEpisodesList(filteredEpisodes);
  };

  // Поиск

  searchInput.addEventListener("input", updateEpisodes);

  // Фильтрация по сезонам

  seasonOptions.forEach((option) => {
    option.addEventListener("click", () => {
      filters.season = option.dataset.season;

      updateEpisodes();
    });
  });

  // Открытие и закрытие select

  selects.forEach((select) => {
  const selected = select.querySelector(".selected");
  const options = select.querySelectorAll(".option");
  const selectedText = select.querySelector(".selected-text");

  selected.addEventListener("click", () => {
    selects.forEach((item) => {
      if (item !== select) {
        item.classList.remove("active");
      }
    });

    select.classList.toggle("active");
  });

  options.forEach((option) => {
    option.addEventListener("click", () => {
      selectedText.textContent = option.textContent.trim();
      select.classList.remove("active");
    });
  });
});

  // Закрытие при клике вне select

  document.addEventListener("click", (event) => {
    if (!event.target.closest(".episodes__filtering .select")) {
      selects.forEach((select) => {
        select.classList.remove("active");
      });
    }
  });
};