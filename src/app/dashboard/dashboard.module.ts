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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DashboardListeFournisseurComponent } from './dashboard-liste-fournisseur/dashboard-liste-fournisseur.component';
import { UpdateDialogFournisseurComponent } from './dashboard-liste-fournisseur/update-dialog-fournisseur/update-dialog-fournisseur.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { ReclamationComponent } from './reclamation/reclamation.component';
import { DashboardProduitParFournisseurComponent } from './dashboard-produit-par-fournisseur/dashboard-produit-par-fournisseur.component';

@NgModule({
  declarations: [
    DashboardLayoutComponent,
    DashboardIndexComponent,
    DashboardSavedItemComponent,
    DashboardProfileComponent,
    DashboardOrderComponent,
    DashboardAjoutFournisseurComponent,
    DashboardListeFournisseurComponent,
    UpdateDialogFournisseurComponent,
    ReclamationComponent,
    DashboardProduitParFournisseurComponent
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
    ReactiveFormsModule,
    MatDialogModule,
    MatInputModule,
    FormsModule
  ],
  exports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule,
    MatMenuModule,
    MatButtonModule,
    MatMenuModule,
    MatRippleModule,
    MatFormFieldModule,
    MatDialogModule,
    MatInputModule
  ]
})
export class DashboardModule {}
