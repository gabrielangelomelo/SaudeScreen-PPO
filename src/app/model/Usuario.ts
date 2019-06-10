export class Usuario{
    nome: string;
    senha: string;
    peso: number;
    altura: number;
    objetivo: string;
    id: string;
    adm: boolean;

    constructor(nome, senha, peso, altura, objetivo, id, adm){
        this.nome = nome;
        this.senha = senha;
        this.peso = peso;
        this.altura = altura;
        this.objetivo = objetivo;
        this.id = id;
        this.adm = adm;
    }

    passandoDadosUsuario(){
        return{nome: this.nome, senha: this.senha, peso: this.peso, altura: this.altura, objetivo: this.objetivo,
            id:"", adm : this.adm}
    }
    validar(){
        if(this.nome==undefined || this.senha==undefined || this.peso || this.altura==undefined ||
            this.objetivo==undefined || this.adm==undefined){
                return false;
        }else{
            return true;
        }
    }
}