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
import { DashboardAjoutFournisseurComponent } from './dashboard-ajout-fournisseur/dashboard-ajout-fournisseur.component';
import { MatButtonModule } from '@angular/material/button';
import { MatRippleModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { DashboardListeFournisseurComponent } from './dashboard-liste-fournisseur/dashboard-liste-fournisseur.component';

@NgModule({
  declarations: [
    DashboardLayoutComponent,
    DashboardIndexComponent,
    DashboardSavedItemComponent,
    DashboardProfileComponent,
    DashboardOrderComponent,
    DashboardAjoutFournisseurComponent,
    DashboardListeFournisseurComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule,
    MatMenuModule,
    MatButtonModule,
    MatMenuModule,
    MatRippleModule,
    MatFormFieldModule,
    ReactiveFormsModule
  ],
  exports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule,
    MatMenuModule,
    MatButtonModule,
    MatMenuModule,
    MatRippleModule,
    MatFormFieldModule
  ]
})
export class DashboardModule {}
