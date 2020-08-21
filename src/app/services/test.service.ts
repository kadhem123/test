import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class TestService {

  constructor(public http: HttpClient) { }

  getMessage(): Observable<any> {
    return this.http.get<String>("http://localhost:8667/resource/api/")
  }

}
