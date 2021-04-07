import { ArticleRepository, ArticleRepositoryInterface } from './article';

export const ARTICLE = Symbol('article');

export interface Repositories {
  [ARTICLE]: ArticleRepositoryInterface;
}

export default {
  [ARTICLE]: new ArticleRepository(),
} as Repositories;
