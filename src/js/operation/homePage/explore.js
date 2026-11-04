const API_URL = "https://rickandmortyapi.com/api";

const track = document.querySelector("#exploreTrack");

async function getExploreCharacters() {
  try {
    // Получаем локации
    const response = await fetch(`${API_URL}/location`);
    const data = await response.json();

    const locations = data.results;

    // Собираем ID жителей из разных локаций
    const characterIds = new Set();

    // Берём персонажей по очереди из разных локаций
    for (let i = 0; i < 30; i++) {
      locations.forEach((location) => {
        const resident = location.residents[i];

        if (resident) {
          const id = resident.split("/").pop();
          characterIds.add(id);
        }
      });

      if (characterIds.size >= 15) break;
    }

    const ids = [...characterIds].slice(0, 15);

    if (!ids.length) {
      throw new Error("Characters not found");
    }

    // Получаем информацию о персонажах
    const charactersResponse = await fetch(
      `${API_URL}/character/${ids.join(",")}`
    );

    const characters = await charactersResponse.json();

    renderExploreImages(
      Array.isArray(characters) ? characters : [characters]
    );

  } catch (error) {
    console.error("Explore section error:", error);
  }
}

function renderExploreImages(characters) {
  const images = characters
    .filter((character) => character.image)
    .map((character) => `
      <div class="explore__item">
        <img
          src="${character.image}"
          alt="${character.name}"
          loading="lazy"
        />
      </div>
    `)
    .join("");

  // Дублируем картинки для бесконечной ленты
  track.innerHTML = `
    <div class="explore__group">
      ${images}
    </div>

    <div class="explore__group" aria-hidden="true">
      ${images}
    </div>
  `;
}

getExploreCharacters();