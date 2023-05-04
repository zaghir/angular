import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassBindingTestDemoComponent } from './class-binding-test-demo.component';

xdescribe('ClassBindingTestDemoComponent', () => {
  let component: ClassBindingTestDemoComponent;
  let fixture: ComponentFixture<ClassBindingTestDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClassBindingTestDemoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClassBindingTestDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it("ng class with property binding default check " ,(done)=> {
    fixture.detectChanges();
    fixture.whenStable().then((res) => {
      const element :HTMLHeadElement = fixture.debugElement.nativeElement.querySelector("#headColor");
      expect(element.getAttribute('class')).toContain("font-red");
      done();
    })
  })

  it("ng class with property binding change headingColor property check" ,(done)=> {
    component.headingColor ="font-blue";
    fixture.detectChanges();
    fixture.whenStable().then((res) => {
      const element :HTMLHeadElement = fixture.debugElement.nativeElement.querySelector("#headColor");
      expect(element.getAttribute('class')).toContain("font-blue");
      done();
    })
  })

  it(" Ternary class binding check default value should be font-blue" ,(done)=> {
    fixture.detectChanges();
    fixture.whenStable().then((res) => {
      const element :HTMLInputElement = fixture.debugElement.nativeElement.querySelector("#ternary");
      expect(element.getAttribute('class')).toContain("font-blue");
      done();
    })
  })

  it("Ternary class binding check age value should be font-red " ,(done)=> {
    component.age = 25 ;
    fixture.detectChanges();
    fixture.whenStable().then((res) => {
      const element :HTMLInputElement = fixture.debugElement.nativeElement.querySelector("#ternary");
      expect(element.getAttribute('class')).toContain("font-red");
      done();
    })
  })

  it("Check object level class binding by default params", (done)=> {
    fixture.detectChanges();
    fixture.whenStable().then(res => {
      const element :HTMLInputElement = fixture.debugElement.nativeElement.querySelector("#objectTest");
      expect(element.getAttribute("class")).not.toContain("font-red");
      done();
    })
  })

  
  it("Check object level class binding by changing age property", ()=> {
    component.age= 25;
    fixture.detectChanges();
    fixture.whenStable().then(res => {
      const element :HTMLInputElement = fixture.debugElement.nativeElement.querySelector("#objectTest");
      expect(element.getAttribute("class")).toContain("font-red");      
    })
  })

  it("Check array type of class binding by defaut value", ()=> {
    
    fixture.detectChanges();
    fixture.whenStable().then(res => {
      const element :HTMLInputElement = fixture.debugElement.nativeElement.querySelector("#arrayFormat");
      expect(element.getAttribute("class")).toContain("font-blue");
      expect(element.getAttribute("class")).toContain("font-small" );      
    })
  })

  it("Check array type of class binding by changing age value", ()=> {
    component.age= 25;
    fixture.detectChanges();
    fixture.whenStable().then(res => {
      const element :HTMLInputElement = fixture.debugElement.nativeElement.querySelector("#arrayFormat");
      expect(element.getAttribute("class")).toContain("font-red");
      expect(element.getAttribute("class")).toContain("font-large" );      
    })
  })

  it("Class Binding winth property type of binding with default values", ()=> {    
    fixture.detectChanges();
    fixture.whenStable().then(res => {
      const element :HTMLInputElement = fixture.debugElement.nativeElement.querySelector("#propertyBinding");
      expect(element.getAttribute("class")).not.toContain("class.font-red"); 
    })
  })
  
  it("Class Binding winth property type of binding with change age values", ()=> {    
    component.age= 25;
    fixture.detectChanges();
    fixture.whenStable().then(res => {
      const element :HTMLInputElement = fixture.debugElement.nativeElement.querySelector("#propertyBinding");
      expect(element.getAttribute("class")).toContain("class.font-red");        
    })
  })
  


});
