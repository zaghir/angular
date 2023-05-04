import { Component } from '@angular/core';

@Component({
  selector: 'app-property-binding-test-demo',
  templateUrl: './property-binding-test-demo.component.html',
  styleUrls: ['./property-binding-test-demo.component.css']
})
export class PropertyBindingTestDemoComponent {

  inputType = "number";
  inputPlaceholder = "Enter your name" ;
  inputReadonly = true ;

  a = 30 ;
  b = 20 ;

  constructor(){

  }

  ngOnInit(): void{

  }


  getType(){
    return this.inputType;
  }

}
