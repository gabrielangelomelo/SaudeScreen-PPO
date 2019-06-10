import { Component, OnInit } from '@angular/core';
import { Usuario } from '../model/usuario';
import { UsuarioService } from '../usuario.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro-usuario',
  templateUrl: './cadastro-usuario.component.html',
  styleUrls: ['./cadastro-usuario.component.css']
})
export class CadastroUsuarioComponent implements OnInit {

  usuario = new Usuario("","","","","","","");

  constructor(private usarioService: UsuarioService, private router: Router) { }

  ngOnInit() {
  }

  cadastro(){
    if(this.usuario.validar() == false){
      alert("Preencha todos os campos");
    }else{
      let auxGet = this.usarioService.listarPorNome(this.usuario.nome);
      auxGet.subscribe(resultado =>{
        if(resultado.length == 0){
          let usuarioNovo = new Usuario(this.usuario.nome, this.usuario.senha, this.usuario.peso, 
          this.usuario.altura, this.usuario.objetivo,"",this.usuario.adm);
          this.usarioService.inserir(usuarioNovo);
          this.router.navigate(['']);
        }else{
          alert("Nome do USUARIO já existe no banco");
        }
      });
    }
  }

}
