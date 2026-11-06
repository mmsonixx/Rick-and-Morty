import { getEpisodesApi } from "../../api/episodes/getEpisodesApi.js";

import {
  addEpisodes,
  nextEpisodePage,
  setNextEpisodePage,
} from "../../markup/episodes/renderEpisodes.js";

import { updateEpisodes } from "./episodesFiltering.js";

let isLoading = false;

export const loadMoreEpisodes = async () => {
  const moreBtn = document.querySelector(".moreEpisodes");

  if (isLoading || nextEpisodePage === null) return;

  isLoading = true;

  const pageToLoad = nextEpisodePage;

  if (moreBtn) {
    moreBtn.disabled = true;
    moreBtn.textContent = "Loading...";
  }

  try {
    const result = await getEpisodesApi(pageToLoad);

    if (!result || !Array.isArray(result.results)) {
      throw new Error("Invalid episodes response");
    }

    // Добавляем новые эпизоды без повторов
    addEpisodes(result.results);

    // Получаем следующую страницу из API
    if (result.info?.next) {
      const url = new URL(result.info.next);

      setNextEpisodePage(
        Number(url.searchParams.get("page"))
      );
    } else {
      setNextEpisodePage(null);
    }

    if (moreBtn) {
      moreBtn.dataset.hasMore = String(nextEpisodePage !== null);
    }

    // Обновляем список с учётом поиска и фильтров
    if (typeof updateEpisodes === "function") {
      updateEpisodes();
    }

  } catch (error) {
    console.error("Error loading episodes:", error);
  } finally {
    isLoading = false;

    if (moreBtn) {
      moreBtn.disabled = false;
      moreBtn.textContent = "Load more";
    }
  }
};