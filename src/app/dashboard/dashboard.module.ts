import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatMenuModule } from '@angular/material/menu';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardLayoutComponent } from './dashboard-layout/dashboard-layout.component';
import { DashboardIndexComponent } from './dashboard-index/dashboard-index.component';
import { SharedModule } from '../shared/shared.module';
import { DashboardSavedItemComponent } from './dashboard-saved-item/dashboard-saved-item.component';
import { DashboardProfileComponent } from './dashboard-profile/dashboard-profile.component';
import { DashboardOrderComponent } from './dashboard-order/dashboard-order.component';
import { AddProductComponent } from './add-product/add-product.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListStockComponent } from './list-stock/list-stock.component';
import { UpdateProductComponent } from './update-product/update-product.component';
import { AddStockComponent } from './add-stock/add-stock.component';
import { UpdateStockComponent } from './update-stock/update-stock.component';
import { UpdateDetailProduitComponent } from './update-detail-produit/update-detail-produit.component';
import { AddDetailProduitComponent } from './add-detail-produit/add-detail-produit.component';
import { ShowProductComponent } from './show-product/show-product.component';
import { NgChartsModule } from 'ng2-charts';
import { Chart } from 'chart.js';
import {MatPaginatorModule} from '@angular/material/paginator';
import { NgxPaginationModule } from 'ngx-pagination';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { SimpleNotificationsModule } from 'angular2-notifications';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//import { NgChartsModule } from 'ng2-charts';
//import { Chart } from 'chart.js';



@NgModule({
  declarations: [
    DashboardLayoutComponent,
    DashboardIndexComponent,
    DashboardSavedItemComponent,
    DashboardProfileComponent,
    DashboardOrderComponent,
    AddProductComponent,
    ListStockComponent,
    UpdateProductComponent,
    AddStockComponent,
    UpdateStockComponent,
    UpdateDetailProduitComponent,
    AddDetailProduitComponent,
    ShowProductComponent,
    
    
    
    
   
    
  ],
  imports: [CommonModule, DashboardRoutingModule, SharedModule, MatMenuModule,FormsModule,ReactiveFormsModule,NgChartsModule,MatPaginatorModule,
  NgxPaginationModule,Ng2SearchPipeModule]
})
// NgChartsModule,Chart
export class DashboardModule {}
