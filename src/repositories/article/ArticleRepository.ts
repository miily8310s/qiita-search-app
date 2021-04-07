import type { ArticleItem, ArticleRepositoryInterface, Params } from './types';
import { httpClient } from '../httpClient';

export class ArticleRepository implements ArticleRepositoryInterface {
  async get(params: Params) {
    const { data } = await httpClient.get<ArticleItem[]>('/', { params });
    return data;
  }

  async find(id: string) {
    const { data } = await httpClient.get<ArticleItem>(`/${id}`);
    return data;
  }
}
