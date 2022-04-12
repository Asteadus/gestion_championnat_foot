import { Championnat } from "./championnat.model";

export interface Journee {
    id?: number,
    date_debut : Date;
    date_fin : Date;
    championnat : Championnat

}