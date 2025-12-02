import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FlaskService {
  constructor(private http: HttpClient) {}
  
  getProfilo() {
    return this.http.get('https://congenial-space-yodel-pj7xgrx7x5x92rv6x-5000.app.github.dev/profilo');
}
}

