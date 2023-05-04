import { Component } from '@angular/core';

@Component({
  selector: 'app-attribute-binding-test-demo',
  templateUrl: './attribute-binding-test-demo.component.html',
  styleUrls: ['./attribute-binding-test-demo.component.css']
})
export class AttributeBindingTestDemoComponent {

  rowSpanCount = 2 ;
  ariaLabelDynamic = 'CLOSE';
  inputPropertyValue = "Some Property";
  widgetDynamic = "samplewidget"

}
