import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(public http: HttpClient) { }

  votosCandidato(numero) {
    return new Promise((resolve, reject) => {
      this.http.request('GET', `http://localhost:8080/urna/getVoto/${numero}`, { responseType: 'json' }).subscribe(
        (result: any) => {
          console.log('>>> Utilizando HttpClient <<<');
          console.log(result);
          resolve(result.json);
        },
        (error) => {
          console.error(error);
          reject(error.json);
        }
      );
    }).catch((e) => console.error(e));
  }
}
