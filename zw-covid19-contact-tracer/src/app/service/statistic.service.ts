import { Injectable } from '@angular/core';
import { Statistic } from '../model/statistic.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StatisticService {

  private baseURL = 'http://localhost:8080/zwcovid19/api/v1/statistics';
  constructor(private http: HttpClient) { }

  createStatistic(statistic: Statistic): Observable<any>{
    return this.http.post(`${this.baseURL}`, statistic);
  }

  updateStatistic(id: number, value: any): Observable<any>{
    return this.http.put(`${this.baseURL}/${id}`, value);
  }

  getStatistic(id: number): Observable<any>{
    return this.http.get(`${this.baseURL}/${id}`);
  }

  getStatisticsList(): Observable<any>{
    return this.http.get(`${this.baseURL}`);
  }

  deleteStatistic(id: number): Observable<any>{
    return this.http.delete(`${this.baseURL}/${id}`, {responseType: 'text'});
  }
}
