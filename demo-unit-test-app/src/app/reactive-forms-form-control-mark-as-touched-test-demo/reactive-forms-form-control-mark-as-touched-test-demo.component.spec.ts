import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveFormsModule } from '@angular/forms';

import { ReactiveFormsFormControlMarkAsTouchedTestDemoComponent } from './reactive-forms-form-control-mark-as-touched-test-demo.component';

xdescribe('ReactiveFormsFormControlMarkAsTouchedTestDemoComponent', () => {
  let component: ReactiveFormsFormControlMarkAsTouchedTestDemoComponent;
  let fixture: ComponentFixture<ReactiveFormsFormControlMarkAsTouchedTestDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReactiveFormsFormControlMarkAsTouchedTestDemoComponent ],
      imports : [ ReactiveFormsModule ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReactiveFormsFormControlMarkAsTouchedTestDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('check mark as touched and validate the input field', () => {
    const btnElement: HTMLButtonElement = fixture.debugElement.nativeElement.querySelector('#btn');
    const errorElement: HTMLDivElement = fixture.debugElement.nativeElement.querySelector('#errorMessages');
    expect(errorElement).toBeNull();
    btnElement.click();
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      const errorElement: HTMLDivElement = fixture.debugElement.nativeElement.querySelector('#errorMessages');
      expect(errorElement).not.toBeNull();
      expect(errorElement.children.length).toEqual(1);
      expect(errorElement.children[0].innerHTML).toEqual('This field is required');
    })
  })

});
