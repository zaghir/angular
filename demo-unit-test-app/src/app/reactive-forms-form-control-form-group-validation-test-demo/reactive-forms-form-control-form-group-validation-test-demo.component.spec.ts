import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';

import { ReactiveFormsFormControlFormGroupValidationTestDemoComponent } from './reactive-forms-form-control-form-group-validation-test-demo.component';

xdescribe('ReactiveFormsFormControlFormGroupValidationTestDemoComponent', () => {
  let componentInstance: ReactiveFormsFormControlFormGroupValidationTestDemoComponent;
  let fixture: ComponentFixture<ReactiveFormsFormControlFormGroupValidationTestDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReactiveFormsFormControlFormGroupValidationTestDemoComponent ],
      imports: [ ReactiveFormsModule ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReactiveFormsFormControlFormGroupValidationTestDemoComponent);
    componentInstance = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(componentInstance).toBeTruthy();
  });

  it("it username or password is not in required state", () => {
    const usernameElement: HTMLInputElement = fixture.debugElement.nativeElement.querySelector('#username');
    usernameElement.value = 'saikumar';
    usernameElement.dispatchEvent(new Event('input'));

    const passwordElement: HTMLInputElement = fixture.debugElement.nativeElement.querySelector('#password');
    passwordElement.value = '123456';
    passwordElement.dispatchEvent(new Event('input'));

    fixture.detectChanges();
    fixture.whenStable().then(() => {
      const userErrorElements: HTMLDivElement = fixture.debugElement.nativeElement.querySelector('#usernameErrors');
      const passwordErrorElements: HTMLDivElement = fixture.debugElement.nativeElement.querySelector('#passwordErrors');

      expect(userErrorElements).toBeNull();
      expect(passwordErrorElements).toBeNull();

      const btnElement: HTMLButtonElement = fixture.debugElement.nativeElement.querySelector('#button');
      expect(btnElement.disabled).toBeFalsy();
      expect(componentInstance.loginFormGroup.get('username')?.value).toEqual('saikumar');
      expect(componentInstance.loginFormGroup.get('password')?.value).toEqual('123456');
      expect(componentInstance.loginFormGroup.valid).toBeTruthy();
      })
  })

  it("it password is in required state", () => {
    const usernameElement: HTMLInputElement = fixture.debugElement.nativeElement.querySelector('#username');
    usernameElement.value = 'saikumar';
    usernameElement.dispatchEvent(new Event('input'));
    
    const passwordElement: HTMLInputElement = fixture.debugElement.nativeElement.querySelector('#password');
    passwordElement.value = '';
    passwordElement.dispatchEvent(new Event('input'));

    fixture.detectChanges();
    fixture.whenStable().then(() => {
      const userErrorElements: HTMLDivElement = fixture.debugElement.nativeElement.querySelector('#usernameErrors');
      const passwordErrorElements: HTMLDivElement = fixture.debugElement.nativeElement.querySelector('#passwordErrors');
    
      expect(userErrorElements).toBeNull();
      expect(passwordErrorElements).not.toBeNull();
    
      const btnElement: HTMLButtonElement = fixture.debugElement.nativeElement.querySelector('#button');
      expect(btnElement.disabled).toBeTruthy();
      expect(componentInstance.loginFormGroup.get('username')?.value).toEqual('saikumar');
      expect(componentInstance.loginFormGroup.get('password')?.value).toEqual('');
      expect(componentInstance.loginFormGroup.valid).toBeFalsy();
      })
  })

  it("it username is in required state", () => {
    const usernameElement: HTMLInputElement = fixture.debugElement.nativeElement.querySelector('#username');
    usernameElement.value = '';
    usernameElement.dispatchEvent(new Event('input'));

    const passwordElement: HTMLInputElement = fixture.debugElement.nativeElement.querySelector('#password');
    passwordElement.value = '123456';
    passwordElement.dispatchEvent(new Event('input'));
    
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      const userErrorElements: HTMLDivElement = fixture.debugElement.nativeElement.querySelector('#usernameErrors');
      const passwordErrorElements: HTMLDivElement = fixture.debugElement.nativeElement.querySelector('#passwordErrors');
    
      expect(userErrorElements).not.toBeNull();
      expect(passwordErrorElements).toBeNull();
    
      const btnElement: HTMLButtonElement = fixture.debugElement.nativeElement.querySelector('#button');
      expect(btnElement.disabled).toBeTruthy();
      expect(componentInstance.loginFormGroup.get('username')?.value).toEqual('');
      expect(componentInstance.loginFormGroup.get('password')?.value).toEqual('123456');
      expect(componentInstance.loginFormGroup.valid).toBeFalsy();
    })
  })

  it('check whether ng submit is called or invoked', waitForAsync(() => {
    const usernameElement: HTMLInputElement = fixture.debugElement.nativeElement.querySelector('#username');
    usernameElement.value = 'sai kumar';
    usernameElement.dispatchEvent(new Event('input'));

    const passwordElement: HTMLInputElement = fixture.debugElement.nativeElement.querySelector('#password');
    passwordElement.value = '123456';
    passwordElement.dispatchEvent(new Event('input'));

    fixture.detectChanges();
    fixture.whenStable().then(() => {
      const mockFunction = spyOn(componentInstance, 'login').and.callThrough();
      const buttonElement: HTMLButtonElement = fixture.debugElement.nativeElement.querySelector('#button');
      expect(buttonElement.disabled).toBeFalsy();
      buttonElement.click();
      expect(mockFunction).toHaveBeenCalledTimes(1);
    })
  }))

});
