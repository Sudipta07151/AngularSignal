import { Injectable } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class FormServicesService {
  constructor(private fb: FormBuilder) {}
  createForm(formControlInputs: any) {
    let formControlInputObject = <any>{};
    formControlInputs.forEach((input: any) => {
      if (!input.required)
        formControlInputObject[input.formControlName] = [input.value];
      else
        formControlInputObject[input.formControlName] = [
          input.value,
          Validators.required,
        ];
    });
    console.log(formControlInputObject);
    return this.fb.group(formControlInputObject);
  }
}
