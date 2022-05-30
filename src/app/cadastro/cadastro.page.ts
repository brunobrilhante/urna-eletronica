import { Component } from '@angular/core';
import axios from 'axios';
import { AlertController } from '@ionic/angular';
import { NavController } from '@ionic/angular';


@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
})
export class CadastroPage {
  constructor(public alertController: AlertController,  private nvCtrl: NavController) {}

  async presentAlert(header, subHeader, message) {
    const alert = await this.alertController.create({
      header,
      subHeader,
      message,
      buttons: ['OK'],
    });

    await alert.present();
    const { role } = await alert.onDidDismiss();
  }

  createEleitor(dados) {
    axios
      .post('http://localhost:8080/urna/createEleitor', {
        ...dados,
      })
      .then(({ data }) => {
        if (data) {
          this.presentAlert(
            'Sucesso',
            'Eleitor Cadastrado!',
            'Os dados do eleitor foram cadastrados com sucesso em nossa base de dados.'
          );
        }
      })
      .catch((error) => {
        if (error.message === 'Request failed with status code 500') {
          this.presentAlert(
            'Erro',
            'Dados inválidos ou não preenchidos.',
            'Você precisa preencher todos os campos!'
          );
        }
      });
  }
}
