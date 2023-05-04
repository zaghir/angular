import { Component } from '@angular/core';
import { FormControl , Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-forms-form-control-clear-validators-method-test-demo',
  templateUrl: './reactive-forms-form-control-clear-validators-method-test-demo.component.html',
  styleUrls: ['./reactive-forms-form-control-clear-validators-method-test-demo.component.css']
})
export class ReactiveFormsFormControlClearValidatorsMethodTestDemoComponent {

  username: FormControl = new FormControl('', [Validators.required]);

  removeValidations() {
    this.username.clearValidators();
    this.username.updateValueAndValidity();
  }
}
