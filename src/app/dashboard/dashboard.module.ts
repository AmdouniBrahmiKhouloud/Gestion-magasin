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
import { FormsModule } from '@angular/forms';
import { ListStockComponent } from './list-stock/list-stock.component';
import { UpdateProductComponent } from './update-product/update-product.component';
import { AddStockComponent } from './add-stock/add-stock.component';
import { UpdateStockComponent } from './update-stock/update-stock.component';
import { UpdateDetailProduitComponent } from './update-detail-produit/update-detail-produit.component';
import { AddDetailProduitComponent } from './add-detail-produit/add-detail-produit.component';



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
    
   
    
  ],
  imports: [CommonModule, DashboardRoutingModule, SharedModule, MatMenuModule,FormsModule]
})
export class DashboardModule {}
