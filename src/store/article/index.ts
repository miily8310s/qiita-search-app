import { writable } from 'svelte/store';
import type { ArticleItem } from '../../repositories/article';

export const articles = writable<ArticleItem[]>([]);
