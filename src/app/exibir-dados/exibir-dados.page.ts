import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {DadosProviderComponent} from "../dados-provider/dados-provider.component"
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-exibir-dados',
  templateUrl: './exibir-dados.page.html',
  styleUrls: ['./exibir-dados.page.scss'],
})
export class ExibirDadosPage implements OnInit {
public dados 
  constructor(private providerAlbum: DadosProviderComponent,public router:Router,private alertController: AlertController) { }
  handlerMessage = '';
  roleMessage = '';
  ngOnInit() {
    //console.log(form.value)
    this.providerAlbum.getAllAlbuns().then((response) => {
      this.dados = response;
      console.log(this.dados)
    }).catch((error) => {
     
    });
  }
  async presentAlert(id) {
    const alert = await this.alertController.create({
      header: 'Alert!',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => { }
        },
        {
          text: 'OK',
          role: 'confirm',
          handler: () => { 
            this.providerAlbum.deleteSong(id).then((response) => {
                this.providerAlbum.getAllAlbuns().then((response) => {
                  this.dados = response;
                })
            }).catch((error) => {
             
            });
           
          }
        }
      ]
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
    this.roleMessage = `Dismissed with role: ${role}`;
  }

}
