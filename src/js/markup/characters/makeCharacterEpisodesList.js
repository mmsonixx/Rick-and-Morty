export const makeCharacterEpisodesList = (episodes) => {
  const markup = episodes
    .map(
      (episode) => `
        <li class="episode-card">

          <h3 class="episode-card__name">
            ${episode.name}
          </h3>

          <div class="episode-card__info">

            <div>
              <span>Season</span>
              <p>${episode.episode.match(/S(\d+)E/)?.[1] || "?"}</p>
            </div>

            <div>
              <span>Air date</span>
              <p>${episode.air_date}</p>
            </div>

          </div>

        </li>
      `,
    )
    .join("");

  return markup;
};