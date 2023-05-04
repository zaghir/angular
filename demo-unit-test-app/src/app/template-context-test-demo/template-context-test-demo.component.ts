import { Component } from '@angular/core';

@Component({
  selector: 'app-template-context-test-demo',
  templateUrl: './template-context-test-demo.component.html',
  styleUrls: ['./template-context-test-demo.component.css']
})
export class TemplateContextTestDemoComponent {

  arr = [ 1,3,4,5];

  converToString(arr: any[]){
    return this.arr.join();
  }

  objContext = {
    name: "From contoller" ,
    $implicit: 'implicit values'
  }


}
