import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FacturesRoutingModule } from './factures-routing.module';
import { FacturesComponent } from './factures.component';
import { FactureComponent } from './facture/facture.component';
import {SharedModule} from '../shared/shared.module';
import { TestProductsComponent } from './test-products/test-products.component';


@NgModule({
  declarations: [
    FacturesComponent,
    FactureComponent,
    TestProductsComponent
  ],
  imports: [
    CommonModule,
    FacturesRoutingModule,
    SharedModule
  ]
})
export class FacturesModule { }
