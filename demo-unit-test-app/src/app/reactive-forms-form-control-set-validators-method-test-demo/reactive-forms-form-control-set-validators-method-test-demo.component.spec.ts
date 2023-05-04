import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';

import { ReactiveFormsFormControlSetValidatorsMethodTestDemoComponent } from './reactive-forms-form-control-set-validators-method-test-demo.component';

xdescribe('ReactiveFormsFormControlSetValidatorsMethodTestDemoComponent', () => {
  let componentInstance: ReactiveFormsFormControlSetValidatorsMethodTestDemoComponent;
  let fixture: ComponentFixture<ReactiveFormsFormControlSetValidatorsMethodTestDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReactiveFormsFormControlSetValidatorsMethodTestDemoComponent ],
      imports: [ ReactiveFormsModule ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReactiveFormsFormControlSetValidatorsMethodTestDemoComponent);
    componentInstance = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(componentInstance).toBeTruthy();
  });

  it('checking the whole dynamic updation of validations of a form control', () => {
    const inputElement: HTMLInputElement = fixture.debugElement.nativeElement.querySelector('#username');
    inputElement.value = '';
    inputElement.dispatchEvent(new Event('input'));

    const errorElement: HTMLDivElement = fixture.debugElement.nativeElement.querySelector('#errorHandler');
    expect(errorElement).toBeNull();
    expect(componentInstance.username.errors).toBeNull();

    const buttonId: HTMLButtonElement = fixture.debugElement.nativeElement.querySelector('#buttonID');
    buttonId.click();
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      const errorElementUpdated: HTMLDivElement = fixture.debugElement.nativeElement.querySelector('#errorHandler');
      expect(errorElementUpdated).toBeDefined();
      expect(errorElementUpdated.children.length).toEqual(1);
      expect(errorElementUpdated.children[0].innerHTML).toEqual("username is required")
    });
  
  })

});
