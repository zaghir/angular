import { Component } from '@angular/core';

@Component({
  selector: 'app-interpolation-test-demo',
  templateUrl: './interpolation-test-demo.component.html',
  styleUrls: ['./interpolation-test-demo.component.css']
})
export class InterpolationTestDemoComponent {

  heading = "Sample interolation";
  income =  3000 ;
  expenditure = 4000 ;

  metadata = {
    typeValue: "password",
    placeholderValue: "Enter Password" ,
    readOnlyValue: false
  };

  getName(){
    return "Toto"
  }

}
