import SearchArticle from '../pages/SearchArticle.svelte';
import DetailsArticle from '../pages/DetailsArticle.svelte';

export const routes = {
  '/': SearchArticle,
  '/articles/:id': DetailsArticle,
};
