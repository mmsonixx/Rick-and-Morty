export const searchEpisodes = (query, episodes) => {
  return episodes.filter((episode) =>
    episode.name.toLowerCase().includes(query.trim().toLowerCase()),
  );
};