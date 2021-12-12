import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { NgChartsModule } from 'ng2-charts'; 
import {MatPaginatorModule} from '@angular/material/paginator';
import { SimpleNotificationsModule } from 'angular2-notifications';
//import { Chart } from 'ng2-charts';




@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule, SharedModule, NgxSkeletonLoaderModule,
    NgChartsModule,MatPaginatorModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
