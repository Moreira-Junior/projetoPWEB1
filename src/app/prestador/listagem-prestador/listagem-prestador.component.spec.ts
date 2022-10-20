import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListagemPrestadorComponent } from './listagem-prestador.component';

describe('ListagemPrestadorComponent', () => {
  let component: ListagemPrestadorComponent;
  let fixture: ComponentFixture<ListagemPrestadorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListagemPrestadorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListagemPrestadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
