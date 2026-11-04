export const getEpisodeByIdApi = async (episodeId) => {
  const url = `https://rickandmortyapi.com/api/episode/${episodeId}`;

  try {
    console.log("Request URL:", url);

    const response = await fetch(url);

    console.log("Response status:", response.status);

    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }

    return await response.json();

  } catch (error) {
    console.error("Error loading episode:", error);
    return null;
  }
};