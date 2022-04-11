import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  baseUrl: string = "http://localhost:3000/api";
  headers: HttpHeaders = new HttpHeaders({
    "Content-Type": "application/json"
  })

  constructor(private http: HttpClient) { }


  getAll(): Observable<any>{
    let url = this.baseUrl + "/students";
    return this.http.get<any>(url, { headers: this.headers })
  }

  getOne(studentId: string): Observable<any>{
    const url:string = this.baseUrl + "/students/"+ studentId;
    return this.http.get<any>(url, {headers: this.headers})
  }
  deleteOne(studentId: string): Observable<any>{
    const url:string = this.baseUrl + "/students/"+ studentId;
    return this.http.delete<any>(url, {headers: this.headers})
  }

}
