import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SpesaService {
  private x ="";
  
  constructor(private http: HttpClient) {}

  getLista() {
    return this.http.get(this.x);
  }

  aggiungiElemento(elemento: string) {
    return this.http.post(this.x, { elemento });
  }
  
}
