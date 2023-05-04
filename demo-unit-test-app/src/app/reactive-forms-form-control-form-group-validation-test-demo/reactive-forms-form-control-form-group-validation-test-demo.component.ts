import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-forms-form-control-form-group-validation-test-demo',
  templateUrl: './reactive-forms-form-control-form-group-validation-test-demo.component.html',
  styleUrls: ['./reactive-forms-form-control-form-group-validation-test-demo.component.css']
})
export class ReactiveFormsFormControlFormGroupValidationTestDemoComponent {

  loginFormGroup: FormGroup;
  constructor() {
    this.loginFormGroup = new FormGroup({
      username: new FormControl('', Validators.compose([Validators.required])),
      password: new FormControl('', Validators.compose([Validators.required]))
    })
  }

  login() {
    console.log(this.loginFormGroup.value);
    console.log(this.loginFormGroup.valid);
  }

  getFormControl(formControlName: string) {
    return this.loginFormGroup.get(formControlName);
  }

}
