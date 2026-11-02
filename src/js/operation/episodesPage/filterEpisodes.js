export const filterEpisodes = (filters, episodes) => {
  return episodes.filter((episode) => {
    const season = episode.episode.slice(1, 3);

    const matchesSeason =
      !filters.season || season === filters.season.padStart(2, "0");

    return matchesSeason;
  });
};