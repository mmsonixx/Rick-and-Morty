export const filterCharacters = (filters, characters) => {
  return characters.filter((character) => {
    const matchesStatus =
      !filters.status || character.status.toLowerCase() === filters.status.toLowerCase();

    const matchesSpecies =
      !filters.species || character.species.toLowerCase() === filters.species.toLowerCase();

    const matchesType =
      !filters.type || character.type.toLowerCase().includes(filters.type.toLowerCase());

    const matchesGender =
      !filters.gender ||
      filters.gender === "all" ||
      character.gender.toLowerCase() === filters.gender.toLowerCase();

    return matchesStatus && matchesSpecies && matchesType && matchesGender;
  });
};