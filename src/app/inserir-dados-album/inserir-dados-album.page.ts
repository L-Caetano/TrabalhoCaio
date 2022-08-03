import { Component, OnInit } from '@angular/core';
import {DadosProviderComponent} from "../dados-provider/dados-provider.component"
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-inserir-dados-album',
  templateUrl: './inserir-dados-album.page.html',
  styleUrls: ['./inserir-dados-album.page.scss'],
})
export class InserirDadosAlbumPage implements OnInit {

  constructor( private providerAlbum: DadosProviderComponent,private alertController: AlertController) { }
  public singers
  ngOnInit() {
    this.providerAlbum.getAllSingers().then((response:any) => {
      console.log(response)
      this.singers = response
      console.log(this.singers)
    }).catch((error) => {
     
    });
  }
  logForm(form) {
    console.log(form.value)
     this.providerAlbum.postAlbum(form.value).then((response) => {
      this.presentAlert(true)
     }).catch((error) => {
      this.presentAlert(false)
     });
  }
   public todo = {
      name: '',
      singer: '',
    };
    async presentAlert(bool) {
      let messageTxt = ""
      if(bool == true){
       messageTxt = "Album adicionada!"
      }else{
       messageTxt = "Ocorreu um erro ao adiconar o album"
      }
       const alert = await this.alertController.create({
         header: 'Requisição',
         message: messageTxt,
         buttons: ['OK']
       });
   
       await alert.present();
     }
}
