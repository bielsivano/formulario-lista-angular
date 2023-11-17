
  import { FormularioService } from './formulario.componente.service';
  import { Component } from '@angular/core';

  @Component({
    selector: 'app-formulario',
    templateUrl: './formulario.component.html',
    styleUrls: ['./formulario.component.scss']
  })
  export class FormularioComponent {
    nome!:string;
    ultimo_nome!:string;
    Cargo!: string;
    anoDeCadastro!: number;

    constructor(private formularioService: FormularioService) {}

    adicionarfuncionario() {
      this.formularioService.adicionar(this.nome, this.ultimo_nome, this.Cargo, this.anoDeCadastro);  }
  }
