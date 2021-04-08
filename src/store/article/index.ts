import { writable } from 'svelte/store';
import type { ArticleItem } from '../../repositories/article';

const useArticleStore = () => {
  const { subscribe, set, update } = writable<ArticleItem[]>([]);
  const reset = () => set([]);
  const add = (newArticle: ArticleItem[]) =>
    update((articles: ArticleItem[]) => {
      return [...articles, ...newArticle];
    });
  return { subscribe, reset, add };
};

export const articles = useArticleStore();
