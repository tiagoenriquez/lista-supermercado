import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { InserirItensPage } from './inserir-itens.page';

describe('InserirItensPage', () => {
  let component: InserirItensPage;
  let fixture: ComponentFixture<InserirItensPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InserirItensPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(InserirItensPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
