import { Component } from '@angular/core';

@Component({
  selector: 'app-ngfor-test-demo',
  templateUrl: './ngfor-test-demo.component.html',
  styleUrls: ['./ngfor-test-demo.component.css']
})
export class NgforTestDemoComponent {

  names = ['sai', 'kumar', 'sai'];

  complexArr = [
    {
      id: 1 ,
      name: 'sai'
    },
    {
      id: 2,
      name: 'kumar'
    }
  ];

  addElement(){
    console.log("=======>  addElement ");
    this.complexArr.push({
      id:3,
      name:"skk"
    });
  }

  trackByFunc(index: number , currentValue:  any ){
    return currentValue.id
  }

}
