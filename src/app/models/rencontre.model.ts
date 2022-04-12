import { Club } from "./club.model";
import { Journee } from "./journee.model";

export interface Rencontre{
    id?: number,
    date: Date,
    score_domicile : number,
    score_visiteur: number,
    club_domicile: Club,
    club_visite: Club,
    journee: Journee
    

}