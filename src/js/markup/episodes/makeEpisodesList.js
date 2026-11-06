
import { episodesImages } from "./episodesImages.js";
export const makeEpisodesList = (episodes) => {
  const markup = episodes
    .map((episode) => {
      const season = Number(episode.episode.split("E")[0].replace("S", ""));

      return `
        <li class="episodes__item" data-episode-id="${episode.id}">
          <img
            src="${episodesImages[season] || ""}"
            alt="${episode.name}"
            class="episodes__img"
          >

          <h2 class="episodes__title">${episode.name}</h2>

         <div class="episodes__meta">
    <p class="episodes__details">
      <span>Season</span>
      ${season}
    </p>

    <p class="episodes__info">
      <span>Air date</span>
      ${episode.air_date}
    </p>
  </div>
        </li>
      `;
    })
    .join("");

  return markup;
};