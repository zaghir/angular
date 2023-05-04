import { Component } from '@angular/core';

@Component({
  selector: 'app-template-driven-forms-at-controller-level-test-demo',
  templateUrl: './template-driven-forms-at-controller-level-test-demo.component.html',
  styleUrls: ['./template-driven-forms-at-controller-level-test-demo.component.css']
})
export class TemplateDrivenFormsAtControllerLevelTestDemoComponent {

  loginFormObj = {
    username: "",
    password: ""
  }

  loginSubmit(){
    console.log(this.loginFormObj);
  }


}
