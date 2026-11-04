export const getEpisodeCharactersApi = async (characters) => {
  try {
    const ids = characters.map((url) => url.split("/").pop());

    if (!ids.length) return [];

    const response = await fetch(
      `https://rickandmortyapi.com/api/character/${ids.join(",")}`
    );

    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }

    const result = await response.json();

    return Array.isArray(result) ? result : [result];
  } catch (error) {
    console.error("Error loading episode characters:", error.message);
    return null;
  }
};