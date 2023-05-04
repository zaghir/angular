import { ComponentFixture, ComponentFixtureAutoDetect, TestBed, flushMicrotasks } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { TwoWayBindingTestDemoComponent } from './two-way-binding-test-demo.component';

xdescribe('TwoWayBindingTestDemoComponent', () => {
  let component: TwoWayBindingTestDemoComponent;
  let fixture: ComponentFixture<TwoWayBindingTestDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TwoWayBindingTestDemoComponent ],
      imports: [ FormsModule ]  ,
      providers : [
        { provide: ComponentFixtureAutoDetect, useValue: true }
      ]    
    })
    .compileComponents();

    fixture = TestBed.createComponent(TwoWayBindingTestDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it("update the model value from contoller", ()=> {
    component.modelTest = "update value from controller";
    fixture.detectChanges();
    fixture.whenStable().then(()=> {
      const element: HTMLInputElement = fixture.debugElement.nativeElement.querySelector("#modelId");
      expect(element.value).toEqual("update value from controller");
    });
  })

  it("update input fiel and check model test value", ()=> {    

    const element: HTMLInputElement = fixture.debugElement.nativeElement.querySelector("#modelId");
      element.value = "updated input value" ;
      const dispatchEventResult = element.dispatchEvent(new Event("input")) ;
      console.log("dispatchEventResult ====> "+dispatchEventResult+" || value ===> "+element.value+"  || modelTest ===> "+component.modelTest) ;
      expect(element.value).toEqual(component.modelTest);

    fixture.detectChanges();
    fixture.whenStable().then(()=> {
      const element: HTMLInputElement = fixture.debugElement.nativeElement.querySelector("#modelId");
      element.value = "updated input value" ;
      const dispatchEventResult = element.dispatchEvent(new Event("input")) ;
      console.log("dispatchEventResult ====> "+dispatchEventResult+" || value ===> "+element.value+"  || modelTest ===> "+component.modelTest) ;
      expect(element.value).toEqual(component.modelTest);
      fixture.detectChanges();
      fixture.whenStable().then(() => {        
        const paraElement : HTMLParagraphElement = fixture.debugElement.nativeElement.querySelector("#paraModelId");
        expect(paraElement.innerHTML).toEqual("updated input value");
        expect(paraElement.innerHTML).toEqual(component.modelTest);  
      })      
    });
    
  })


  it("check the values of get model method ", ()=> {        
    const value= "updated value";
      const inputElement: HTMLInputElement = fixture.debugElement.nativeElement.querySelector("#modelId");
      inputElement.value = value ;      
      inputElement.dispatchEvent(new Event("input"));      
      fixture.detectChanges();      ;
      expect(component.modelTest).toEqual("updated value");
      expect(component.getModelValue()).toEqual("updated value");
  })

  it("update the input field and model by click event", ()=> {        
    const value = "Updated the model value" ;
    const btnElement: HTMLButtonElement = fixture.debugElement.nativeElement.querySelector("#setValue");
    btnElement.click();
    expect(component.modelTest).toEqual(value);
    fixture.detectChanges();
    fixture.whenStable().then(()=> {
      const element: HTMLInputElement = fixture.debugElement.nativeElement.querySelector("#modelId");
      expect(element.value).toEqual(value);
      expect(component.getModelValue).toEqual(value);
    });     

  })


});
