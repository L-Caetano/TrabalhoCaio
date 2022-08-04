import { Component, OnInit } from '@angular/core';
import {DadosProviderComponent} from "../dados-provider/dados-provider.component"
import { AlertController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-inserir-dados-singer',
  templateUrl: './inserir-dados-singer.page.html',
  styleUrls: ['./inserir-dados-singer.page.scss'],
})
export class InserirDadosSingerPage implements OnInit {

  constructor( private providerAlbum: DadosProviderComponent,private alertController: AlertController,private route: ActivatedRoute,) { }

  ngOnInit() {  
      this.route.params
    .subscribe(params => {
    //  console.log("AAAAAAAAAAA",params); // { orderby: "price" }
      this.singerId = params.singer;
    //  console.log(params); // price
    }
  );
  if(this.singerId){
    this.providerAlbum.getSingerById(this.singerId).then((response:any) => {
      //console.log(response)
      this.todo.name = response.name
    }).catch((error) => {
     
    });
  }
  }
  public singerId
  logForm(form) {
    console.log(form.value)
    if(!this.singerId){
   this.providerAlbum.postSinger(form.value).then((response) => {
      //console.log("AAAAAAAAAAA")
      this.presentAlert(true)
     }).catch((error) => {
      //console.log("KFKAFK", error)
      if(error.statusText != "CREATED"){
         this.presentAlert(false)
      }else{
        this.presentAlert(true)

      }
     });
    }else{
      this.providerAlbum.putSinger(form.value,this.singerId).then((response) => {
        this.presentAlert(true)
       }).catch((error) => {
       // console.log("KFKAFK", error)
        if(error.statusText != "CREATED"){
           this.presentAlert(false)
        }else{
          this.presentAlert(true)
        }
       });
    }
  

  }
   public todo = {
      name: '',
    };
    async presentAlert(bool) {
      let messageTxt = ""
      if(this.singerId){
        messageTxt = "Cantor editado!"
      }else
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
