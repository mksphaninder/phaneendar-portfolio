import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs'
import { portfolio_url } from '../shared/constants/portfolio.constants';


@Injectable({
  providedIn: 'root'
})
export class PortfolioService {

  constructor(private http: HttpClient) { 

  }

  // Create a interface for this response.
  getPortfolioContacts(): Observable<any> {  
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
      // Add any other required headers here
    });
    return this.http.get<any>(portfolio_url.contacts, { headers });
  }
}
