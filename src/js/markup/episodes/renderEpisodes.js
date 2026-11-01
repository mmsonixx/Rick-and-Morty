import { getEpisodesApi } from "../../api/episodes/getEpisodesApi.js";
import { makeEpisodesList } from "./makeEpisodesList.js";

export let episodesData = [];

export const renderEpisodes = async () => {
  const episodesList = document.querySelector(".episodes__list");

  if (!episodesList) return;

  const result = await getEpisodesApi();

  episodesData = result.results;

  episodesList.innerHTML = makeEpisodesList(episodesData);
};