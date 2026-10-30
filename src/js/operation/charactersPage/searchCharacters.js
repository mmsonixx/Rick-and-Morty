export const searchCharacters = (query, characters) => {
  return characters.filter((character) =>
    character.name.toLowerCase().includes(query.trim().toLowerCase())
  );
}