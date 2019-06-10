import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../usuario.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  nome: string;
  senha: string;

  constructor(private usuarioService: UsuarioService, private router: Router) { }

  ngOnInit() {
  }

  login(){
    if(this.nome == undefined && this.senha == undefined){
      alert("Preencha todos os campos");
    }else{
      let auxGet = this.usuarioService.login(this.nome,this.senha);
      auxGet.subscribe(resultado =>{
        if(resultado.length != 0){
          if(resultado[0].adm==true){
            this.router.navigate(['menu-adm']);
          }else{
            this.router.navigate(['cardapio']);
          }
        }else{
          alert("Não existe este usuario");
        }
      })
    }
  }

}
