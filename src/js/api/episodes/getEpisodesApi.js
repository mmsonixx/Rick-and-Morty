export const getEpisodesApi = async (page = 1) => {
  try {
    const response = await fetch(
      `https://rickandmortyapi.com/api/episode?page=${page}`,
    );

    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }

    const result = await response.json();

    return result;
  } catch (error) {
    console.error("Error loading episodes:", error.message);
    return null;
  }
};