import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChartsModule } from 'ng2-charts';
import {MatCardModule} from '@angular/material/card'



@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, ChartsModule,MatCardModule],

  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
