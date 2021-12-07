import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardAjoutFournisseurComponent } from './dashboard-ajout-fournisseur/dashboard-ajout-fournisseur.component';
import { DashboardIndexComponent } from './dashboard-index/dashboard-index.component';
import { DashboardLayoutComponent } from './dashboard-layout/dashboard-layout.component';
import { DashboardListeFournisseurComponent } from './dashboard-liste-fournisseur/dashboard-liste-fournisseur.component';
import { DashboardOrderComponent } from './dashboard-order/dashboard-order.component';
import { DashboardProduitParFournisseurComponent } from './dashboard-produit-par-fournisseur/dashboard-produit-par-fournisseur.component';
import { DashboardProfileComponent } from './dashboard-profile/dashboard-profile.component';
import { DashboardSavedItemComponent } from './dashboard-saved-item/dashboard-saved-item.component';
import { DashboardStatsFournisseursComponent } from './dashboard-stats-fournisseurs/dashboard-stats-fournisseurs.component';
import { ListeReclamationComponent } from './liste-reclamation/liste-reclamation.component';
import { ReclamationComponent } from './reclamation/reclamation.component';

const DashboardChildrenRoute: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: DashboardIndexComponent
  },
  {
    path: 'saved-items',
    component: DashboardSavedItemComponent
  },
  {
    path: 'profile',
    component: DashboardProfileComponent
  },
  {
    path: 'orders',
    component: DashboardOrderComponent
  },
  {
    path: 'ajout-fournisseur',
    component: DashboardAjoutFournisseurComponent
  },
  {
    path: 'liste-fournisseur',
    component: DashboardListeFournisseurComponent
  },

  {
    path: 'reclamation',
    component: ReclamationComponent
  },

  {
    path: 'liste-reclamations',
    component: ListeReclamationComponent
  },
  {
    path: 'fournisseurProducts/:id',
    component: DashboardProduitParFournisseurComponent
  },

  {
    path: 'stats-fournisseurs',
    component: DashboardStatsFournisseursComponent
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
