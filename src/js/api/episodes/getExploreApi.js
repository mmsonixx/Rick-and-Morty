export const getExploreApi = async () => {
  try {
    const response = await fetch(
      "https://rickandmortyapi.com/api/location"
    );

    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Error loading locations:", error.message);
    return null;
  }
};