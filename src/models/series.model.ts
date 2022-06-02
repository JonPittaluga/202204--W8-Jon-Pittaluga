export interface iSerieModel {
  id: number;
  name: string;
  creator: string;
  year: number;
  poster: string;
  watched: boolean;
  score: number;
  emmies: number;
}

export class SerieModel implements iSerieModel {
  constructor(
    public id: number,
    public name: string,
    public creator: string,
    public year: number,
    public poster: string,
    public watched: boolean,
    public score: number,
    public emmies: number
  ) {
    this.id = id;
    this.name = name;
    this.creator = creator;
    this.year = year;
    this.poster = poster;
    this.score = score;
    this.emmies = emmies;
  }
}

export enum List {
  watched = 'watched',
  pending = 'pending',
}
