import { Injectable } from "@angular/core"
import { AbstractControl, ValidatorFn } from "@angular/forms";

@Injectable({
    providedIn: 'root'
})
export class ValidatorService {

    noWhitespaceValidator(): ValidatorFn {
        return (control: AbstractControl): { [key: string]: any } | null => {
            const isWhitespace = control.value.split(" ").join('') !== control.value;
            return isWhitespace ? { 'whitespace': true } : null
        }
    }

    noLeadingTrailingWhitespaceValidator(): ValidatorFn {
        return (control: AbstractControl): { [key: string]: any } | null => {
            const leadingWhitespace = (control.value || '').startsWith(' ')
            const trailingWhitespace = (control.value || '').endsWith(' ')
            if (leadingWhitespace || trailingWhitespace) {
                return { 'leadingTrailingWhitespace': true }
            }
            return null
        }
    }

}