import { Component } from '@angular/core';
import { FormControl , Validators} from '@angular/forms';

@Component({
  selector: 'app-reactive-forms-form-control-validation-test-demo',
  templateUrl: './reactive-forms-form-control-validation-test-demo.component.html',
  styleUrls: ['./reactive-forms-form-control-validation-test-demo.component.css']
})
export class ReactiveFormsFormControlValidationTestDemoComponent {

  email: FormControl = new FormControl('', [Validators.required, Validators.pattern(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)]);

  password: FormControl = new FormControl('',[Validators.required, Validators.pattern(/(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{5,10}/)]);

  login() {
    console.log(this.email, '*****', this.password);
    return {
      email: this.email,
      password: this.password 
    }
  }

}




