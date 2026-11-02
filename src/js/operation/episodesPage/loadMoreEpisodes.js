import { getEpisodesApi } from "../../api/episodes/getEpisodesApi.js";
import { addEpisodes } from "../../markup/episodes/renderEpisodes.js";
import { updateEpisodes } from "./episodesFiltering.js";

let page = 2;

export const loadMoreEpisodes = async () => {
  try {
    const result = await getEpisodesApi(page);

    if (!result || !Array.isArray(result.results)) return;

    addEpisodes(result.results);

    updateEpisodes();

    if (result.info.next === null) {
      document.querySelector(".moreEpisodes").hidden = true;
      return;
    }

    page++;
  } catch (error) {
    console.error("Error loading episodes:", error);
  }
};