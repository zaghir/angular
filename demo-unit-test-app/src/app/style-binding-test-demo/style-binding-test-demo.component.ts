import { Component } from '@angular/core';

@Component({
  selector: 'app-style-binding-test-demo',
  templateUrl: './style-binding-test-demo.component.html',
  styleUrls: ['./style-binding-test-demo.component.css']
})
export class StyleBindingTestDemoComponent {

  age = 18 ;
  dynamicFontSize = '24px';
  dynamicFontSizeWithUnits = '28px' ;
  dynamicFontSizeWithoutUnits = '5';

  getStyles(){
    return {
      color: 'red',
      fontSize:'28px'
    };
  }

}
