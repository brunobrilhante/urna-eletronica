/* eslint-disable @typescript-eslint/no-shadow */
import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  createCandidato(data) {
    axios.post('http://localhost:8080/urna/createCandidato', {
      ...data
    }).catch(error => console.log(error));
  }

  getAllEleitores() {
    axios.get('http://localhost:8080/urna/getAllEleitores').then(({ data }) => {
      console.log(data);
      return data;
    }).catch(error => console.log(error));
  }





}
