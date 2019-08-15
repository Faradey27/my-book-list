export interface IImage {
  src: string;
  width: number;
  height: number;
}

export interface IBook {
  name: string;
  authors: string[];
  shortDescription: string;
  avatar: IImage;
}
