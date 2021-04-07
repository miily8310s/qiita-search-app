/**
 * Qiita Article Information
 */
export interface ArticleItem {
  rendered_body: string;
  body: string;
  coediting: string;
  comments_count: string;
  created_at: string;
  group: ArticleGroup;
  id: string;
  likes_count: number;
  private: boolean;
  reactions_count: string;
  tags: ArticleTags[];
  title: string;
  updated_at: string;
  url: string;
  user: ArticleUser;
  page_views_count: number;
}

export interface ArticleGroup {
  created_at: string;
  id: number;
  name: string;
  private: boolean;
  updated_at: string;
  url_name: string;
}

export interface ArticleTags {
  name: string;
  versions: string[];
}

export interface ArticleUser {
  description: string;
  facebook_id?: string;
  followees_count: number;
  followers_count: number;
  github_login_name?: string;
  id: string;
  items_count: number;
  linkedin_id?: string;
  location: string;
  name: string;
  organization?: string;
  permanent_id: number;
  profile_image_url: string;
  team_only: boolean;
  twitter_screen_name?: string;
  website_url?: string;
}

/**
 * query parameters
 */
export interface Params {
  query: string;
}

export interface ArticleRepositoryInterface {
  get(params: Params): Promise<ArticleItem[]>;
  find(id: string): Promise<ArticleItem>;
}
