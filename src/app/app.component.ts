import { Component } from '@angular/core';
// import { RouterOutlet } from '@angular/router';
import { MathjaxModule } from 'mathjax-angular';
 

@Component({
  selector: 'app-root',
  // standalone: false,
  // // imports: [RouterOutlet],
  // templateUrl: './app.component.html',
  // styleUrl: './app.component.css'

  template: `<h1>Hello world!</h1>`
})
export class AppComponent {
  title = 'CV';
  content = "$x = {-b \\pm \\sqrt{b^2-4ac} \\over 2a}$";
}
