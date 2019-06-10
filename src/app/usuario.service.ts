import { Injectable } from '@angular/core';

import { Usuario} from 'src/app/model/usuario';
import { AngularFirestoreCollection, AngularFirestore} from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  usuarioColletion: AngularFirestoreCollection<any>;

  constructor(private bd: AngularFirestore) { 
    this.usuarioColletion = bd.collection<any>('usuarios');
  }

  login(nome,senha){
    let collectionFiltrada = this.bd.collection<any>('usuarios', ref=>ref.where('nome', '==',nome).where('senha','==',senha));
    let resultado = collectionFiltrada.valueChanges();
    return resultado;
  }
  inserir(usuario: Usuario){
    this.usuarioColletion.add(usuario.passandoDadosUsuario()).then(
      resultado => {
        let docAux = this.usuarioColletion.doc(resultado.id);
        docAux.update({id: resultado.id});
      });
  }
  listarPorNome(nomeUsuario){
    let collectionFiltrada = this.bd.collection<any>('usuarios', ref=>ref.where('nome','==',nomeUsuario));
    let resultado = collectionFiltrada.valueChanges();
    return resultado;
  }
  atualizar(){}
  deletar(){}
}
