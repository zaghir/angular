import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventBindingTestDemoComponent } from './event-binding-test-demo.component';

xdescribe('EventBindingTestDemoComponent', () => {
  let component: EventBindingTestDemoComponent;
  let fixture: ComponentFixture<EventBindingTestDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventBindingTestDemoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EventBindingTestDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it("Test click evenc without conocical  form", ()=> {
    fixture.detectChanges();
    const element: HTMLButtonElement = fixture.debugElement.nativeElement.querySelector("#buttonClickId");
    expect(component.label).toEqual("sai");
    element.click();
    fixture.whenStable().then(res => {      
      expect(component.label).toEqual("kumar");
    })
  })

  it("Cononical format check ", ()=> {
    fixture.detectChanges();
    const element: HTMLButtonElement = fixture.debugElement.nativeElement.querySelector("#cononicalEventId");
    expect(component.label).toEqual("sai");           
    element.click();    
    fixture.whenStable().then((res) => {                
      expect(component.label).toEqual("SKK");
    })
  })

  it("Cononical format check ", ()=> {  
    const element: HTMLButtonElement = fixture.debugElement.nativeElement.querySelector("#cononicalEventId");
    expect(component.label).toEqual("sai");           
    element.click();    
    fixture.detectChanges();
    fixture.whenStable().then((res) => {         
      expect(component.label).toEqual("SKK");      
    })
  })
  
  it("Input default event check" , ()=> {
    fixture.detectChanges();
    const element : HTMLInputElement = fixture.debugElement.nativeElement.querySelector("#inputDefautCheck");
    element.dispatchEvent(new Event('input'));
    fixture.whenStable().then((res) => {         
      expect(component.label).toEqual("Input value change");    
    });    
  })

  it("Check Input event value" , ()=> {
    fixture.detectChanges();
    const element : HTMLInputElement = fixture.debugElement.nativeElement.querySelector("#inputWithEvent");
    element.value = "sample";
    element.dispatchEvent(new Event('input'));
    fixture.whenStable().then((res) => {         
      expect(component.label).toEqual("sample");    
    });    
  })


  it("Check a method call on the outer box click with event buddling" , ()=> {
    fixture.detectChanges();
    const element : HTMLDivElement = fixture.debugElement.nativeElement.querySelector("#outerEmitter");     
    element.click();   
    fixture.whenStable().then((res) => {               
      expect(component.label).toEqual("Outer box emitted");       
    });    
  })

  // it("event bubling" , ()=> {
  //   fixture.detectChanges();
  //   fixture.whenStable().then((res) => {        
  //     const outerBoxEmitterSpyOn  = spyOn<EventBindingTestDemoComponent>(component , "outerBoxEmetter"as never).and.callThrough();
  //     const innerBoxEmitter  = spyOn<EventBindingTestDemoComponent>(component , "innerBoxEmitter"as never).and.callThrough();
  //     const outerElement :HTMLDivElement = fixture.debugElement.nativeElement.querySelector("#outerEmitter")
  //     const innerElement :HTMLDivElement = fixture.debugElement.nativeElement.querySelector("#innerEmitter")
    
  //     innerElement.click();
  //     expect(outerBoxEmitterSpyOn).toHaveBeenCalledTimes(1);
  //     expect(innerBoxEmitter).toHaveBeenCalledTimes(1);
  //     expect(component.label).toEqual("Outer box emitter");
  //   });    
  // })


  


}); 
