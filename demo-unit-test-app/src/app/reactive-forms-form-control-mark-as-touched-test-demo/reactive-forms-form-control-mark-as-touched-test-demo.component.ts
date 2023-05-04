import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-forms-form-control-mark-as-touched-test-demo',
  templateUrl: './reactive-forms-form-control-mark-as-touched-test-demo.component.html',
  styleUrls: ['./reactive-forms-form-control-mark-as-touched-test-demo.component.css']
})
export class ReactiveFormsFormControlMarkAsTouchedTestDemoComponent {

  textFormControl: FormControl = new FormControl('', [Validators.required]);
  
  submit() {
    if(this.textFormControl.invalid) {
      this.textFormControl.markAsTouched();
    }
  }

}
