import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';

import { SwitchRenderingTestDemoComponent } from './switch-rendering-test-demo.component';

xdescribe('SwitchRenderingTestDemoComponent', () => {
  let component: SwitchRenderingTestDemoComponent;
  let fixture: ComponentFixture<SwitchRenderingTestDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SwitchRenderingTestDemoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SwitchRenderingTestDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it("Static value inside the ng switch" , ()=> {
    fixture.detectChanges();
    fixture.whenStable().then(()=> {
      const element : HTMLDivElement = fixture.debugElement.nativeElement.querySelector("#switchStatic");
      expect(element.childElementCount).toEqual(1);
      expect(element.children.length).toEqual(1);
      expect(element.children[0].children.length).toEqual(1);
      expect(element.children[0].children[0].tagName.toLowerCase()).toEqual("p");
      expect(element.children[0].children[0].innerHTML).toEqual("Mobiles");
    })
  })

  it("the productType of mobiles ie... default component product value" , ()=> {
    fixture.detectChanges();
    fixture.whenStable().then(()=> {
      const element : HTMLDivElement = fixture.debugElement.nativeElement.querySelector("#dynamicSwitch");
      expect(element.childElementCount).toEqual(1);
      expect(element.children.length).toEqual(1); 
      expect(element.children[0].children.length).toEqual(1);
      expect(element.children[0].children[0].tagName.toLowerCase()).toEqual("p");
      expect(element.children[0].children[0].innerHTML).toEqual("Mobiles");
    })
  })

  it("the productType of cloths ie... default component product value" , ()=> {
    component.productType ="cloths";
    fixture.detectChanges();
    fixture.whenStable().then(()=> {
      const element : HTMLDivElement = fixture.debugElement.nativeElement.querySelector("#dynamicSwitch");
      expect(element.childElementCount).toEqual(1);
      expect(element.children.length).toEqual(1);
      expect(element.children[0].children.length).toEqual(1);
      expect(element.children[0].children[0].tagName.toLowerCase()).toEqual("p");
      expect(element.children[0].children[0].innerHTML).toEqual("Cloths");
    })
  })

  it("the productType of somthing which is default" , ()=> {
    component.productType ="somevalue";
    fixture.detectChanges();
    fixture.whenStable().then(()=> {
      const element : HTMLDivElement = fixture.debugElement.nativeElement.querySelector("#dynamicSwitch");
      expect(element.childElementCount).toEqual(1);
      expect(element.children.length).toEqual(1);
      expect(element.children[0].children.length).toEqual(1);
      expect(element.children[0].children[0].tagName.toLowerCase()).toEqual("p");
      expect(element.children[0].children[0].innerHTML).toEqual("Computers");
    })
  })



  it("button click change switch case test" , fakeAsync(()=> {
    // https://stackoverflow.com/questions/40093013/unit-testing-click-event-in-angular
    // https://stackoverflow.com/questions/42971537/what-is-the-difference-between-fakeasync-and-async-in-angular-testing
    component.productType ="somevalue";
    fixture.detectChanges();
    fixture.whenStable().then(()=> {
      const buttonSpyOn = spyOn(component , 'changeToChoclates').and.callThrough();
      const buttonElement : HTMLButtonElement = fixture.debugElement.nativeElement.querySelector("#buttonChange");
      buttonElement.click();      
      fixture.detectChanges();
      tick()
      // fixture.whenStable().then(()=> {
        const switchElement : HTMLDivElement = fixture.debugElement.nativeElement.querySelector("#dynamicSwitch");                
        expect(switchElement.childElementCount).toEqual(1);
        expect(switchElement.children.length).toEqual(1);
        expect(switchElement.children[0].children.length).toEqual(1);
        expect(switchElement.children[0].children[0].tagName.toLowerCase()).toEqual("p");        
        expect(switchElement.children[0].children[0].innerHTML).toEqual("Choclates");
        expect(buttonSpyOn).toHaveBeenCalledTimes(1);
      // })
      
    })
  }))

  it("button click change switch case test 2 " ,()=> {    
    component.productType ="somevalue";
    const buttonSpyOn = spyOn(component , 'changeToChoclates').and.callThrough();
    const buttonElement : HTMLButtonElement = fixture.debugElement.nativeElement.querySelector("#buttonChange");
    buttonElement.click();  
    fixture.detectChanges();
    fixture.whenStable().then(()=> {
      const switchElement : HTMLDivElement = fixture.debugElement.nativeElement.querySelector("#dynamicSwitch");              
      expect(switchElement.childElementCount).toEqual(1);
      expect(switchElement.children.length).toEqual(1);
      expect(switchElement.children[0].children.length).toEqual(1);
      expect(switchElement.children[0].children[0].tagName.toLowerCase()).toEqual("p");        
      expect(switchElement.children[0].children[0].innerHTML).toEqual("Choclates");
      expect(buttonSpyOn).toHaveBeenCalledTimes(1);
    })
  })

  it("Check method name switch " ,()=> {    
    fixture.detectChanges();
    fixture.whenStable().then(()=> {
      const switchElement : HTMLDivElement = fixture.debugElement.nativeElement.querySelector("#swithcWithMethod");              
      expect(switchElement.childElementCount).toEqual(1);
      expect(switchElement.children.length).toEqual(1);
      expect(switchElement.children[0].children.length).toEqual(1);
      expect(switchElement.children[0].children[0].tagName.toLowerCase()).toEqual("p");        
      expect(switchElement.children[0].children[0].innerHTML).toEqual("Mobiles");      
    })
  })

  it("Check method name switch when productType is changed" ,()=> {    
    component.productType = "cloths";
    fixture.detectChanges();
    fixture.whenStable().then(()=> {
      const switchElement : HTMLDivElement = fixture.debugElement.nativeElement.querySelector("#swithcWithMethod");              
      expect(switchElement.childElementCount).toEqual(1);
      expect(switchElement.children.length).toEqual(1);
      expect(switchElement.children[0].children.length).toEqual(1);
      expect(switchElement.children[0].children[0].tagName.toLowerCase()).toEqual("p");        
      expect(switchElement.children[0].children[0].innerHTML).toEqual("Cloths");      
    })
  })

  it("Check switch with container" ,()=> {        
    fixture.detectChanges();
    fixture.whenStable().then(()=> {
      const switchElement : HTMLParagraphElement = fixture.debugElement.nativeElement.querySelector("#mobileCase");              
      expect(switchElement.innerHTML).toEqual("Mobiles");      
    })
  })

  it("Check switch with container by changing the product type" ,()=> {      
    component.productType = "cloths";  
    fixture.detectChanges();
    fixture.whenStable().then(()=> {
      const switchElement : HTMLParagraphElement = fixture.debugElement.nativeElement.querySelector("#clothCase");              
      expect(switchElement.innerHTML).toEqual("Cloths");      
    })
  })

});
