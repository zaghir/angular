import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement } from '@angular/core';

import { NgforTestDemoComponent } from './ngfor-test-demo.component';
import { By } from '@angular/platform-browser';

xdescribe('NgforTestDemoComponent', () => {
  let component: NgforTestDemoComponent;
  let fixture: ComponentFixture<NgforTestDemoComponent>;
  // https://angular.io/guide/testing-components-basics
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgforTestDemoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgforTestDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it("A sample array Testing" , ()=>{
    fixture.detectChanges();
    fixture.whenStable().then(()=> {
      const element : DebugElement[] = fixture.debugElement.queryAll(By.css(".sampleArray"));
      expect(element.length).toEqual(3);
      element.forEach((obj: DebugElement , index: number) => {
        console.log(" obj.children.length ====> "+obj.children.length)
        expect(obj.children[0].nativeElement.innerHTML).toEqual(component.names[index]);
      })
    })
  })

  it("Testing complex Array" , ()=>{
    fixture.detectChanges();
    fixture.whenStable().then(()=> {
      const elements : DebugElement[] = fixture.debugElement.queryAll(By.css(".complexArrProperties"));      
      expect(elements.length).toEqual(2);
      elements.forEach((obj: DebugElement , index: number) => {
        const  value = `index - ${index} - isFirst ${index === 0 ?true : false } - isLast ${elements.length - 1 === index ? true : false } - isEven ${index % 2 ===0} - isOdd ${index % 2 !==0 }`;        
        expect(obj.children[0].nativeElement.innerHTML).toEqual(value);
      })
    })
  })

  it("Check the container array" , ()=>{
    fixture.detectChanges();
    fixture.whenStable().then(()=> {
      const elements : DebugElement[] = fixture.debugElement.queryAll(By.css(".containerClass"));   
      expect(elements.length).toEqual(2);         
      elements.forEach((obj: DebugElement , index: number) => {      
        const value =  component.complexArr[index].id+" - "+component.complexArr[index].name ; 
        expect(obj.nativeElement.innerHTML).toEqual(value);
      })
    })
  })

  it("temapalte for loop check" , ()=>{
    fixture.detectChanges();
    fixture.whenStable().then(()=> {
      const elements : DebugElement[] = fixture.debugElement.queryAll(By.css(".templateCheck"));   
      expect(elements.length).toEqual(2);         
      elements.forEach((obj: DebugElement , index: number) => {      
        const value = `${component.complexArr[index].name} - isLast ${component.complexArr.length - 1 === index} - index - ${index}` ; 
        expect(obj.nativeElement.innerHTML).toEqual(value);
      })
    })
  })

  it("dynamic changing value" , ()=>{
    const btnElement :HTMLButtonElement = fixture.debugElement.nativeElement.querySelector("#butonAdd");
    btnElement.click();
    fixture.detectChanges();    
    fixture.whenStable().then(()=> {        
      expect(component.complexArr.length).toEqual(3);         
      const elements : DebugElement[] = fixture.debugElement.queryAll(By.css(".templateCheck"));   
      elements.forEach((obj: DebugElement , index: number) => {      
        const value = `${component.complexArr[index].name} - isLast ${component.complexArr.length - 1 === index} - index - ${index}` ; 
        expect(obj.nativeElement.innerHTML).toEqual(value);
      })
    });
  })

});
