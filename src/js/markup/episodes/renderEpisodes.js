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

  setEpisodes(result.results);

  episodesList.innerHTML = makeEpisodesList(episodesData);
};