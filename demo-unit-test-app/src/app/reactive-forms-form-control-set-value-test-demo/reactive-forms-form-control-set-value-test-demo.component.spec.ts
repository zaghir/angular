import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';

import { ReactiveFormsFormControlSetValueTestDemoComponent } from './reactive-forms-form-control-set-value-test-demo.component';

xdescribe('ReactiveFormsFormControlSetValueTestDemoComponent', () => {
  let componentInstance: ReactiveFormsFormControlSetValueTestDemoComponent;
  let fixture: ComponentFixture<ReactiveFormsFormControlSetValueTestDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReactiveFormsFormControlSetValueTestDemoComponent ],
      imports: [  ReactiveFormsModule ],
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReactiveFormsFormControlSetValueTestDemoComponent);
    componentInstance = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(componentInstance).toBeTruthy();
  });

  it('check the input value change which should change the form control', () => {
    const usernameElement: HTMLInputElement = fixture.debugElement.nativeElement.querySelector('#username');
    usernameElement.value = 'sai@gmail.com';
    usernameElement.dispatchEvent(new Event('input'));
    expect(componentInstance.username.value).toEqual('sai@gmail.com');
    const button: HTMLButtonElement = fixture.debugElement.nativeElement.querySelector('#buttonID');
    button.click();
    expect(componentInstance.username.value).toEqual('dynamic value');
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      const updatedUsername: HTMLInputElement = fixture.debugElement.nativeElement.querySelector('#username');
      expect(updatedUsername.value).toEqual('dynamic value');
    })
  })
});
