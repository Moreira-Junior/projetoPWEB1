import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CadastroPrestadorComponent } from './cadastro-prestador/cadastro-prestador.component';
import { ListagemPrestadorComponent } from './listagem-prestador/listagem-prestador.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatBadgeModule} from '@angular/material/badge';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {FlexModule} from '@angular/flex-layout';
import { CadastroListagemComponent } from './cadastro-listagem/cadastro-listagem.component';
import { ChatComponent } from './chat/chat.component';
import { AvaliacaoComponent } from './avaliacao/avaliacao.component';
import {MatSliderModule} from '@angular/material/slider';
import { EditarMensagemComponent } from './editar-mensagem/editar-mensagem.component';
import { LayoutModule } from '../layout/layout.module';



@NgModule({
  declarations: [
    CadastroPrestadorComponent,
    ListagemPrestadorComponent,
    CadastroListagemComponent,
    ChatComponent,
    AvaliacaoComponent,
    EditarMensagemComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatIconModule,
    MatBadgeModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    FlexModule,
    RouterModule,
    HttpClientModule,
    MatSliderModule,
    LayoutModule
  ],
  exports: [
    CadastroPrestadorComponent,
    ListagemPrestadorComponent,
    ChatComponent,
    AvaliacaoComponent,
    EditarMensagemComponent
  ]
})
export class PrestadorModule { }
