import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Reclamation } from '../model/reclamation';

@Injectable({
  providedIn: 'root'
})
export class ReclamationService {
  constructor(private http: HttpClient) {}

  url = environment.url + 'reclamation/';
  getListreclamation() {
    return this.http.get<Reclamation[]>(this.url + 'retrieve-all-reclamation');
  }

  addreclamation(reclamation: Reclamation) {
    return this.http.post(this.url + 'add-reclamation', reclamation);
  }

  deletereclamation(id: string) {
    return this.http.delete(this.url + 'remove-reclamation/' + id);
  }
  /*   updatefournisseur(fournisseur: Reclamation) {
    return this.http.put(this.url + 'updateFournisseur/' + fournisseur.idFournisseur, fournisseur);
  } */
}
