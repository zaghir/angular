import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';

import { ReactiveFormsFormControlFormArraysRemoveAtMethodTestDemoComponent } from './reactive-forms-form-control-form-arrays-remove-at-method-test-demo.component';

xdescribe('ReactiveFormsFormControlFormArraysRemoveAtMethodTestDemoComponent', () => {
  let component: ReactiveFormsFormControlFormArraysRemoveAtMethodTestDemoComponent;
  let fixture: ComponentFixture<ReactiveFormsFormControlFormArraysRemoveAtMethodTestDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReactiveFormsFormControlFormArraysRemoveAtMethodTestDemoComponent ],
      imports: [ ReactiveFormsModule ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReactiveFormsFormControlFormArraysRemoveAtMethodTestDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Test form arrays with form controls', () => {
    const control1: HTMLInputElement = fixture.debugElement.nativeElement.querySelector('#control_0');
    const control2: HTMLInputElement = fixture.debugElement.nativeElement.querySelector('#control_1');

    control1.value = 'Sample 1';
    control2.value = 'Sample 2';

    control1.dispatchEvent(new Event('input'));
    control2.dispatchEvent(new Event('input'));

    fixture.detectChanges();
    fixture.whenStable().then(() => {
      const cititesFormArrayValues = component.cities.value;
      expect(cititesFormArrayValues[0]).toEqual('Sample 1');
      expect(cititesFormArrayValues[1]).toEqual('Sample 2');
      expect(cititesFormArrayValues).toEqual(['Sample 1', 'Sample 2']);
    })
  })


  it('Form array push event', () => {
    const spyOnBtn = spyOn(component, 'addFormControl').and.callThrough();
    const btn: HTMLButtonElement = fixture.debugElement.nativeElement.querySelector('#addBtn');

    btn.click();
    expect(spyOnBtn).toHaveBeenCalledTimes(1);
    expect(component.cities.controls.length).toEqual(3);

    btn.click();
    expect(spyOnBtn).toHaveBeenCalledTimes(2);
    expect(component.cities.controls.length).toEqual(4);
  })

  it('Form array remove method or event', () => {
    const deleteSpyOn= spyOn(component, 'removeFormControl').and.callThrough();
    expect(component.sampleData.length).toEqual(0);
    const deleteBtn = fixture.debugElement.nativeElement.querySelector('#dltBtn_1');
    deleteBtn.click();
    expect(deleteSpyOn).toHaveBeenCalledTimes(1);
    expect(component.cities.length).toEqual(1);
    expect(component.sampleData.length).toEqual(1);
  })

});
