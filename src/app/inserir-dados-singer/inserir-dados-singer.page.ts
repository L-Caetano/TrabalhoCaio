import { Component, OnInit } from '@angular/core';
import {DadosProviderComponent} from "../dados-provider/dados-provider.component"
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-inserir-dados-singer',
  templateUrl: './inserir-dados-singer.page.html',
  styleUrls: ['./inserir-dados-singer.page.scss'],
})
export class InserirDadosSingerPage implements OnInit {

  constructor( private providerAlbum: DadosProviderComponent,private alertController: AlertController) { }

  ngOnInit() {
  }
  logForm(form) {
    console.log(form.value)
     this.providerAlbum.postSinger(form.value).then((response) => {
      console.log("AAAAAAAAAAA")
      this.presentAlert(true)
     }).catch((error) => {
      console.log("KFKAFK", error)
      if(error.statusText != "CREATED"){
         this.presentAlert(false)
      }else{
        this.presentAlert(true)

      }
     });
  }
   public todo = {
      name: '',

    };
    async presentAlert(bool) {
      let messageTxt = ""
      if(bool == true){
       messageTxt = "Cantor adicionada!"
      }else{
       messageTxt = "Ocorreu um erro ao adiconar o cantor"
      }
       const alert = await this.alertController.create({
         header: 'Requisição',
         message: messageTxt,
         buttons: ['OK']
       });
   
       await alert.present();
     }
}
