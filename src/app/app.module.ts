import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestore } from '@angular/fire/firestore';
import { environment } from '../environments/environment';

import {InputTextModule} from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import {CardModule} from 'primeng/card';
import { LoginComponent } from './login/login.component';
import { UsuarioService } from './usuario.service';
import { MenuAdmComponent } from './menu-adm/menu-adm.component';
import { CardapioComponent } from './cardapio/cardapio.component';
import { CadastroUsuarioComponent } from './cadastro-usuario/cadastro-usuario.component';
import {DropdownModule} from 'primeng/dropdown';


export const rotas:Routes = [
  {path: '', component: LoginComponent},
  {path: 'menu-adm', component: MenuAdmComponent},
  {path: 'cardapio', component: CardapioComponent},
  {path: 'cadastro', component: CadastroUsuarioComponent},

]

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MenuAdmComponent,
    CardapioComponent,
    CadastroUsuarioComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(rotas),
    InputTextModule,
    ButtonModule,
    CardModule,
    AngularFireModule.initializeApp(environment.firebase),
    DropdownModule
  ],
  providers: [UsuarioService, AngularFirestore],
  bootstrap: [AppComponent]
})
export class AppModule { }
