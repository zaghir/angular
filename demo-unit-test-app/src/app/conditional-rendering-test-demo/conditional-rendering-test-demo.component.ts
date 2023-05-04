import { Component } from '@angular/core';

@Component({
  selector: 'app-conditional-rendering-test-demo',
  templateUrl: './conditional-rendering-test-demo.component.html',
  styleUrls: ['./conditional-rendering-test-demo.component.css']
})
export class ConditionalRenderingTestDemoComponent {

  age = 20 ;

  getdateFromTS(){
    return this.age > 18;
  }

}
