import { API_URL, PAGE_LIMITATION } from "constants/const";

export const getImages = (page: number = 1, sorting: string = 'asc') => {
  const start = PAGE_LIMITATION * (page - 1);

  return fetch(`${API_URL}?_start=${start}&_limit=${PAGE_LIMITATION}&_sort=albumId&_order=${sorting}`).then(res => res.json());
};

export const getLatestItem = () => {
  return fetch(`${API_URL}?_start=0&_limit=1&_sort=id&_order=desc`).then(res => res.json());
};