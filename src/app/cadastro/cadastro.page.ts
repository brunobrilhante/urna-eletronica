import { Component, OnInit } from '@angular/core';
import axios from 'axios';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
})
export class CadastroPage implements OnInit {

  constructor() { }

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  createEleitor(dados) {
    axios.post('http://localhost:8080/urna/createEleitor', {
      ...dados
    }).catch(error => console.log(error));
  }

  getAllCandidatos() {
    axios.get('http://localhost:8080/urna/getAllCandidatos').then(({ data }) => {
      console.log(data);
      return data;
    }).catch(error => console.log(error));
  }
}
