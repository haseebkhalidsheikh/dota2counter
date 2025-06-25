
export interface Hero {
  id: number;
  name: string;
  primaryAttribute: 'Strength' | 'Agility' | 'Intelligence';
  roles: string[];
  image: string;
  counters: number[]; // Hero IDs that this hero counters
  counteredBy: number[]; // Hero IDs that counter this hero
}

export interface Team {
  heroes: Hero[];
}

export interface GameState {
  myTeam: Hero[];
  enemyTeam: Hero[];
}
