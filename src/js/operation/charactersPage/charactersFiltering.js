import {
  charactersData,
  nextPage,
} from "../../markup/characters/renderCharacters.js";

import { makeCharactersList } from "../../markup/characters/makeCharactersList.js";

import { filterCharacters } from "./filterCharacters.js";
import { searchCharacters } from "./searchCharacters.js";

import { renderEmptyState } from "../../markup/renderEmptyState.js";

export let updateCharacters;

export const startCharactersFilteringEvents = () => {
  const charactersList = document.querySelector(".characters__list");
  const searchInput = document.querySelector("#search-characters");
  const emptyState = document.querySelector(".characters__empty-state");
  const moreBtn = document.querySelector(".moreCharacters");

  if (!charactersList || !searchInput) return;

  const selects = document.querySelectorAll(".select");

  const statusOptions = document.querySelectorAll(".option[data-status]");
  const speciesOptions = document.querySelectorAll(".option[data-species]");
  const typeOptions = document.querySelectorAll(".option[data-type]");
  const genderOptions = document.querySelectorAll(".option[data-gender]");

  let filters = {
    status: "",
    species: "",
    type: "",
    gender: "",
  };

  updateCharacters = () => {
    let filteredCharacters = filterCharacters(filters, charactersData);

    filteredCharacters = searchCharacters(
      searchInput.value,
      filteredCharacters,
    );

    charactersList.innerHTML = makeCharactersList(filteredCharacters);

    const isEmpty = filteredCharacters.length === 0;

    renderEmptyState(emptyState, isEmpty);

    if (moreBtn) {
      moreBtn.hidden = isEmpty || nextPage === null;
    }
  };

  // Поиск
  searchInput.addEventListener("input", updateCharacters);

  // Фильтрация
  const addFilterEvents = (options, filterName) => {
    options.forEach((option) => {
      option.addEventListener("click", () => {
        filters = {
          status: "",
          species: "",
          type: "",
          gender: "",
        };

        const value = option.dataset[filterName];

        filters[filterName] = value === "all" ? "" : value;

        selects.forEach((select) => {
          const selectedText = select.querySelector(".selected-text");

          if (selectedText) {
            selectedText.textContent =
              selectedText.dataset.defaultText || "All";
          }

          select.classList.remove("active");
        });

        const selectedText = option
          .closest(".select")
          .querySelector(".selected-text");

        selectedText.textContent = option.textContent.trim();

        updateCharacters();
      });
    });
  };

  addFilterEvents(statusOptions, "status");
  addFilterEvents(speciesOptions, "species");
  addFilterEvents(typeOptions, "type");
  addFilterEvents(genderOptions, "gender");

  // Открытие и закрытие select
  selects.forEach((select) => {
    const selected = select.querySelector(".selected");
    const options = select.querySelectorAll(".option");

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
      option.addEventListener("click", () => {
        select.classList.remove("active");
      });
    });
  });

  // Закрытие select при клике вне него
  document.addEventListener("click", (event) => {
    if (!event.target.closest(".select")) {
      selects.forEach((select) => {
        select.classList.remove("active");
      });
    }
  });
};