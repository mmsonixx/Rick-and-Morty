export const searchEpisodesApi = async (name) => {
  try {
    const response = await fetch(
      `https://rickandmortyapi.com/api/episode/?name=${encodeURIComponent(name)}`
    );


    const result = await response.json();

    if (!response.ok) return null;

    return result;
  } catch (error) {
    console.error("Episodes API error:", error);
    return null;
  }
};