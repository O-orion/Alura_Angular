import { Transferencia } from './../transferenciaModels';
import { TransferenciasService } from './../services/transferencias.service';
import { Component, Output } from '@angular/core';

import { EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nova-transferencia',
  templateUrl: './nova-transferencia.component.html',
  styleUrls: ['./nova-transferencia.component.scss'],
})
export class NovaTransferenciaComponent {
//[ngMold] -> apenas imprimi na tela, [(nhgModel)] -> imprimi e recebe valores da tela

  //@Output() aoTransferir =  new EventEmitter() // passando valores para outros componentes
  valor!: number;
  destino!: number;

  constructor(private service: TransferenciasService, private router:Router){}
  transferir() {
    console.log('JESUS CRISTO É O SENHOR');
    console.log(this.valor);
    console.log(this.destino);

    const valorTranferido: Transferencia = {valor: this.valor, destino: this.destino} // um valor transferencia do tipo transferencia recebe um objeto
    //this.aoTransferir.emit(valorTranferido) // transferindo valor

    this.service.adicionar(valorTranferido).subscribe((resultado) =>{
      console.log(resultado)
      this.router.navigateByUrl('extrato');

    },error => console.log(error))

  }

  limparCampos(){
    this.valor = 0
    this.destino = 0
  }
}
