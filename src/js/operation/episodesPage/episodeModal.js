import { renderEpisodeModal } from "../../markup/episodes/renderEpisodeModal.js";

export const startEpisodeModalEvents = () => {
  const episodesList = document.querySelector(".episodes__list");
  const modalContainer = document.querySelector(".episode-modal-container");

  if (!episodesList || !modalContainer) return;

  episodesList.addEventListener("click", async (event) => {
    const card = event.target.closest(".episodes__item");

    if (!card) return;

  const episodeId = card.dataset.episodeId.match(/^\d+/)?.[0];

    console.log("Episode ID:", episodeId);

    if (!episodeId) return;

    const isRendered = await renderEpisodeModal(episodeId);

    if (!isRendered) return;

    document.body.classList.add("modal-open");
    modalContainer.classList.add("active");
  });

  modalContainer.addEventListener("click", (event) => {
    if (
      event.target.classList.contains("episode-modal__overlay") ||
      event.target.closest(".episode-modal__close")
    ) {
      modalContainer.classList.remove("active");
      document.body.classList.remove("modal-open");
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      modalContainer.classList.remove("active");
      document.body.classList.remove("modal-open");
    }
  });
};