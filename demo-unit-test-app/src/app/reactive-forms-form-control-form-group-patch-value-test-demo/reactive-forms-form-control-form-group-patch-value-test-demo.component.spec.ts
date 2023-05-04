import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';

import { ReactiveFormsFormControlFormGroupPatchValueTestDemoComponent } from './reactive-forms-form-control-form-group-patch-value-test-demo.component';

xdescribe('ReactiveFormsFormControlFormGroupPatchValueTestDemoComponent', () => {
  let componentInstance: ReactiveFormsFormControlFormGroupPatchValueTestDemoComponent;
  let fixture: ComponentFixture<ReactiveFormsFormControlFormGroupPatchValueTestDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReactiveFormsFormControlFormGroupPatchValueTestDemoComponent ],
      imports: [ ReactiveFormsModule ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReactiveFormsFormControlFormGroupPatchValueTestDemoComponent);
    componentInstance = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(componentInstance).toBeTruthy();
  });

  it("Patch value check", waitForAsync(() => {
    const usernameElement: HTMLInputElement = fixture.debugElement.nativeElement.querySelector('#username');
    usernameElement.value = 'sai123';
    usernameElement.dispatchEvent(new Event("input"));

    const passwordElement: HTMLInputElement = fixture.debugElement.nativeElement.querySelector('#password');
    passwordElement.value = '1234';
    passwordElement.dispatchEvent(new Event("input"));

    fixture.detectChanges();
    fixture.whenStable().then(() => {
      const mockFunction = spyOn(componentInstance, 'resetForm').and.callThrough();
      const btnElement: HTMLButtonElement = fixture.debugElement.nativeElement.querySelector('#resetbtn');
      btnElement.click();
      expect(mockFunction).toHaveBeenCalledTimes(1);
      expect(componentInstance.resetFormGroup.get('username')?.value).toEqual(componentInstance.defaultFormValues.username);
      expect(componentInstance.resetFormGroup.get('password')?.value).toEqual('1234');

    })
  }))

});
