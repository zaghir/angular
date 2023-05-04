import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

import { TemplateDrivenFormsAtControllerLevelTestDemoComponent } from './template-driven-forms-at-controller-level-test-demo.component';

xdescribe('TemplateDrivenFormsAtControllerLevelTestDemoComponent', () => {
  let component: TemplateDrivenFormsAtControllerLevelTestDemoComponent;
  let fixture: ComponentFixture<TemplateDrivenFormsAtControllerLevelTestDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TemplateDrivenFormsAtControllerLevelTestDemoComponent ],
      imports: [ FormsModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TemplateDrivenFormsAtControllerLevelTestDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it("check the form values un the form with ngmodel controller values",()=>{

    const loginSubmitMock = spyOn(component , "loginSubmit").and.callThrough();

    const usernameElement : HTMLInputElement = fixture.debugElement.nativeElement.querySelector("#usernameId");
    usernameElement.value="usernnameSample";
    usernameElement.dispatchEvent(new Event('input'));

    const passwordElement : HTMLInputElement = fixture.debugElement.nativeElement.querySelector("#passwordId");
    passwordElement.value="passwordSample";
    passwordElement.dispatchEvent(new Event('input'));

    const submitBtnElement : HTMLButtonElement = fixture.debugElement.nativeElement.querySelector("#buttonId");
    submitBtnElement.click();

    fixture.detectChanges();
    expect(component.loginFormObj.username).toEqual("usernnameSample");
    expect(component.loginFormObj.password).toEqual("passwordSample");
    expect(loginSubmitMock).toHaveBeenCalledTimes(1);
  })

  it("update login object in the controller and check html element content" ,()=>{
    component.loginFormObj.username = "mario";
    component.loginFormObj.password = "password123";

    fixture.detectChanges();    
    fixture.whenStable().then(()=> {
      const usernameElement : HTMLInputElement = fixture.debugElement.nativeElement.querySelector("#usernameId");
      const passwordElement : HTMLInputElement = fixture.debugElement.nativeElement.querySelector("#passwordId");    
      expect(usernameElement.value).toEqual("mario");
      expect(passwordElement.value).toEqual("password123");
    })
    

  })
});
