import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-routes-test-demo',
  templateUrl: './routes-test-demo.component.html',
  styleUrls: ['./routes-test-demo.component.css']
})
export class RoutesTestDemoComponent {
  userId = 1;
  constructor(private router: Router) {

  }
  login() {
    let sampleUserID = 1;
    if(this.userId === sampleUserID) {
      // this.router.navigateByUrl('property-binding-test-demo');
      this.router.navigate(['property-binding-test-demo']);  // dinamic array value
    } else {
      alert('User does not exist');
    }
  }
}
