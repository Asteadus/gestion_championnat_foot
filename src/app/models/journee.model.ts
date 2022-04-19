import { Championnat } from "./championnat.model";
import { Rencontre } from "./rencontre.model";

export interface Journee {
    id?: number,
    numero: number,
    date_debut : Date;
    date_fin : Date;
    championnat : Championnat;
    rencontres : Rencontre[]

}