import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing'

import { RoutesTestDemoComponent } from './routes-test-demo.component';
import { routes } from '../app-routing.module';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

xdescribe('RoutesTestDemoComponent', () => {
  let component: RoutesTestDemoComponent;
  let fixture: ComponentFixture<RoutesTestDemoComponent>;
  let router : Router;
  let location: Location

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoutesTestDemoComponent ],
      imports: [ RouterTestingModule.withRoutes(routes) ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RoutesTestDemoComponent);
    component = fixture.componentInstance;
    router = TestBed.inject(Router);
    location = TestBed.inject(Location);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it("Empty url check" , fakeAsync(()=> {
    router.navigate(['/interpolation-test-demo']);
    tick();
    expect(location.path()).toEqual('/interpolation-test-demo');

  }))

  it("Login button click" , fakeAsync(()=> {

    const loginBtn : HTMLButtonElement = fixture.debugElement.nativeElement.querySelector("#login_btn");
    const registerlink : HTMLAnchorElement = fixture.debugElement.nativeElement.querySelector("#register_link");

    loginBtn.click();    
    tick();
    expect(location.path()).toEqual('/property-binding-test-demo');
    location.back();
    expect(location.path()).toEqual('');
    location.forward();
    expect(location.path()).toEqual('/property-binding-test-demo');
    const isInActive = registerlink.classList.contains("active");
    expect(isInActive).toBeFalsy();

    registerlink.click();
    tick();
    expect(location.path()).toEqual('/interpolation-test-demo');
    const isActive = registerlink.classList.contains("active");
    expect(isActive).toBeTruthy();

  }))

  
});
