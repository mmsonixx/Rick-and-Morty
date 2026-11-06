
export const getCharactersApi = async (page = 1) => {
  const response = await fetch(
    `https://rickandmortyapi.com/api/character?page=${page}`
  );

  if (!response.ok) {
    throw new Error(`Failed to load characters: ${response.status}`);
  }

  return await response.json();
};
