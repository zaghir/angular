import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConditionalRenderingTestDemoComponent } from './conditional-rendering-test-demo.component';

xdescribe('ConditionalRenderingTestDemoComponent', () => {
  let component: ConditionalRenderingTestDemoComponent;
  let fixture: ComponentFixture<ConditionalRenderingTestDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConditionalRenderingTestDemoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConditionalRenderingTestDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it("Checking the simple if conditions" , ()=> {
    fixture.detectChanges();
    fixture.whenStable().then(()=> {
      const element: HTMLDivElement = fixture.debugElement.nativeElement.querySelector("#ageGreaterThan");
      expect(element).not.toBeNull();
    });
  })

  it("Checking the simple if condition is failure" , ()=> {
    component.age = 17 ;
    fixture.detectChanges();
    fixture.whenStable().then(()=> {
      const element: HTMLDivElement = fixture.debugElement.nativeElement.querySelector("#simpleIfFailed");
      expect(element).not.toBeNull(); 
      const element2 :HTMLDivElement = fixture.debugElement.nativeElement.querySelector("#ageGreaterThan");
      expect(element2).toBeNull();

    });
  })

  it("check then clause should be executed" , ()=> {
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      const thenElement :HTMLHeadElement = fixture.debugElement.nativeElement.querySelector("#thenClause");
      const elseElement :HTMLHeadElement = fixture.debugElement.nativeElement.querySelector("#elseClause");
      expect(thenElement).not.toBeNull();
      expect(elseElement).toBeNull();
    })
  })

  it("check else clause should be executed" , ()=> {
    component.age = 17 ;
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      const thenElement :HTMLHeadElement = fixture.debugElement.nativeElement.querySelector("#thenClause");
      const elseElement :HTMLHeadElement = fixture.debugElement.nativeElement.querySelector("#elseClause");
      expect(thenElement).toBeNull();      
      expect(elseElement).not.toBeNull();
    })
  })

  it("ng template then clause age is grater than 18 by default" , ()=> {
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      const thenElement :HTMLHeadElement = fixture.debugElement.nativeElement.querySelector("#templateThenClause");
      const elseElement :HTMLHeadElement = fixture.debugElement.nativeElement.querySelector("#templateElseClause");
      expect(thenElement).not.toBeNull();
      expect(elseElement).toBeNull();
    })
  })

  it("ng template else clause age is grater than 18 by default" , ()=> {
    component.age = 17 ;
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      const thenElement :HTMLHeadElement = fixture.debugElement.nativeElement.querySelector("#templateThenClause");
      const elseElement :HTMLHeadElement = fixture.debugElement.nativeElement.querySelector("#templateElseClause");
      expect(thenElement).toBeNull();
      expect(elseElement).not.toBeNull();
    })
  })

  it("checke the controller method as conditional rendering age is greater than 18" , ()=> {
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      const element :HTMLHeadElement = fixture.debugElement.nativeElement.querySelector("#contollerMethod");
      expect(element).not.toBeNull();
    })
  })

  it("checke the controller method as conditional rendering age is less than 18" , ()=> {
    component.age = 17 ;
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      const element :HTMLHeadElement = fixture.debugElement.nativeElement.querySelector("#contollerMethod");
      expect(element).toBeNull();
    })
  })

  it("check hidden status , when age is greater than 18" , ()=> {
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      const element :HTMLHeadElement = fixture.debugElement.nativeElement.querySelector("#hiddenProperty");
      expect(element.getAttribute("hidden")).not.toBeNull();
    })
  })

  it("check hidden status , when age is less than 18" , ()=> {
    component.age = 17 ;
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      const element :HTMLHeadElement = fixture.debugElement.nativeElement.querySelector("#hiddenProperty");
      expect(element.getAttribute("hidden")).toBeNull();
    })
  })


});
