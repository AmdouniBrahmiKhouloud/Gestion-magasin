import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FacturesRoutingModule } from './factures-routing.module';
import { FacturesComponent } from './factures.component';
import { FactureComponent } from './facture/facture.component';


@NgModule({
  declarations: [
    FacturesComponent,
    FactureComponent
  ],
  imports: [
    CommonModule,
    FacturesRoutingModule
  ]
})
export class FacturesModule { }
