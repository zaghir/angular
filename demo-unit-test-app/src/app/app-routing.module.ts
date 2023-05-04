import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InterpolationTestDemoComponent } from './interpolation-test-demo/interpolation-test-demo.component';
import { PropertyBindingTestDemoComponent } from './property-binding-test-demo/property-binding-test-demo.component';
import { ClassBindingTestDemoComponent } from './class-binding-test-demo/class-binding-test-demo.component';
import { AttributeBindingTestDemoComponent } from './attribute-binding-test-demo/attribute-binding-test-demo.component';
import { StyleBindingTestDemoComponent } from './style-binding-test-demo/style-binding-test-demo.component';
import { EventBindingTestDemoComponent } from './event-binding-test-demo/event-binding-test-demo.component';
import { SwitchRenderingTestDemoComponent } from './switch-rendering-test-demo/switch-rendering-test-demo.component';
import { NgforTestDemoComponent } from './ngfor-test-demo/ngfor-test-demo.component';
import { ConditionalRenderingTestDemoComponent } from './conditional-rendering-test-demo/conditional-rendering-test-demo.component';
import { TemplateContextTestDemoComponent } from './template-context-test-demo/template-context-test-demo.component';
import { TwoWayBindingTestDemoComponent } from './two-way-binding-test-demo/two-way-binding-test-demo.component';
import { TemplateDrivenFormsTestDemoComponent } from './template-driven-forms-test-demo/template-driven-forms-test-demo.component';
import { TemplateDrivenFormsAtControllerLevelTestDemoComponent } from './template-driven-forms-at-controller-level-test-demo/template-driven-forms-at-controller-level-test-demo.component';
import { TemplateDrivenFormsValidationTestDemoComponent } from './template-driven-forms-validation-test-demo/template-driven-forms-validation-test-demo.component';
import { ReactiveFormsFormControlTestDemoComponent } from './reactive-forms-form-control-test-demo/reactive-forms-form-control-test-demo.component';
import { ReactiveFormsFormControlSetValidatorsMethodTestDemoComponent } from './reactive-forms-form-control-set-validators-method-test-demo/reactive-forms-form-control-set-validators-method-test-demo.component';
import { ReactiveFormsFormControlClearValidatorsMethodTestDemoComponent } from './reactive-forms-form-control-clear-validators-method-test-demo/reactive-forms-form-control-clear-validators-method-test-demo.component';
import { RoutesTestDemoComponent } from './routes-test-demo/routes-test-demo.component';
import { ReactiveFormsFormControlValueChangeTestDemoComponent } from './reactive-forms-form-control-value-change-test-demo/reactive-forms-form-control-value-change-test-demo.component';
import { ReactiveFormsFormControlMarkAsTouchedTestDemoComponent } from './reactive-forms-form-control-mark-as-touched-test-demo/reactive-forms-form-control-mark-as-touched-test-demo.component';
import { ReactiveFormsFormControlFormGroupTestDemoComponent } from './reactive-forms-form-control-form-group-test-demo/reactive-forms-form-control-form-group-test-demo.component';
import { ReactiveFormsFormControlFormGroupValidationTestDemoComponent } from './reactive-forms-form-control-form-group-validation-test-demo/reactive-forms-form-control-form-group-validation-test-demo.component';
import { ReactiveFormsFormControlFormGroupSetValueTestDemoComponent } from './reactive-forms-form-control-form-group-set-value-test-demo/reactive-forms-form-control-form-group-set-value-test-demo.component';
import { ReactiveFormsFormControlFormGroupPatchValueTestDemoComponent } from './reactive-forms-form-control-form-group-patch-value-test-demo/reactive-forms-form-control-form-group-patch-value-test-demo.component';
import { ReactiveFormsFormControlFormArraysTestDemoComponent } from './reactive-forms-form-control-form-arrays-test-demo/reactive-forms-form-control-form-arrays-test-demo.component';
import { ReactiveFormsFormControlFormArraysPushMethodTestDemoComponent } from './reactive-forms-form-control-form-arrays-push-method-test-demo/reactive-forms-form-control-form-arrays-push-method-test-demo.component';
import { ReactiveFormsFormControlFormArraysRemoveAtMethodTestDemoComponent } from './reactive-forms-form-control-form-arrays-remove-at-method-test-demo/reactive-forms-form-control-form-arrays-remove-at-method-test-demo.component';
import { ReactiveFormsAddressManagementSystemOneTestDemoComponent } from './reactive-forms-address-management-system-one-test-demo/reactive-forms-address-management-system-one-test-demo.component';

export const routes: Routes = [
  { path:'', redirectTo: '/home', pathMatch: 'full' },
  { path:'interpolation-test-demo', component: InterpolationTestDemoComponent },
  { path:"property-binding-test-demo" , component: PropertyBindingTestDemoComponent},
  { path:"class-binding-test-demo" , component: ClassBindingTestDemoComponent},
  { path:"style-binding-test-demo" , component: StyleBindingTestDemoComponent},
  { path:"attribute-binding-test-demo" , component: AttributeBindingTestDemoComponent},
  { path:"event-binding-test-demo" , component: EventBindingTestDemoComponent},
  { path:"switch-binding-test-demo" , component: SwitchRenderingTestDemoComponent},
  { path:"conditional-rendering-test-demo" , component: ConditionalRenderingTestDemoComponent},
  { path:"ngFor-test-demo" , component: NgforTestDemoComponent},
  { path:"template-context-test-demo" , component: TemplateContextTestDemoComponent},
  { path:"two-wat-binding-test-demo" , component: TwoWayBindingTestDemoComponent},
  { path:"template-driven-forms-test-demo" , component: TemplateDrivenFormsTestDemoComponent},
  { path:"template-driven-forms-at-controller-level-test-demo" , component: TemplateDrivenFormsAtControllerLevelTestDemoComponent},
  { path:"template-driven-forms-validation-test-demo" , component: TemplateDrivenFormsValidationTestDemoComponent},
  { path:"reactive-forms-form-control-test-demo" , component: ReactiveFormsFormControlTestDemoComponent},
  { path:"reactive-forms-form-control-set-validators-method-test-demo" , component: ReactiveFormsFormControlSetValidatorsMethodTestDemoComponent},
  { path:"reactive-forms-form-control-clear-validators-method-test-demo" , component: ReactiveFormsFormControlClearValidatorsMethodTestDemoComponent},
  { path:"reactive-forms-form-control-value-change-test-demo" , component: ReactiveFormsFormControlValueChangeTestDemoComponent},
  { path:"reactive-forms-form-control-mark-as-touched-test-demo" , component: ReactiveFormsFormControlMarkAsTouchedTestDemoComponent},
  { path:"reactive-forms-form-control-form-group-test-demo" , component: ReactiveFormsFormControlFormGroupTestDemoComponent},
  { path:"reactive-forms-form-control-form-group-validation-test-demo" , component: ReactiveFormsFormControlFormGroupValidationTestDemoComponent},
  { path:"reactive-forms-form-control-form-group-set-value-test-demo" , component: ReactiveFormsFormControlFormGroupSetValueTestDemoComponent},
  { path:"reactive-forms-form-control-form-group-patch-value-test-demo" , component: ReactiveFormsFormControlFormGroupPatchValueTestDemoComponent},
  { path:"reactive-forms-form-control-form-arrays-test-demo" , component: ReactiveFormsFormControlFormArraysTestDemoComponent},
  { path:"reactive-forms-form-control-form-arrays-push-method-test-demo" , component: ReactiveFormsFormControlFormArraysPushMethodTestDemoComponent},
  { path:"reactive-forms-form-control-form-arrays-removeAt-method-test-demo" , component: ReactiveFormsFormControlFormArraysRemoveAtMethodTestDemoComponent},
  { path:"reactive-forms-address-management-system-one-test-demo" , component: ReactiveFormsAddressManagementSystemOneTestDemoComponent},

  { path:"routes-test-demo" , component: RoutesTestDemoComponent},
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
