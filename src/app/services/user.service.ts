import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  url = environment.url + 'client';
  constructor(private http: HttpClient) { }
  // tslint:disable-next-line:typedef
  getAllClient(){
    return this.http.get<User[]>(this.url + '/retrieve-all-clients')
  }
  getClientById(id: number){
    return this.http.get<User>(this.url + '/retrieve-client/' +id )
  }
  updateClient(user: User){
    return this.http.put(this.url +'/modify-client/'+user.idClient,user);
  }
  addNewClient(user: User){
    return this.http.post(this.url + '/add-client', user);
  }
  deleteClient(id: number){
    return this.http.delete(this.url +'/remove-client/' +id)
  }
  getOrdinaire(){
    return this.http.get<number>(this.url + '/ordinaire')
}
getPremuim(){
  return this.http.get<number>(this.url + '/premuim')
}
getFidele(){
  return this.http.get<number>(this.url + '/fidele')
}
getActivateAccount(){
  return this.http.get<number>(this.url + '/active-account')
}
  getDesactivateAccount(){
    return this.http.get<number>(this.url + '/desactive-account')
  }
}
