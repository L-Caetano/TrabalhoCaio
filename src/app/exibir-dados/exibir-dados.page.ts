import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {DadosProviderComponent} from "../dados-provider/dados-provider.component"
@Component({
  selector: 'app-exibir-dados',
  templateUrl: './exibir-dados.page.html',
  styleUrls: ['./exibir-dados.page.scss'],
})
export class ExibirDadosPage implements OnInit {
public dados 
  constructor(private providerAlbum: DadosProviderComponent,public router:Router) { }

  ngOnInit() {
    //console.log(form.value)
    this.providerAlbum.getAllAlbuns().then((response) => {
        

      this.dados = response;
      console.log(this.dados)
    }).catch((error) => {
     
    });
  }

}
