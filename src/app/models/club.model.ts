import { Championnat } from "./championnat.model";

export interface Club {
    id?: number,
    nom: string,
    pays: string,
    nomPresident: string,
    nomStade: string,
    dateCreation: Date,
    championnat: Championnat
}
