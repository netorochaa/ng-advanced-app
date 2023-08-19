import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(readonly http: HttpClient) { }

  get(): Observable<any[]> {
    return this.http.get<any[]>(`https://random-data-api.com/api/v2/users?size=10`);
  }
}
