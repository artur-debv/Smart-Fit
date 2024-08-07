import { fetchApi } from './fetchApi.js';
import { filterAcademy } from './filterAcademy.js';
import { academiesCards } from './academiesCards.js';
import { displayCount } from './count.js';

export const SearchGymss = async (searchValue) => {
  const academies = await fetchApi();
  const academiesFilter = filterAcademy(academies);
  const filteredAcademies = academiesFilter.filter(academy => academy.title.toLowerCase().includes(searchValue));

  displayCount(filteredAcademies);
  academiesCards(filteredAcademies);

  return filteredAcademies.length === 0 ? "Nenhum resultado encontrado" : "";
};