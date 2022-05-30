/* eslint-disable prefer-const */
/* eslint-disable id-blacklist */
/* eslint-disable no-unused-labels */
/* eslint-disable @typescript-eslint/no-unused-expressions */
import { Component, OnInit } from '@angular/core';
import axios from 'axios';

let numeros = [];
let brancos = [];

@Component({
  selector: 'app-votacao',
  templateUrl: './votacao.page.html',
  styleUrls: ['./votacao.page.scss'],
})
export class VotacaoPage implements OnInit {
  constructor() {}

  ngOnInit() {}

  setValue(value: string) {
    numeros.push(value);
  }

  setBranco(value: string) {
    brancos.push(value);
  }

  getNumero() {
    let numero = '';
    numeros.map((n) => (numero += n));
    return numero.slice(0, 2);
  }

  getBranco() {
    return brancos[0];
  }

  corrige() {
    return (numeros = []), (brancos = []);
  }

  // getVoto(numero){
  //   axios.get(`http://localhost:8080/urna/getVoto/${numero}`).then(({data})=>{
  //     console.log(data);
  //     return data
  //   })
  // }

  branco() {
    axios.get(`http://localhost:8080/urna/atualizarVoto/branco`);
  }

  async atualizarVoto() {
    if (this.getNumero()) {
      await axios.get(
        `http://localhost:8080/urna/atualizarVoto/${this.getNumero()}`
      );
    }else if(this.getBranco()) {
      await axios.get(
        `http://localhost:8080/urna/atualizarVoto/${this.getBranco()}`
      );
    }
  }
}
