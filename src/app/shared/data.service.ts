import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  url = './assets/user_details.json';
  constructor(
    private http: HttpClient
  ) {
  }

  public getProfileInfo(): Observable<any> {
    return this.http.get(this.url);
  }

  private mailData = new BehaviorSubject({});
  data = this.mailData.asObservable();

  conversationData(data: any) {
    this.mailData.next(data);
  }
}
