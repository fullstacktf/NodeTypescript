export interface Serie {
  id: number;
  name: string;
  category: string;
  seasons: {
    [key: number]: season;
  }
}

export interface season {
  episodes: {
    [key: number]: episode;
  };
}

export interface episode {
  name: string;
  duration: number;
}

export interface seriesDB {
  size: number;
  serie: {
    [key: number]: Serie;
  };
}