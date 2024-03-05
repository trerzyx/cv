import { NgModule } from '@angular/core';
import { AppComponent } from './app/app.component';

import { MathjaxModule } from "mathjax-angular";


@NgModule({
  declarations: [AppComponent],
  imports: [MathjaxModule.forRoot(/*Optional Config*/)],
  providers: [],
  bootstrap: [AppComponent],
})
 
export class AppModule {}

