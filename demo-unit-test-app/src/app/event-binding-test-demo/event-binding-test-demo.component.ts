import { Component } from '@angular/core';

@Component({
  selector: 'app-event-binding-test-demo',
  templateUrl: './event-binding-test-demo.component.html',
  styleUrls: ['./event-binding-test-demo.component.css']
})
export class EventBindingTestDemoComponent {

  label = "sai";

  buttonClick(){
    this.label = "kumar";
  }

  cononicalEvent(){
    this.label = "SKK";    
    console.log("fn => cononicalEvent ")
  }

  onChangeInput(){
    this.label = "Input value change" ;
  }

  changeLabelOnInput(event : any){
    this.label = event.target.value ;
  }

  outerBoxEmetter(){
    this.label="Outer box emitted";
    console.log("outer box");
  }

  innerBoxEmitter(){
    this.label="Inner box emitted";
    console.log("Inner box");
  }

  keyupEmitter(){
    console.log("inside de key up ");
    this.label="Key up event";
  }

}
