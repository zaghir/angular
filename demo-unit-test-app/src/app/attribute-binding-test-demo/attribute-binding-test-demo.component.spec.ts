import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttributeBindingTestDemoComponent } from './attribute-binding-test-demo.component';

xdescribe('AttributeBindingTestDemoComponent', () => {
  let component: AttributeBindingTestDemoComponent;
  let fixture: ComponentFixture<AttributeBindingTestDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AttributeBindingTestDemoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AttributeBindingTestDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it("BUTTON aria label with attribute binding" , () => {
    fixture.detectChanges();
    fixture.whenStable().then(res => {
      const element :HTMLButtonElement = fixture.debugElement.nativeElement.querySelector("#buttonAttr");
      expect(element.getAttribute("aria-label")).toEqual(component.ariaLabelDynamic);
    })
  })

  it("BUTTON aria label with attribute binding updated" , () => {
    component.ariaLabelDynamic = 'Updated';
    fixture.detectChanges();
    fixture.whenStable().then(res => {
      const element :HTMLButtonElement = fixture.debugElement.nativeElement.querySelector("#buttonAttr");
      expect(element.getAttribute("aria-label")).toEqual('Updated');
    })
  })

  it("custom attr check" , () => {    
    const element :HTMLInputElement = fixture.debugElement.nativeElement.querySelector("#customAttr");
    expect(element.value).toEqual('sample');
    expect(element.getAttribute("value")).toEqual('sample');
  })

  it("check data widget or customer widget attr" , () => {    
    fixture.detectChanges();
    fixture.whenStable().then(res => {
      const element :HTMLInputElement = fixture.debugElement.nativeElement.querySelector("#customAttr");
      expect(element.getAttribute("data-widget")).toEqual(component.widgetDynamic);
    })
  })
  
  it("check data widget or customer widget attr update component value" , () => {    
    component.widgetDynamic = "updated dynamic widget";
    fixture.detectChanges();
    fixture.whenStable().then(res => {
      const element  = fixture.debugElement.nativeElement.querySelector("#customAttr");
      expect(element.getAttribute("data-widget")).toEqual("updated dynamic widget");
      expect(element["data-widget"]).toBeUndefined();
      expect(element.dataset.widget).toEqual('updated dynamic widget');
    })
  })
  
  it("Check as property but not the attribute" , () => {        
    fixture.detectChanges();
    fixture.whenStable().then(res => {
      const element  = fixture.debugElement.nativeElement.querySelector("#propertyNotAttr");
      expect(element.getAttribute("value")).toBeNull(); 
      expect(element.value).toEqual(component.inputPropertyValue);
    })
  })

  it("check the rowspan value" , () => {        
    fixture.detectChanges();
    fixture.whenStable().then(res => {
      // const element :HTMLTableElement = fixture.debugElement.nativeElement.querySelector("#rowspancheck"); 
      const element = fixture.debugElement.nativeElement.querySelector("#rowspancheck"); 
      expect(element.getAttribute("rowspan")).toEqual(component.rowSpanCount.toString()); 
      expect(element['rowspan']).toBeUndefined();
    })
  }) 
  


});
