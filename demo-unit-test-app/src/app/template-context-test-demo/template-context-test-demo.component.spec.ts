import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateContextTestDemoComponent } from './template-context-test-demo.component';

xdescribe('TemplateContextTestDemoComponent', () => {
  let component: TemplateContextTestDemoComponent;
  let fixture: ComponentFixture<TemplateContextTestDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TemplateContextTestDemoComponent ],
    })
    .compileComponents();

    fixture = TestBed.createComponent(TemplateContextTestDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it("container with implicit and context" , ()=>{    
    fixture.detectChanges();    
    fixture.whenStable().then(()=> {        
      const element :HTMLButtonElement = fixture.debugElement.nativeElement.querySelector("#paraID_implicitContainerId");
      expect(element).toBeTruthy();
      expect(element.innerHTML).toEqual("inbuilt value");
      const headElement :HTMLButtonElement = fixture.debugElement.nativeElement.querySelector("#headingId_implicitContainerId");
      expect(headElement).toBeTruthy();
      expect(headElement.innerHTML).toEqual("1st container");
    });
  })

  it("container with no impliciti" , ()=>{    
    fixture.detectChanges();    
    fixture.whenStable().then(()=> {        
      const element :HTMLButtonElement = fixture.debugElement.nativeElement.querySelector("#paraID_withoutImpliciti");
      expect(element).toBeTruthy();
      expect(element.innerHTML).toEqual("");
      const headElement :HTMLButtonElement = fixture.debugElement.nativeElement.querySelector("#headingId_withoutImpliciti");
      expect(headElement).toBeTruthy();
      expect(headElement.innerHTML).toEqual("how are you");
    });
  })

  it("div element checke with ngtemplateoutlet" , ()=>{    
    fixture.detectChanges();    
    fixture.whenStable().then(()=> {        
      const divElement :HTMLButtonElement = fixture.debugElement.nativeElement.querySelector("#divElement");
      expect(divElement).toBeTruthy();
      expect(divElement.children.length).toEqual(2);
      expect(divElement.children[0].innerHTML).toEqual("");
      expect(divElement.children[1].innerHTML).toEqual("Some external data");      
    });
  })

  it("ngTemplate outlet from controller with container" , ()=>{    
    fixture.detectChanges();    
    fixture.whenStable().then(()=> {        
      const divElement :HTMLButtonElement = fixture.debugElement.nativeElement.querySelector("#dynamicID");
      expect(divElement).toBeTruthy();
      expect(divElement.children.length).toEqual(2);
      expect(divElement.children[0].innerHTML).toEqual(component.objContext.$implicit);
      expect(divElement.children[1].innerHTML).toEqual(component.objContext.name);      
    });
  })

  it("ngTemplate outlet from controller with ngTemplate" , ()=>{    
    fixture.detectChanges();    
    fixture.whenStable().then(()=> {        
      const divElement :HTMLButtonElement = fixture.debugElement.nativeElement.querySelector("#dynamicIDTemplate");
      expect(divElement).toBeTruthy();
      expect(divElement.children.length).toEqual(2);
      expect(divElement.children[0].innerHTML).toEqual(component.objContext.$implicit);
      expect(divElement.children[1].innerHTML).toEqual(component.objContext.name);      
    });
  })

  it("ngTemplate outlet from controller with ngTemplate by change component instance value" , ()=>{    
    component.objContext = {
      $implicit: "update implicit",
      name: "updated name"
    };
    fixture.detectChanges();    
    fixture.whenStable().then(()=> {        
      const divElement :HTMLButtonElement = fixture.debugElement.nativeElement.querySelector("#dynamicIDTemplate");
      expect(divElement).toBeTruthy();
      expect(divElement.children.length).toEqual(2);
      expect(divElement.children[0].innerHTML).toEqual("update implicit");
      expect(divElement.children[1].innerHTML).toEqual("updated name");
    });
  })

});
 