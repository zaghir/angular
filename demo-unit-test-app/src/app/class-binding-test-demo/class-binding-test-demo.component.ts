import { Component } from '@angular/core';

@Component({
  selector: 'app-class-binding-test-demo',
  templateUrl: './class-binding-test-demo.component.html',
  styleUrls: ['./class-binding-test-demo.component.css']
})
export class ClassBindingTestDemoComponent {

  headingColor = "font-red" ;

  age= 18;
  
  constructor(){
    setTimeout( () => {
      this.headingColor = "font-blue";
    }, 5000);
  }

}
