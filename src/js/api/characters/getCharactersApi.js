export const getCharactersApi = async (page = 1) => {
  try {
    const response = await fetch(`https://rickandmortyapi.com/api/character?page=${page}`);

    const result = await response.json();

    return result;
  } catch (error) {
    console.log(error.message);
  }
};
