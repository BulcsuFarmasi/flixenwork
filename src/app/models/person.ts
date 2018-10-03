import { Film } from "./film";

export interface Person {
    name:string
    birthDate:Date;
    directorCredits:Film[];
    actorCredits:Film[]; 
}