import { Component } from '@angular/core';

@Component({
  selector: 'app-template-driven-forms-test-demo',
  templateUrl: './template-driven-forms-test-demo.component.html',
  styleUrls: ['./template-driven-forms-test-demo.component.css']
})
export class TemplateDrivenFormsTestDemoComponent {

  confirmValues : any ;
  login(formDetails: any){
    console.log(formDetails);
    console.log(formDetails.value);
    console.log(formDetails.form.controls["username"] , "username");
    console.log(formDetails.form.controls["password"] , "password");
  }

  confirmMethod(confirmValue: any){
    console.log(confirmValue.value);
    this.confirmValues = confirmValue.form.value ;

  }

  changeEvent(confirmValue: any){
    console.log(confirmValue.form.value);
    this.confirmValues = confirmValue.form.value ;
  }



}
