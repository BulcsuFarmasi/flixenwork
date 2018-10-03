import { Person } from "./person";
import { Character } from "./charater";

export interface Film {
    id: string;
    title:string;
    premier:Date;
    genre:string[];
    directors: Person[];
    cast:Character[];
}