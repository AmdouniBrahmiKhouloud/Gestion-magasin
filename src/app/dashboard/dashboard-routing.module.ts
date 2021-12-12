import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddDetailProduitComponent } from './add-detail-produit/add-detail-produit.component';
import { AddProductComponent } from './add-product/add-product.component';
import { AddStockComponent } from './add-stock/add-stock.component';
import { DashboardIndexComponent } from './dashboard-index/dashboard-index.component';
import { DashboardLayoutComponent } from './dashboard-layout/dashboard-layout.component';
import { DashboardOrderComponent } from './dashboard-order/dashboard-order.component';
import { DashboardProfileComponent } from './dashboard-profile/dashboard-profile.component';
import { DashboardSavedItemComponent } from './dashboard-saved-item/dashboard-saved-item.component';
import { DashboardUpdateProfilComponent } from './dashboard-update-profil/dashboard-update-profil.component';
import { ListStockComponent } from './list-stock/list-stock.component';
import { ShowProductComponent } from './show-product/show-product.component';
import { StatProductComponent } from './stat-product/stat-product.component';
import { UpdateDetailProduitComponent } from './update-detail-produit/update-detail-produit.component';
import { UpdateProductComponent } from './update-product/update-product.component';
import { UpdateStockComponent } from './update-stock/update-stock.component';

const DashboardChildrenRoute: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: DashboardIndexComponent
  },
  {
    path: 'add-detail-produit',
    component: AddDetailProduitComponent
  },
  {
    path: 'stat-product',
    component: StatProductComponent
  },
  {
    path: 'show-produit/:id',
    component: ShowProductComponent
  },
  {
    path: 'update-detail-produit/:id',
    component: UpdateDetailProduitComponent
  },
  {
    path: 'add-stock',
    component: AddStockComponent
  },
  {
    path: 'list-stock',
    component: ListStockComponent
  },
  {
    path: 'update-product/:id',
    component: UpdateProductComponent
  },
  {
    path: 'update-stock/:id',
    component: UpdateStockComponent
  },
  {
    path: 'add-product',
    component: AddProductComponent
  },
  {
    path: 'product-list',
    component: DashboardSavedItemComponent
  },
  {
    path: 'profile',
    component: DashboardProfileComponent
  },
  {
    path: 'orders',
    component: DashboardOrderComponent
  },{
    path:'update-profile',
    component: DashboardUpdateProfilComponent
  }
];

const routes: Routes = [
  {
    path: '',
    component: DashboardLayoutComponent,
    children: DashboardChildrenRoute
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule {}
