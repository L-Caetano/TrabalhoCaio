import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { InserirDadosSingerPage } from './inserir-dados-singer.page';

describe('InserirDadosSingerPage', () => {
  let component: InserirDadosSingerPage;
  let fixture: ComponentFixture<InserirDadosSingerPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ InserirDadosSingerPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(InserirDadosSingerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
