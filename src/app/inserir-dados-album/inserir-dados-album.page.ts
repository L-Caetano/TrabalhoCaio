import { Component, OnInit } from '@angular/core';
import {DadosProviderComponent} from "../dados-provider/dados-provider.component"
import { AlertController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-inserir-dados-album',
  templateUrl: './inserir-dados-album.page.html',
  styleUrls: ['./inserir-dados-album.page.scss'],
})
export class InserirDadosAlbumPage implements OnInit {

  constructor( private providerAlbum: DadosProviderComponent,private alertController: AlertController,private route: ActivatedRoute,) { }
  public singers
  public albumId
  public singerId
  ngOnInit() {
    this.route.params
    .subscribe(params => {
      //console.log("AAAAAAAAAAA",params); // { orderby: "price" }
      this.albumId = params.album;
      //console.log(params); // price
    }
  );
  if(this.albumId){
    this.providerAlbum.getAlbumById(this.albumId).then((response: any) => {
     // console.log(response)
      this.todo.name = response.name
      this.singerId = response.singer.id
    })
  }
    this.providerAlbum.getAllSingers().then((response:any) => {
      //console.log(response)
      this.singers = response
      //console.log(this.singers)
      if(this.singerId){
        this.todo.singer = this.singerId
      }
    }).catch((error) => {
     
    });
  }
  logForm(form) {
    //console.log(form.value)
    if(!this.albumId){
         this.providerAlbum.postAlbum(form.value).then((response) => {
      this.presentAlert(true)
     }).catch((error) => {
      this.presentAlert(false)
     });
    }else{
      this.providerAlbum.putAlbum(form.value,this.albumId).then((response) => {
        this.presentAlert(true)
       }).catch((error) => {
        this.presentAlert(false)
       });
    }
  
  }
   public todo = {
      name: '',
      singer: '',
    };
    async presentAlert(bool) {
      let messageTxt = ""
      if(this.albumId){
        messageTxt = "Album editado!"
      }else 
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
