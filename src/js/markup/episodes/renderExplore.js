import { getExploreApi } from "../../api/episodes/getExploreApi.js";

export const renderExplore = async () => {
  const track = document.querySelector("#exploreTrack");

  if (!track) return;

  const data = await getExploreApi();

  if (!data?.results?.length) return;

  const characterIds = new Set();

  data.results.forEach((location) => {
    location.residents.forEach((resident) => {
      if (characterIds.size < 15) {
        characterIds.add(resident.split("/").pop());
      }
    });
  });

  const ids = [...characterIds];

  if (!ids.length) return;

  try {
    const response = await fetch(
      `https://rickandmortyapi.com/api/character/${ids.join(",")}`
    );

    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }

    const characters = await response.json();

    const charactersArray = Array.isArray(characters)
      ? characters
      : [characters];

    const images = charactersArray
      .map(
        ({ image, name }) => `
          <div class="explore__item">
            <img src="${image}" alt="${name}" loading="lazy">
          </div>
        `
      )
      .join("");

    track.innerHTML = `
      <div class="explore__group">
        ${images}
      </div>

      <div class="explore__group" aria-hidden="true">
        ${images}
      </div>
    `;
  } catch (error) {
    console.error("Error rendering explore:", error.message);
  }
};