import { Component } from '@angular/core';
import { ApiService } from '../service/api.service';
import axios from 'axios';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor(private nvCtrl: NavController) {}

  autenticar(dados) {
    axios
      .post('http://localhost:8080/urna/authentication', {
        ...dados,
      })
      .then(({ data }) => {
        if (!data) {
          alert('Eleitor não cadastrado');
        } else if (data.valido === false) {
          alert('Dados inválidos');
        } else if (data.valido === true) {
          this.nvCtrl.navigateForward('/votacao');
        }
      });
  }
}
