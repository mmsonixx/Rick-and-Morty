export const searchCharactersApi = async (name) => {
  try {
    const response = await fetch(
      `https://rickandmortyapi.com/api/character/?name=${encodeURIComponent(name)}`
    );

    const result = await response.json();

    if (!response.ok) return null;

    return result;
  } catch (error) {
    console.error("Characters API error:", error);
    return null;
  }
};