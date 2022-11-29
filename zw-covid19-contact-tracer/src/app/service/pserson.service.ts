import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Person } from '../model/person.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PsersonService {

  private baseURL = 'http://localhost:8080/zwcovid19/api/v1/person';
  constructor(private http: HttpClient) { }

  createPerson(person: Person): Observable<any>{
    return this.http.post(`${this.baseURL}`, person);
  }

  updatePerson(id: number, value: any): Observable<any>{
    return this.http.put(`${this.baseURL}/${id}`, value);
  }

  getPerson(id: number): Observable<any>{
    return this.http.get(`${this.baseURL}/${id}`);
  }

  getPersonsList(): Observable<any>{
    return this.http.get(`${this.baseURL}`);
  }

  deletePerson(id: number): Observable<any>{
    return this.http.delete(`${this.baseURL}/${id}`, {responseType: 'text'});
  }
}
