import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ReactiveFormsModule } from '@angular/forms'

import { ReactiveFormsFormControlValueChangeTestDemoComponent } from './reactive-forms-form-control-value-change-test-demo.component';

xdescribe('ReactiveFormsFormControlValueChangeTestDemoComponent', () => {
  let componentInstance: ReactiveFormsFormControlValueChangeTestDemoComponent;
  let fixture: ComponentFixture<ReactiveFormsFormControlValueChangeTestDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReactiveFormsFormControlValueChangeTestDemoComponent ] ,
      imports: [ RouterTestingModule , ReactiveFormsModule ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReactiveFormsFormControlValueChangeTestDemoComponent);
    componentInstance = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(componentInstance).toBeTruthy();
  });

  it('Do not show the element or message when user does not enter a meters value', () =>{
    const inputElement: HTMLInputElement = fixture.debugElement.nativeElement.querySelector('#metersId');
    inputElement.value = '';
    inputElement.dispatchEvent(new Event('input'));
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      const messageElement: HTMLDivElement = fixture.debugElement.nativeElement.querySelector('#message');
      expect(messageElement).toBeNull();
    })
  })

  it('Check when the value of input changes with a valid data', () => {
    const inputElement: HTMLInputElement = fixture.debugElement.nativeElement.querySelector('#metersId');
    inputElement.value = '10';
    inputElement.dispatchEvent(new Event('input'));
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      const messageElement: HTMLDivElement = fixture.debugElement.nativeElement.querySelector('#message');
      expect(messageElement).not.toBeNull();
      expect(messageElement.innerHTML.trim()).toEqual(`${componentInstance.metersControl.value} Meters into ${componentInstance.centimeters} centimeters`)
    })
  })

});
