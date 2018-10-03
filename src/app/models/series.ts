import { Film } from "./film";

export interface Series {
    id: string;
    name: string;
    genre: string;
    episodes: Film[]
} 