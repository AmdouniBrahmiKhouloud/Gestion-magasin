import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FacturesRoutingModule } from './factures-routing.module';
import { FacturesComponent } from './factures.component';
import { FactureComponent } from './facture/facture.component';
import {SharedModule} from '../shared/shared.module';


@NgModule({
  declarations: [
    FacturesComponent,
    FactureComponent
  ],
  imports: [
    CommonModule,
    FacturesRoutingModule,
    SharedModule
  ]
})
export class FacturesModule { }
