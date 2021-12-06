import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FacturesComponent } from './factures.component';
import {TestProductsComponent} from './test-products/test-products.component';

const routes: Routes = [
  { path: 'test_facture', component: TestProductsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FacturesRoutingModule { }
