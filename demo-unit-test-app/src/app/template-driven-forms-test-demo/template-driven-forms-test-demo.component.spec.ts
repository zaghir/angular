import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

import { TemplateDrivenFormsTestDemoComponent } from './template-driven-forms-test-demo.component';

xdescribe('TemplateDrivenFormsTestDemoComponent', () => {
  let component: TemplateDrivenFormsTestDemoComponent;
  let fixture: ComponentFixture<TemplateDrivenFormsTestDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TemplateDrivenFormsTestDemoComponent ],
      imports: [ FormsModule ]  ,
    })
    .compileComponents();

    fixture = TestBed.createComponent(TemplateDrivenFormsTestDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it("Login from with template driven ", () => {
    const changeEvenMock = spyOn(component, "changeEvent").and.callThrough();
    const loginEvenMock = spyOn(component, "login").and.callThrough();
    const usernameElement: HTMLInputElement = fixture.debugElement.nativeElement.querySelector("#username");
    usernameElement.value = "sampleUserName";
    usernameElement.dispatchEvent(new Event("input"));
    usernameElement.dispatchEvent(new Event("blur"));

    const passwordElement: HTMLInputElement = fixture.debugElement.nativeElement.querySelector("#password");
    passwordElement.value = "samplePassword";
    passwordElement.dispatchEvent(new Event("input"));

    const buttonElement: HTMLButtonElement = fixture.debugElement.nativeElement.querySelector("#submitId");
    buttonElement.click();
    fixture.detectChanges();
    expect(changeEvenMock).toHaveBeenCalledTimes(2);
    expect(loginEvenMock).toHaveBeenCalledTimes(1);
  })

  it("confirm form change" , ()=> {
    const confirmMethodMock = spyOn(component , "confirmMethod").and.callThrough();
    const formDetails = HTMLFormElement = fixture.debugElement.nativeElement.querySelector("#confirmFromId");
    const confirmButton = HTMLButtonElement = fixture.debugElement.nativeElement.querySelector("#confirmButton");
    confirmButton.click();
    fixture.detectChanges();
    expect(confirmMethodMock).toHaveBeenCalledTimes(1);
    expect(formDetails.length).toEqual(3);
    expect(component.confirmValues).toEqual({ somename:""})    
  })

});
