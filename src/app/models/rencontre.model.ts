import { Club } from "./club.model";
import { Journee } from "./journee.model";

export interface Rencontre{
    id: number,
    date: Date,
    scoreDomicile : number,
    scoreVisiteur: number,
    clubDomicile: Club,
    clubVisiteur: Club,
    journee: Journee
    

}