import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-reactive-forms-form-control-test-demo',
  templateUrl: './reactive-forms-form-control-test-demo.component.html',
  styleUrls: ['./reactive-forms-form-control-test-demo.component.css']
})
export class ReactiveFormsFormControlTestDemoComponent {

  username: FormControl= new FormControl('');

}
