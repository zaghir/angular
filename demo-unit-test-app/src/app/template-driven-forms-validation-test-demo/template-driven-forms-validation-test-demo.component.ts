import { Component } from '@angular/core';

@Component({
  selector: 'app-template-driven-forms-validation-test-demo',
  templateUrl: './template-driven-forms-validation-test-demo.component.html',
  styleUrls: ['./template-driven-forms-validation-test-demo.component.css']
})
export class TemplateDrivenFormsValidationTestDemoComponent {

  registerObj = {
    username: "",
    password: '',
    gender: ''
  };

  emailPattern = new RegExp(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
  passwordPattern = new RegExp(/(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{5,10}/);

  register(){
    console.log(this.registerObj);
  }

}
