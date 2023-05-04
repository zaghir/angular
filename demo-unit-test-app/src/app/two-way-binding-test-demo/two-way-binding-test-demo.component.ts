import { Component } from '@angular/core';

@Component({
  selector: 'app-two-way-binding-test-demo',
  templateUrl: './two-way-binding-test-demo.component.html',
  styleUrls: ['./two-way-binding-test-demo.component.css']
})
export class TwoWayBindingTestDemoComponent {

  modelTest = "";
  
  getModelValue(){
    console.log(this.modelTest);
    return this.modelTest;
  }

  setModelValue(){
    this.modelTest = "Updated the model value" ;
  }

}
