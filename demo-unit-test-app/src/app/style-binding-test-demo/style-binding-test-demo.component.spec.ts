import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StyleBindingTestDemoComponent } from './style-binding-test-demo.component';
import { style } from '@angular/animations';

xdescribe('StyleBindingTestDemoComponent', () => {
  let component: StyleBindingTestDemoComponent;
  let fixture: ComponentFixture<StyleBindingTestDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StyleBindingTestDemoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StyleBindingTestDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  }); 

  it('Check ternary operator style binding', ()=> {
    fixture.detectChanges();
    fixture.whenStable().then(()=> {
      const element: HTMLHeadElement = fixture.debugElement.nativeElement.querySelector("#ternaryIdCheck");
      expect(element.getAttribute("style")).toContain('color: blue');
    });
  })

  it('Check ternary operator style binding by chnaging age property', ()=> {
    component.age = 30 ; 
    fixture.detectChanges();
    fixture.whenStable().then(()=> {
      const element: HTMLHeadElement = fixture.debugElement.nativeElement.querySelector("#ternaryIdCheck");
      expect(element.getAttribute("style")).toContain('color: red');
    });
  })

  it('Check property binding type of ng style - Default', ()=> {    
    fixture.detectChanges();
    fixture.whenStable().then(()=> {
      const element: HTMLHeadElement = fixture.debugElement.nativeElement.querySelector("#dynamicCheck");
      expect(element.getAttribute("style")).toContain('font-size: 24px');
    });
  })

  it('Check property binding type of ng style - Change font size', ()=> {   
    component.dynamicFontSize = "50px" ;  
    fixture.detectChanges();
    fixture.whenStable().then(()=> {
      const element: HTMLHeadElement = fixture.debugElement.nativeElement.querySelector("#dynamicCheck");
      expect(element.getAttribute("style")).toContain('font-size: 50px');
    });
  })

  it('Check the method style binding', ()=> {   
    fixture.detectChanges();
    fixture.whenStable().then(()=> {
      const element: HTMLHeadElement = fixture.debugElement.nativeElement.querySelector("#styleMethodCheck");
      expect(element.getAttribute("style")).toContain('font-size: 28px');
      expect(element.getAttribute("style")).toContain('color: red');

    });
  })

  it('Check with units and style binding check', ()=> {   
    fixture.detectChanges();
    fixture.whenStable().then(()=> {
      const element: HTMLHeadElement = fixture.debugElement.nativeElement.querySelector("#valueWithUnits");
      expect(element.getAttribute("style")).toContain('font-size: 28px');      
    });
  })

  it('Check without units and style binding check', ()=> {   
    fixture.detectChanges();
    fixture.whenStable().then(()=> {
      const element: HTMLHeadElement = fixture.debugElement.nativeElement.querySelector("#valueWithOutUnits");
      expect(element.getAttribute("style")).toContain('font-size: 5rem');      
    });
  })

  it('Check without units and style binding check - Chnage the property', ()=> {   
    component.dynamicFontSizeWithUnits ='5rem'
    fixture.detectChanges();
    fixture.whenStable().then(()=> {
      const element: HTMLHeadElement = fixture.debugElement.nativeElement.querySelector("#valueWithOutUnits");
      expect(element.getAttribute("style")).toContain('font-size: 5rem');      
    });
  })

  it('Check priority styles', ()=> {      
    fixture.detectChanges();
    fixture.whenStable().then(()=> {
      const element: HTMLHeadElement = fixture.debugElement.nativeElement.querySelector("#priorityCheck");
      expect(element.getAttribute("style")).toContain('color: blue');      
    });
  })
  


});
