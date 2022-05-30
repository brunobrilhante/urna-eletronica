import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(public http: HttpClient) {}

  public votosCandidato(numero) {
    return this.http.get(`http://localhost:8080/urna/getVoto/${numero}`);
  }
}
