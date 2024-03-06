import { Component } from '@angular/core';


@Component({
  selector: 'app-product-list',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css']
})
export class CvComponent {
 
  share() {
    window.alert('The product has been shared!');
  }
}