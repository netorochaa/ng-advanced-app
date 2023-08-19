import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IEmployee } from '../interfaces/Employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(readonly http: HttpClient) { }

  get(): Observable<IEmployee[]> {
    return this.http.get<IEmployee[]>(`https://random-data-api.com/api/v2/users?size=10`);
  }
}
