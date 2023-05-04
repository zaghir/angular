
npm cache clear --force
npm cache verify
npm update npm -g
npm config set registry http://registry.npmjs.org/
npm config set strict-ssl false

npm install -g @angular/cli


create project
> ng new demo-unit-test-app

cd demo-unit-test-app



https://blog.ninja-squad.com/2023/01/11/angular-cli-15.1/
http://karma-runner.github.io/6.4/config/configuration-file.html


https://angular.io/guide/build
> ng generate environments


generate karma config by angular 
> ng generate config karma
> ng generate config browserslist
> ng generate interceptor --functional authentication

run test
> ng test

http://localhost:9876/

   or 
> npm run test 


> ng g c home
> ng generate component interpolation-test-demo
> ng generate component property-binding-test-demo
> ng generate component class-binding-test-demo
> ng generate component style-binding-test-demo
> ng generate component attribute-binding-test-demo
> ng generate component event-binding-test-demo
> ng generate component conditional-rendering-test-demo
> ng generate component switch-rendering-test-demo
> ng generate component ngfor-test-demo
> ng generate component template-context-test-demo
> ng generate component two-way-binding-test-demo
> ng generate component template-driven-forms-test-demo
> ng generate component template-driven-forms-at-controller-level-test-demo
> ng generate component template-driven-forms-validation-test-demo
> ng generate component reactive-forms-form-control-test-demo
> ng generate component reactive-forms-form-control-validation-test-demo
> ng generate component reactive-forms-form-control-set-value-test-demo
> ng generate component reactive-forms-form-control-set-validators-method-test-demo
> ng generate component reactive-forms-form-control-clear-validators-method-test-demo
> ng generate component reactive-forms-form-control-value-change-test-demo
> ng generate component reactive-forms-form-control-mark-as-touched-test-demo
> ng generate component reactive-forms-form-control-form-group-test-demo
> ng generate component reactive-forms-form-control-form-group-validation-test-demo
> ng generate component reactive-forms-form-control-form-group-set-value-test-demo
> ng generate component reactive-forms-form-control-form-group-patch-value-test-demo
> ng generate component reactive-forms-form-control-form-arrays-test-demo
> ng generate component reactive-forms-form-control-form-arrays-push-method-test-demo
> ng generate component reactive-forms-form-control-form-arrays-removeAt-method-test-demo
> ng generate component reactive-forms-address-management-system-one-test-demo
> ng generate component routes-test-demo
> ng generate component httpclient-test-demo
