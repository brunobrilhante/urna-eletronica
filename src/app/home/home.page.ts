import { Component } from '@angular/core';
import axios from 'axios';
import { NavController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor(
    private nvCtrl: NavController,
    public alertController: AlertController
  ) {}

  async presentAlert(subHeader, message) {
    const alert = await this.alertController.create({
      header: 'Erro',
      subHeader,
      message,
      buttons: ['OK'],
    });

    await alert.present();
    const { role } = await alert.onDidDismiss();
  }

  autenticar(dados) {
    axios
      .post('http://localhost:8080/urna/authentication', {
        ...dados,
      })
      .then(({ data }) => {
        if (!data) {
          this.presentAlert(
            'Eleitor não cadastrado',
            'Os dados que você passou não estão cadastrados. Acesse com um usuário válido.'
          );
        } else if (data.valido === false) {
          this.presentAlert(
            'Dados inválidos!',
            'Os dados passados estão incorretos.'
          );
        } else if (data.valido === true) {
          this.nvCtrl.navigateForward('/candidatos');
        }
      });
  }
}
