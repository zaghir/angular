import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';

import { ReactiveFormsAddressManagementSystemOneTestDemoComponent } from './reactive-forms-address-management-system-one-test-demo.component';

xdescribe('ReactiveFormsAddressManagementSystemOneTestDemoComponent', () => {
  let componentInstance: ReactiveFormsAddressManagementSystemOneTestDemoComponent;
  let fixture: ComponentFixture<ReactiveFormsAddressManagementSystemOneTestDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReactiveFormsAddressManagementSystemOneTestDemoComponent ],
      imports: [ ReactiveFormsModule ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReactiveFormsAddressManagementSystemOneTestDemoComponent);
    componentInstance = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(componentInstance).toBeTruthy();
  });

  it('value with default object check', () => {
    const elements: HTMLInputElement[] = fixture.debugElement.nativeElement.querySelectorAll('input');
    expect(elements.length).toEqual(10);

    expect(JSON.stringify(componentInstance.obj)).toEqual(JSON.stringify(componentInstance.registerAddress.value));
    expect(componentInstance.addressesAsFormArray.length).toEqual(componentInstance.obj.addresses.length);
    expect(JSON.stringify(componentInstance.addressesAsFormArray.value)).toEqual(JSON.stringify(componentInstance.obj.addresses));
  })

  it('Test: Add address checks', ()=> {
    const addButton: HTMLButtonElement = fixture.debugElement.nativeElement.querySelector('#addAddressId');
    const addAddressSpy = spyOn(componentInstance, 'addAddress').and.callThrough();
    addButton.click();    
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      expect(addAddressSpy).toHaveBeenCalledTimes(1);
      const inputElements: HTMLInputElement[] = fixture.debugElement.nativeElement.querySelectorAll('input');
      expect(inputElements.length).toEqual(14);
      const buttonSubmit: HTMLButtonElement = fixture.debugElement.nativeElement.querySelector('#submitID');
      expect(buttonSubmit.disabled).toBeTruthy();
    })
  })

  it("Test: Remove address feature", () => {
    const removelElement: HTMLButtonElement = fixture.debugElement.nativeElement.querySelector('#remove_address_1');
    // const removeAddressSpy = spyOn(componentInstance, 'removeAddress').withArgs(1).and.callThrough();
    const removeAddressSpy = spyOn(componentInstance, 'removeAddress').and.callThrough();
    removelElement.click();    
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      expect(removeAddressSpy).toHaveBeenCalledTimes(1); 
      expect(componentInstance.addressesAsFormArray.length).toEqual(1);
      const objAddresses = componentInstance.obj.addresses.splice(1, 1);
      expect(JSON.stringify(componentInstance.addressesAsFormArray.value)).toEqual(JSON.stringify(componentInstance.obj.addresses));
    })
  })

  it('Validate email not found', () => {
    const emailElement: HTMLInputElement = fixture.debugElement.nativeElement.querySelector('#emailID');
    emailElement.value = '';
    emailElement.dispatchEvent(new Event('input'));
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      const requiredEmailElement: HTMLParagraphElement = fixture.debugElement.nativeElement.querySelector('#emailRequired');
      expect(requiredEmailElement).not.toBeNull();
      expect(requiredEmailElement.innerHTML).toEqual('This is required');
      expect(componentInstance.registerAddress.get('email')?.value).toEqual('');
      expect(componentInstance.registerAddress.get('email')?.errors).not.toBeNull();
      expect(componentInstance.registerAddress.get('email')?.errors?.['required']).toBeTruthy();
    })
  })

  it('test form array addresses', () => {
    componentInstance.addressesAsFormArray.get('0')?.get('cityName')?.setValue('');
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      expect(componentInstance.registerAddress.invalid).toBeTruthy();
      expect(componentInstance.addressesAsFormArray.get('0')?.get('cityName')?.errors).not.toBeNull();
      expect(componentInstance.addressesAsFormArray.get('0')?.get('cityName')?.errors?.['required']).toBeTruthy();

    })
  })

});
