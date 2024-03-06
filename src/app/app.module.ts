import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { CvComponent } from './cv/cv.component';

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', component: CvComponent },
    ])
  ],
  declarations: [
    AppComponent,
    TopBarComponent,
    CvComponent
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
