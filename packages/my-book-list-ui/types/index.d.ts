export interface IImage {
  src: string;
  width: number;
  height: number;
}

export interface IBook {
  id: string;
  name: string;
  authors: { id: string; name: string }[];
  annotation: string;
  avatar: IImage;
  genres: { id: string; name: string }[];
  yearOfPublication: number;
  rating: number;
}

export interface IFetchBooks {
  orderBy?: keyof IBook;
  startAt?: number;
  limit?: number;
}
