import { AbstractControl, ValidationErrors } from '@angular/forms';


export class ProductValidators {

    static cannotContainSpace(control: AbstractControl): ValidationErrors | null {
        if ((control.value as string).indexOf(' ') >= 0) {
            return { cannotContainSpace: true };
        }
        return null;
    }
    static shouldBeUnique(control: AbstractControl): ValidationErrors | any {
        // Check if the username is already taken ..
    }
}