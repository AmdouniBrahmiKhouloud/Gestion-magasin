import { Component, OnInit } from '@angular/core';
import { Fournisseur } from 'src/app/model/fournisseur';
import { FournisseurService } from 'src/app/services/fournisseur.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-dashboard-liste-fournisseur',
  templateUrl: './dashboard-liste-fournisseur.component.html',
  styleUrls: ['./dashboard-liste-fournisseur.component.scss']
})
export class DashboardListeFournisseurComponent implements OnInit {
  view = 'list';

  fournisseurs;
  constructor(private fournisseurService: FournisseurService) {}

  ngOnInit(): void {
    this.getListfournisseur();
  }
  getListfournisseur() {
    this.fournisseurService.getListfournisseur().subscribe(data => {
      this.fournisseurs = data;
      console.log((this.fournisseurs = data));
    });
  }

  remove(fournisseur: Fournisseur) {
    // console.log(fournisseur.idFournisseur);
    this.fournisseurService.deletefournisseur(fournisseur.idFournisseur).subscribe(data => {
      console.log('four deleted');
      this.getListfournisseur();
    });
  }
}
