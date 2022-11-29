import { Injectable } from '@angular/core';
import { User } from '../model/user.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private baseURL = 'http://localhost:8080/visitors/api/v1/users' ;
  constructor(private http: HttpClient) { }

  createUser(user: User): Observable<any>{
    return this.http.post(this.baseURL,user);
  }

  getUser(id: number): Observable<any>{
    return this.http.get(`${this.baseURL}/${id}`);
  }

  getUserList(): Observable<any>{
    return this.http.get(`${this.baseURL}`);
  }

  updateUser(id: number, value : any): Observable<object>{
    return this.http.put(`${this.baseURL}/${id}`, value);
  }

  deleteUser(id: number): Observable <any>{
    return this.http.delete(`${this.baseURL}/${id}`,{responseType:'text'});
  }

}
