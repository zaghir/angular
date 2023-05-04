import { Component } from '@angular/core';
import { FormGroup , FormControl } from '@angular/forms';

@Component({
  selector: 'app-reactive-forms-form-control-form-group-test-demo',
  templateUrl: './reactive-forms-form-control-form-group-test-demo.component.html',
  styleUrls: ['./reactive-forms-form-control-form-group-test-demo.component.css']
})
export class ReactiveFormsFormControlFormGroupTestDemoComponent {

  loginFormGroup: FormGroup;
  constructor() {
    this.loginFormGroup = new FormGroup({
      email: new FormControl(''),
      passwordReset: new FormControl('')
    })
  }

  login() {
    console.log(this.loginFormGroup.value);
  }

}
