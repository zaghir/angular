import { Component } from '@angular/core';
import { FormArray, FormControl } from '@angular/forms';

@Component({
  selector: 'app-reactive-forms-form-control-form-arrays-push-method-test-demo',
  templateUrl: './reactive-forms-form-control-form-arrays-push-method-test-demo.component.html',
  styleUrls: ['./reactive-forms-form-control-form-arrays-push-method-test-demo.component.css']
})
export class ReactiveFormsFormControlFormArraysPushMethodTestDemoComponent {

  cities: FormArray;

  constructor(){
    this.cities = new FormArray([new FormControl(''), new FormControl('')]);
  }

  getFormControl(index: number): FormControl{
    return this.cities.controls[index] as FormControl;
  }

  showArrayValues(): void {
    console.log(this.cities.value);
  }

  addFormControl(): void {
    this.cities.push(new FormControl(''));
  }

}
