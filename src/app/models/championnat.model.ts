import { Club } from "./club.model"

export interface Championnat{
    id?: number,
    nom : string,
    saison : string,
    nbEquipes : number,
    pays : string
    clubs : Club[]

}