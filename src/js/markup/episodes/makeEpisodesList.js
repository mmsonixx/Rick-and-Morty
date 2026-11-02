const episodesImages = {
  1: new URL("../../../img/episodes/episode-1.webp", import.meta.url).href,
  2: new URL("../../../img/episodes/episode-2.webp", import.meta.url).href,
  3: new URL("../../../img/episodes/episode-3.webp", import.meta.url).href,
  4: new URL("../../../img/episodes/episode-4.webp", import.meta.url).href,
  5: new URL("../../../img/episodes/episode-5.webp", import.meta.url).href,
  6: new URL("../../../img/episodes/episode-6.webp", import.meta.url).href,
};

export const makeEpisodesList = (episodes) => {
  const markup = episodes
    .map((episode) => {
      const season = Number(episode.episode.split("E")[0].replace("S", ""));

      return `
        <li class="episodes__item">
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