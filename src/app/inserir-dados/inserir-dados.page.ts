import { Component, OnInit } from '@angular/core';
import {DadosProviderComponent} from "../dados-provider/dados-provider.component"
import { ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-inserir-dados',
  templateUrl: './inserir-dados.page.html',
  styleUrls: ['./inserir-dados.page.scss'],
})
export class InserirDadosPage implements OnInit {
  public todo = {
      name: '',
      singer: '',
      album: '',
    };
  constructor(  private providerAlbum: DadosProviderComponent,private route: ActivatedRoute) { }
  public dadosForm
  musicaId: string;
  public singers
  public albuns
  public values
  ngOnInit() {
    this.route.params
    .subscribe(params => {
      console.log("AAAAAAAAAAA",params); // { orderby: "price" }
      this.musicaId = params.musica;
      console.log(params); // price
    }
  );
  if(this.musicaId){
    console.log("bostafodase")
    this.providerAlbum.getSongById(this.musicaId).then((response:any) => {
      console.log(response)
     // this.singers = response
      console.log("this.singersaaaaaaa", response)

  this.values = response;
        console.log("aaaaaaaaa",response.album.singer.id)
      this.todo.name = response.name
       console.log("DFOIQFJQWIOJFIOQW",this.todo)
  
    }).catch((error) => {
     
    });
  }
 
    this.providerAlbum.getAllSingers().then((response:any) => {
      console.log(response)
      this.singers = response
      console.log(this.singers)

            if(this.musicaId){
             this.todo.singer = this.values.album.singer.id
            this.gettingAlbuns()

            }
    }).catch((error) => {
     
    });
    
   
  }
  gettingAlbuns(){
    console.log("PORRAAAA")
     this.providerAlbum.getAlbumBySinger(this.todo.singer).then((response:any) => {
      console.log(response)
      this.albuns = response
      if(this.musicaId){
      this.todo.album = this.values.album.id
      }
    }).catch((error) => {
     
    });
  }
  logForm(form) {
    console.log(form.value)
     this.providerAlbum.postSong(form.value).then((response) => {

     }).catch((error) => {
      
     });
  }
 
}
