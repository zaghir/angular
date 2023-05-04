import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';

import { ReactiveFormsFormControlClearValidatorsMethodTestDemoComponent } from './reactive-forms-form-control-clear-validators-method-test-demo.component';

xdescribe('ReactiveFormsFormControlClearValidatorsMethodTestDemoComponent', () => {
  let component: ReactiveFormsFormControlClearValidatorsMethodTestDemoComponent;
  let fixture: ComponentFixture<ReactiveFormsFormControlClearValidatorsMethodTestDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReactiveFormsFormControlClearValidatorsMethodTestDemoComponent ],
      imports : [ ReactiveFormsModule ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReactiveFormsFormControlClearValidatorsMethodTestDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('check the clear validation scenarios', waitForAsync(() => {
    const usernameElement: HTMLInputElement = fixture.debugElement.nativeElement.querySelector('#usernameId');
    usernameElement.value = '';
    usernameElement.dispatchEvent(new Event('input'));

    fixture.detectChanges();
    fixture.whenStable().then(() => {
      const errorElement: HTMLDivElement = fixture.debugElement.nativeElement.querySelector('#usernameErrors');
      expect(errorElement).not.toBeNull();
      expect(errorElement.children.length).toEqual(1);
      expect(errorElement.children[0].innerHTML).toEqual('Username is required');

      const removeButton: HTMLButtonElement = fixture.debugElement.nativeElement.querySelector('#removeButton');
      removeButton.click();

      fixture.detectChanges();
      fixture.whenStable().then(() => {
        const errorElementUpdated: HTMLDivElement = fixture.debugElement.nativeElement.querySelector('#usernameErrors');
        expect(errorElementUpdated).toBeNull();
      })
    })
  }))

});
