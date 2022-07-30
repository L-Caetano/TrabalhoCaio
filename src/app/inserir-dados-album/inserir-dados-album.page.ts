import { Component, OnInit } from '@angular/core';
import {DadosProviderComponent} from "../dados-provider/dados-provider.component"
@Component({
  selector: 'app-inserir-dados-album',
  templateUrl: './inserir-dados-album.page.html',
  styleUrls: ['./inserir-dados-album.page.scss'],
})
export class InserirDadosAlbumPage implements OnInit {

  constructor( private providerAlbum: DadosProviderComponent,) { }

  ngOnInit() {
  }
  logForm(form) {
    console.log(form.value)
     this.providerAlbum.postAlbum(form.value).then((response) => {

     }).catch((error) => {
      
     });
  }
   public todo = {
      name: '',
      singer: '',
    };
}
