import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';

import { ReactiveFormsFormControlFormGroupSetValueTestDemoComponent } from './reactive-forms-form-control-form-group-set-value-test-demo.component';

xdescribe('ReactiveFormsFormControlFormGroupSetValueTestDemoComponent', () => {
  let componentInstance: ReactiveFormsFormControlFormGroupSetValueTestDemoComponent;
  let fixture: ComponentFixture<ReactiveFormsFormControlFormGroupSetValueTestDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReactiveFormsFormControlFormGroupSetValueTestDemoComponent ],
      imports: [ ReactiveFormsModule ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReactiveFormsFormControlFormGroupSetValueTestDemoComponent);
    componentInstance = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(componentInstance).toBeTruthy();
  });


  it("check setValue", waitForAsync(() => {
    const usernameElement: HTMLInputElement = fixture.debugElement.nativeElement.querySelector('#username');
    usernameElement.value = 'sample@gmail.com';
    usernameElement.dispatchEvent(new Event('input'));

    const passwordElement: HTMLInputElement = fixture.debugElement.nativeElement.querySelector('#password');
    passwordElement.value = 'samplePassword';
    passwordElement.dispatchEvent(new Event('input'));

    fixture.detectChanges();
    fixture.whenStable().then(() => {
      expect(componentInstance.resetFormGroup.get('username')?.value).toEqual('sample@gmail.com');
      expect(componentInstance.resetFormGroup.get('password')?.value).toEqual('samplePassword');
      const mockFunction = spyOn(componentInstance, 'resetForm').and.callThrough();
      const btnElement: HTMLButtonElement = fixture.debugElement.nativeElement.querySelector('#resetBtn');
      btnElement.click();
      expect(mockFunction).toHaveBeenCalledTimes(1);
      expect(componentInstance.resetFormGroup.get('username')?.value).toEqual(componentInstance.defaultFormValues.username);
      expect(componentInstance.resetFormGroup.get('password')?.value).toEqual(componentInstance.defaultFormValues.password);
    })
  }))

});
