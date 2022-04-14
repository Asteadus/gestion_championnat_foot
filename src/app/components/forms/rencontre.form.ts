import { AbstractControl, ValidationErrors, Validators as V } from "@angular/forms"

export interface RencontreForm{
    scoreDomicile: number;
    scoreVisiteur: number;
}

export const RENCONTRE_FORM = {
    scoreDomicile:[0,[V.required, V.min(0)]],
    scoreVisiteur:[0,[V.required, V.min(0)]]
}