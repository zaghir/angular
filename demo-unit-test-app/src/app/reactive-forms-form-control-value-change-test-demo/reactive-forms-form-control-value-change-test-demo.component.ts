import { Component } from '@angular/core';

import { Form, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-reactive-forms-form-control-value-change-test-demo',
  templateUrl: './reactive-forms-form-control-value-change-test-demo.component.html',
  styleUrls: ['./reactive-forms-form-control-value-change-test-demo.component.css']
})
export class ReactiveFormsFormControlValueChangeTestDemoComponent {

  metersControl: FormControl = new FormControl(null);

  centimeters: number = 0;

  constructor() {
    this.metersControl.valueChanges.subscribe(() => {
      if(this.metersControl.value) {
        this.centimeters = this.metersControl.value * 100;
      } else {
        this.centimeters = 0;
      }
    })
  }
}
