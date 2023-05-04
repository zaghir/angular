import { Component } from '@angular/core';
import { FormArray, FormControl } from '@angular/forms';

@Component({
  selector: 'app-reactive-forms-form-control-form-arrays-remove-at-method-test-demo',
  templateUrl: './reactive-forms-form-control-form-arrays-remove-at-method-test-demo.component.html',
  styleUrls: ['./reactive-forms-form-control-form-arrays-remove-at-method-test-demo.component.css']
})
export class ReactiveFormsFormControlFormArraysRemoveAtMethodTestDemoComponent {


  cities: FormArray;

  sampleData:Array<any> = [];

  constructor(){
    this.cities = new FormArray([new FormControl(''), new FormControl('')]);
    this.cities.valueChanges.subscribe((res) => {
      this.sampleData = res;
      console.log('cities => ',res);
    })
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

  removeFormControl(index: number): void {
    this.cities.removeAt(index, {
      emitEvent: true
    });
  }

}
