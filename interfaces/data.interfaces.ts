export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}

export interface Cat {
  id: string;
  breeds: [];
  categories: {
    id: number;
    name: string;
  };
  url: string;
  width: number;
  height: number;
}

export interface AppState {
  count: number;
  error?: null | Error | unknown;
  errorCat?: null | Error | unknown;
  lastUpdate: number;
  light: boolean;
  placeholderData: User[] | null;
  thecatapiData: Cat[] | null;
  loading: boolean;
}
