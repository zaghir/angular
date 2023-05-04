import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-reactive-forms-form-control-form-group-patch-value-test-demo',
  templateUrl: './reactive-forms-form-control-form-group-patch-value-test-demo.component.html',
  styleUrls: ['./reactive-forms-form-control-form-group-patch-value-test-demo.component.css']
})
export class ReactiveFormsFormControlFormGroupPatchValueTestDemoComponent {
  
  resetFormGroup: FormGroup;

  defaultFormValues = {
    username: 'sai@gmail.com',
    address: 'Hyderabad'
  }
  constructor() {
    this.resetFormGroup = new FormGroup({
      username: new FormControl(''),
      password: new FormControl('')
    })
  }

  resetForm() {
    this.resetFormGroup.patchValue(this.defaultFormValues);
  }

}
