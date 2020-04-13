import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  API_KEY = '2756517fff1d4e83b42ab7724d1516bb';

  constructor(private httpClient: HttpClient) {}

  getNews() {
    return this.httpClient.get(
      `https://newsapi.org/v2/top-headlines?country=ph&q=covid&apiKey=${this.API_KEY}`
    );
  }
}
