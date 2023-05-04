import { Component } from '@angular/core';

@Component({
  selector: 'app-switch-rendering-test-demo',
  templateUrl: './switch-rendering-test-demo.component.html',
  styleUrls: ['./switch-rendering-test-demo.component.css']
})
export class SwitchRenderingTestDemoComponent {

  productType = "mobiles";

  changeToChoclates(){
    this.productType = "choclates"; 
    
  }

  getProductType(){
    return this.productType ; 
  }

}
