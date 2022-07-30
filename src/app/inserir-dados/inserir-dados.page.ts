import { Component, OnInit } from '@angular/core';
import {DadosProviderComponent} from "../dados-provider/dados-provider.component"

@Component({
  selector: 'app-inserir-dados',
  templateUrl: './inserir-dados.page.html',
  styleUrls: ['./inserir-dados.page.scss'],
})
export class InserirDadosPage implements OnInit {

  constructor(  private providerAlbum: DadosProviderComponent,) { }
  public dadosForm
  public singers
  public albuns
  ngOnInit() {
    this.providerAlbum.getAllSingers().then((response:any) => {
      console.log(response)
      this.singers = response
      console.log(this.singers)
    }).catch((error) => {
     
    });
    
   
  }
  gettingAlbuns(){
    console.log("PORRAAAA")
     this.providerAlbum.getAlbumBySinger(this.todo.singer).then((response:any) => {
      console.log(response)
      this.albuns = response
    }).catch((error) => {
     
    });
  }
  logForm(form) {
    console.log(form.value)
     this.providerAlbum.postSong(form.value).then((response) => {

     }).catch((error) => {
      
     });
  }
   public todo = {
      name: '',
      singer: '',
      album: '',
    };
}
