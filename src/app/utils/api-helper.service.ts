import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {APi_Base_url} from './constants';
import {Country} from './country.model';
import {Employee} from './employe.model';

@Injectable({
  providedIn: 'root',
})
export class ApiHelperService {
  private baseUrl: string = APi_Base_url;

  constructor(private http: HttpClient) {}

  getCountries() {
    return this.http.get<Country[]>(this.baseUrl + 'countries');
  }
  getEmpoyees() {
    return this.http.get<Employee[]>(this.baseUrl + 'employees');
  }
  getEmpoyee(empID: any) {
    return this.http.get<Country[]>(this.baseUrl + 'employees/' + empID);
  }
  postEmpoyee(model: any) {
    return this.http.post<Employee>(this.baseUrl + 'employees', model);
  }
}
