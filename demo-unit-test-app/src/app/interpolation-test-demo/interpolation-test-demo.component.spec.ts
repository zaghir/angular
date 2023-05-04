import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterpolationTestDemoComponent } from './interpolation-test-demo.component';

xdescribe('InterpolationTestDemoComponent', () => {
  let component: InterpolationTestDemoComponent;
  let fixture: ComponentFixture<InterpolationTestDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InterpolationTestDemoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InterpolationTestDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it("HEADDING INTERPOLATION" , () => {
    const headingTag :HTMLHeadingElement = fixture.debugElement.nativeElement.querySelector("#sampleInterpolation");
    expect(headingTag).toBeTruthy();
    expect(headingTag.innerHTML).toEqual(component.heading);
    component.heading = "Interpolation updated";
    fixture.detectChanges();
    fixture.whenStable().then(res => {
      const headingTagUpdated: HTMLHeadingElement = fixture.debugElement.nativeElement.querySelector("#sampleInterpolation");
      expect(headingTagUpdated.innerHTML).toEqual("Interpolation updated");
    })
  })

  it("ARITHMETIC INTERPOLATION CHECK", () => {
    component.income = 3000 ;
    component.expenditure = 2000 ;
    fixture.detectChanges();
    fixture.whenStable().then( res => {
      const headingExpenseTag: HTMLHeadingElement = fixture.debugElement.nativeElement.querySelector("#arithmeticCheck");
      expect(headingExpenseTag.innerHTML).toEqual("1000");
    })
  })

  it("Ternary operator check - When income is greated than expenditure" , ()=> {
    component.income = 3000 ;
    component.expenditure = 2000 ; 
    fixture.detectChanges();
    fixture.whenStable().then(res => {
      const ternaryTag: HTMLHeadingElement = fixture.debugElement.nativeElement.querySelector("#ternaryCheck");
      expect(ternaryTag.innerHTML).toEqual("Profit");
    })
  })

  it("Ternary operator check - When income is less than expenditure" , ()=> {
    component.income = 1000 ;
    component.expenditure = 2000 ; 
    fixture.detectChanges();
    fixture.whenStable().then(res => {
      const ternaryTag: HTMLHeadingElement = fixture.debugElement.nativeElement.querySelector("#ternaryCheck");
      expect(ternaryTag.innerHTML).toEqual("Loss");
    })
  })

  it("Check interpolation for input tag", () => {
    const inputElement:HTMLInputElement = fixture.debugElement.nativeElement.querySelector("#inputCheck");

    expect(inputElement.placeholder).toEqual(component.metadata.placeholderValue);
    expect(inputElement.type).toEqual(component.metadata.typeValue);
    expect(inputElement.readOnly).toBeTruthy();

    component.metadata.typeValue= "password";
    component.metadata.readOnlyValue = false ;
    fixture.whenStable().then(res => {      
      const inputElementUpdated :HTMLInputElement = fixture.debugElement.nativeElement.querySelector("#inputCheck");
      console.log("inputElementUpdated.type"+inputElementUpdated.type+"    "+inputElementUpdated);
      expect(inputElementUpdated.type).toEqual("password");
      expect(inputElementUpdated.readOnly).toBeTrue();      
    })
  })

  it("Method interpolation check " , ()=> {
    const methodElement :HTMLHeadingElement = fixture.debugElement.nativeElement.querySelector("#methodCheck");
    expect(methodElement.innerHTML).toEqual(component.getName());
  })




});
