import { charactersData } from "../../markup/renderCharacters.js";
import { makeCharactersList } from "../../markup/makeCharactersList.js";

import { filterCharacters } from "./filterCharacters.js";
import { searchCharacters } from "./searchCharacters.js";

export const startCharactersFilteringEvents = () => {
    
  const charactersList = document.querySelector(".characters__list");
const searchInput = document.querySelector("#search-characters");
  


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

  // Обновление персонажей

const updateCharacters = () => {
  console.log("Обновление персонажей");

  let filteredCharacters = filterCharacters(filters, charactersData);

  filteredCharacters = searchCharacters(
    searchInput.value,
    filteredCharacters,
  );

  console.log("Найдено:", filteredCharacters.length);

  charactersList.innerHTML = makeCharactersList(filteredCharacters);
};

  // Поиск

searchInput.addEventListener("input", () => {
  console.log("INPUT EVENT WORKS");
  updateCharacters();
});
  // Фильтрация

  const addFilterEvents = (options, filterName) => {
    options.forEach((option) => {
      option.addEventListener("click", () => {
        filters[filterName] = option.dataset[filterName];

        updateCharacters();
      });
    });
  };

  addFilterEvents(statusOptions, "status");
  addFilterEvents(speciesOptions, "species");
  addFilterEvents(typeOptions, "type");
  addFilterEvents(genderOptions, "gender");

  // Открытие и закрытие выпадающих списков

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

    // Выбор значения

    options.forEach((option) => {
      option.addEventListener("click", () => {
        selectedText.textContent = option.textContent.trim();

        select.classList.remove("active");
      });
    });
  });

  // Закрытие при клике за пределами списка

  document.addEventListener("click", (event) => {
    if (!event.target.closest(".select")) {
      selects.forEach((select) => {
        select.classList.remove("active");
      });
    }
  });
};