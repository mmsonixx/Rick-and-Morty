export const getCharactersApi = async (page = 1) => {
  try {
    const response = await fetch(
      `https://rickandmortyapi.com/api/character?page=${page}`
    );

    if (!response.ok) {
      throw new Error("Failed to load characters");
    }

    return await response.json();
  } catch (error) {
    console.error(error.message);
    return null;
  }
};