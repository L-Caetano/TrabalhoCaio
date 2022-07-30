import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Exibir albuns', url: '/exibir-dados', icon: 'clipboard' },
    { title: 'Inserir Música', url: '/inserir-dados', icon: 'create' },
    { title: 'Inserir Artista', url: '/inserir-dados-singer', icon: 'create' },
    { title: 'Inserir Album', url: '/inserir-dados-album', icon: 'create' },
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {}
}
