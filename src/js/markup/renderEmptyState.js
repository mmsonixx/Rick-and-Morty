const emptyImage = new URL("../../img/kisspng-portal-morty-rick.webp", import.meta.url).href;
export function renderEmptyState(container, isEmpty) {
  container.innerHTML = "";

  if (!isEmpty) return;

  container.innerHTML = `
    <div class="empty-state">
      <img
        src="${emptyImage}"
        alt="No results found"
        class="empty-state__img"
      >
      <p class="empty-state__text">
        Oops! Try looking for something else...
      </p>
    </div>
  `;
}