import { Component, OnInit } from '@angular/core';
import {DadosProviderComponent} from "../dados-provider/dados-provider.component"

@Component({
  selector: 'app-inserir-dados-singer',
  templateUrl: './inserir-dados-singer.page.html',
  styleUrls: ['./inserir-dados-singer.page.scss'],
})
export class InserirDadosSingerPage implements OnInit {

  constructor( private providerAlbum: DadosProviderComponent,) { }

  ngOnInit() {
  }
  logForm(form) {
    console.log(form.value)
     this.providerAlbum.postSinger(form.value).then((response) => {

     }).catch((error) => {
      
     });
  }
   public todo = {
      name: '',

    };
}
