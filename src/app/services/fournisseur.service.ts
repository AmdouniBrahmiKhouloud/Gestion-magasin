import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Fournisseur } from '../model/fournisseur';

@Injectable({
  providedIn: 'root'
})
export class FournisseurService {
  constructor(private http: HttpClient) {}

  url = environment.url + 'fournisseur/';
  getListfournisseur() {
    return this.http.get<Fournisseur[]>(this.url);
  }

  addfournisseur(fournisseur: Fournisseur) {
    return this.http.post(this.url, fournisseur);
  }

  deletefournisseur(id: string) {
    return this.http.delete(this.url + id);
  }
  updatefournisseur(fournisseur: Fournisseur) {
    return this.http.put(this.url + fournisseur.id, fournisseur);
  }
  
}
