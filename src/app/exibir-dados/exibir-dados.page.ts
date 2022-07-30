import { Component, OnInit } from '@angular/core';

import {DadosProviderComponent} from "../dados-provider/dados-provider.component"
@Component({
  selector: 'app-exibir-dados',
  templateUrl: './exibir-dados.page.html',
  styleUrls: ['./exibir-dados.page.scss'],
})
export class ExibirDadosPage implements OnInit {
public dados 
  constructor(private providerAlbum: DadosProviderComponent,) { }

  ngOnInit() {
    //console.log(form.value)
    this.providerAlbum.getAllAlbuns().then((response) => {
        

      this.dados = response;
      console.log(this.dados)
    }).catch((error) => {
     
    });
  }

}
