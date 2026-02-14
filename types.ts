
export interface Insight {
  id: string;
  title: string;
  subtitle: string;
  imageUrl: string;
  description?: string;
}

export enum NavTab {
  HOME = 'home',
  DISCOVER = 'discover',
  SAVED = 'saved',
  MENU = 'menu'
}
