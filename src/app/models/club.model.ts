import { Championnat } from "./championnat.model";
import { Rencontre } from "./rencontre.model";

export interface Club {
    id?: number,
    nom: string,
    pays: string,
    nomPresident: string,
    nomStade: string,
    dateCreation: Date,
    championnat: Championnat,
    rencontresDomicile : Rencontre[],
    rencontresVisiteur : Rencontre[]
}
