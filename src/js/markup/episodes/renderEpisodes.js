import { getEpisodesApi } from "../../api/episodes/getEpisodesApi.js";
import { makeEpisodesList } from "./makeEpisodesList.js";

export let episodesData = [];
export let nextEpisodePage = null;

export const setNextEpisodePage = (page) => {
  nextEpisodePage = page;
};

export const setEpisodes = (episodes) => {
  episodesData = episodes;
};

export const addEpisodes = (episodes) => {
  const existingIds = new Set(
    episodesData.map((episode) => episode.id)
  );

  const uniqueEpisodes = episodes.filter(
    (episode) => !existingIds.has(episode.id)
  );

  episodesData.push(...uniqueEpisodes);
};

export const renderEpisodes = async () => {
  const episodesList = document.querySelector(".episodes__list");
  const moreBtn = document.querySelector(".moreEpisodes");

  if (!episodesList) return;

  try {
    const result = await getEpisodesApi(1);

    if (!result || !Array.isArray(result.results)) {
      throw new Error("Invalid episodes response");
    }

    // Сохраняем только первую страницу
    setEpisodes(result.results);

    // Определяем номер следующей страницы
    if (result.info?.next) {
      const url = new URL(result.info.next);
      setNextEpisodePage(
        Number(url.searchParams.get("page"))
      );
    } else {
      setNextEpisodePage(null);
    }

    episodesList.innerHTML = makeEpisodesList(episodesData);

    if (moreBtn) {
      moreBtn.dataset.hasMore = String(nextEpisodePage !== null);
      moreBtn.hidden = nextEpisodePage === null;
    }

  } catch (error) {
    console.error("Error rendering episodes:", error);
  }
};