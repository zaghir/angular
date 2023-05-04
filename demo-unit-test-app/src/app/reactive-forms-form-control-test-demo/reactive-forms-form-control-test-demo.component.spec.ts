import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ReactiveFormsFormControlTestDemoComponent } from './reactive-forms-form-control-test-demo.component';

xdescribe('ReactiveFormsFormControlTestDemoComponent', () => {
  let component: ReactiveFormsFormControlTestDemoComponent;
  let fixture: ComponentFixture<ReactiveFormsFormControlTestDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReactiveFormsFormControlTestDemoComponent ],
      imports: [   ReactiveFormsModule   ],
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReactiveFormsFormControlTestDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('check for the value change on the form control and the display value', () => {
    const usernameElement: HTMLInputElement = fixture.debugElement.nativeElement.querySelector('#usernameInput');
      usernameElement.value = 'test@gmail.com';
  
      usernameElement.dispatchEvent(new Event('input'));

      fixture.detectChanges();
      fixture.whenStable().then(() => {
        expect(component.username.value).toEqual('test@gmail.com');
        const displayValue: HTMLSpanElement = fixture.debugElement.nativeElement.querySelector('#displayUsernameElement');
        expect(displayValue.innerHTML).toEqual('test@gmail.com');
      })
  })
});
