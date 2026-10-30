export const sortCharacters = (query, characters) => {
  const sortedCharacters = [...characters];

  if (query === "name") {
    return sortedCharacters.sort((a, b) =>
      a.name.localeCompare(b.name)
    );
  }

  if (query === "name-reverse") {
    return sortedCharacters.sort((a, b) =>
      b.name.localeCompare(a.name)
    );
  }

  return sortedCharacters;
};