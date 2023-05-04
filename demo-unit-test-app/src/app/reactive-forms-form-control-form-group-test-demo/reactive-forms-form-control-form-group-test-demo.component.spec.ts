import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms'

import { ReactiveFormsFormControlFormGroupTestDemoComponent } from './reactive-forms-form-control-form-group-test-demo.component';

xdescribe('ReactiveFormsFormControlFormGroupTestDemoComponent', () => {
  let component: ReactiveFormsFormControlFormGroupTestDemoComponent;
  let fixture: ComponentFixture<ReactiveFormsFormControlFormGroupTestDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReactiveFormsFormControlFormGroupTestDemoComponent ],
      imports: [ ReactiveFormsModule ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReactiveFormsFormControlFormGroupTestDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('check the form controls inside a form group', () => {
    const email: HTMLInputElement = fixture.debugElement.nativeElement.querySelector('#email');
    const password: HTMLInputElement = fixture.debugElement.nativeElement.querySelector('#password');

    email.value = 'saikumar',
    password.value = '123456',

    email.dispatchEvent(new Event('input'));
    password.dispatchEvent(new Event('input'));

    fixture.detectChanges();
    fixture.whenStable().then(() => {
      expect(component.loginFormGroup.value).toEqual({
        email: 'saikumar',
        passwordReset: '123456'
      })
    })
  })

  
});
