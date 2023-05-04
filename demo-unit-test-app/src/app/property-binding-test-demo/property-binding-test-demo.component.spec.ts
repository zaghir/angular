import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertyBindingTestDemoComponent } from './property-binding-test-demo.component';

xdescribe('PropertyBindingTestDemoComponent', () => {
  let component: PropertyBindingTestDemoComponent;
  let fixture: ComponentFixture<PropertyBindingTestDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PropertyBindingTestDemoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PropertyBindingTestDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it("Check input default property bindings", ()=> {
    const element :HTMLInputElement = fixture.debugElement.nativeElement.querySelector("#inputField");
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      expect(element.type).toEqual(component.inputType);
      expect(element.placeholder).toEqual(component.inputPlaceholder);
      expect(element.readOnly).toBeTruthy();
    })
  })

  it("Change property binding values and check the element properties", ()=> {
    component.inputType = "text";
    component.inputPlaceholder = "Updated palceholder";
    component.a = 10 ;
    component.b = 20 ;    
    fixture.detectChanges(); 
    fixture.whenStable().then(() => {
      const element :HTMLInputElement = fixture.debugElement.nativeElement.querySelector("#inputField");
      expect(element.type).toEqual('text');
      expect(element.placeholder).toEqual("Updated palceholder");
      expect(element.readOnly).toBeFalsy();
    })
  })

  it("Check for method access using property binding", ()=> {   
    component.inputType= "email"
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      const element :HTMLInputElement = fixture.debugElement.nativeElement.querySelector("#inputMethod");
      expect(element.type).toEqual("email");
      expect(element.type).toEqual(component.getType());      
    })
  })



});
 