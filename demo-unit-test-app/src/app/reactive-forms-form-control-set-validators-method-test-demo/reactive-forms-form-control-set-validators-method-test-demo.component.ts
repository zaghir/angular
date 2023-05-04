import { Component } from '@angular/core';
import { FormControl , Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-forms-form-control-set-validators-method-test-demo',
  templateUrl: './reactive-forms-form-control-set-validators-method-test-demo.component.html',
  styleUrls: ['./reactive-forms-form-control-set-validators-method-test-demo.component.css']
})
export class ReactiveFormsFormControlSetValidatorsMethodTestDemoComponent {

  username: FormControl = new FormControl('');

  changeValidations() {
    this.username.setValidators([Validators.required]);
    this.username.updateValueAndValidity();
  }

}
