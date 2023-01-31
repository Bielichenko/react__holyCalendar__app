/*eslint-disable*/

import { IDateFilter } from "../../types/IDateFilter";

export function setDateFilterToLS (newDateFilter: IDateFilter) {
  localStorage.setItem('dateFilter', JSON.stringify(newDateFilter))
}