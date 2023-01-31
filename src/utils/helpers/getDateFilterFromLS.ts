import { getInitialDateFilter } from './getInitialDateFilter';

export function getDateFilterFromLS() {
  const filtersFromLS = localStorage.getItem('dateFilter');

  if (filtersFromLS) {
    return JSON.parse(filtersFromLS);
  }

  const initialDateFilter = getInitialDateFilter();

  return initialDateFilter;
}
