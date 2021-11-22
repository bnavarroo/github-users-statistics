/* eslint-disable camelcase */
import { UserReposType } from '@core/types/api/repos';

export type UserType = {
  login: string;
  avatar_url?: string;
  name: string;
  company?: string;
  blog?: string;
  location?: string;
  bio?: string;
  twitter_username?: string;
  public_repos: number;
  followers: number;
  following: number;
  repos_url?: string;
  repos?: Array<UserReposType>;
};
