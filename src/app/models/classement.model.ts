import { Championnat } from "./championnat.model";
import { Club } from "./club.model";

export interface Classement {
    idClub: number,
    nomClub: string;
    matchJoue: number,
    victoire: number,
    nul: number,
    defaite: number,
    butPour: number,
    butContre: number,
    diffBut: number,
    points: number


}