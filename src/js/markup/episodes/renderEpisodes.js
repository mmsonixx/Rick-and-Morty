import { getEpisodesApi } from "../../api/episodes/getEpisodesApi.js";
import { makeEpisodesList } from "./makeEpisodesList.js";

export let episodesData = [];

export const setEpisodes = (episodes) => {
  episodesData = episodes;
};

export const addEpisodes = (episodes) => {
  episodesData.push(...episodes);
};

export const renderEpisodes = async () => {
  const episodesList = document.querySelector(".episodes__list");

  if (!episodesList) return;

  const result = await getEpisodesApi();

  if (!result || !result.info) return;

  let allEpisodes = [...result.results];

  for (let page = 2; page <= result.info.pages; page++) {
    const nextResult = await getEpisodesApi(page);

    if (!nextResult) continue;

    allEpisodes.push(...nextResult.results);
  }
allEpisodes.sort((a, b) => {
  const seasonA = Number(a.episode.slice(1, 3));
  const seasonB = Number(b.episode.slice(1, 3));

  const episodeA = Number(a.episode.slice(4));
  const episodeB = Number(b.episode.slice(4));

  if (seasonA !== seasonB) {
    return seasonA - seasonB;
  }

  return episodeA - episodeB;
});
  setEpisodes(allEpisodes);

  episodesList.innerHTML = makeEpisodesList(episodesData);
};