export interface AllPokemonsViewModel {
  count: number;
  next: string;
  previous: null;
  results: results[];
}

interface results {
  name: string;
  url: string;
}
