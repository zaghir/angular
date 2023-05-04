import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-reactive-forms-form-control-set-value-test-demo',
  templateUrl: './reactive-forms-form-control-set-value-test-demo.component.html',
  styleUrls: ['./reactive-forms-form-control-set-value-test-demo.component.css']
})
export class ReactiveFormsFormControlSetValueTestDemoComponent {

  username: FormControl = new FormControl('');

  changeFormControl() {
    this.username.setValue('dynamic value');
  }
}
