import { Component } from '@angular/core';
import { TransferenciasService } from './services/transferencias.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'AngularFundamento';

  //criando o método transferir
  //criando o método transferir
  transferencias: any[] = [];
  constructor(private transService: TransferenciasService){}
  transferir($event: any){
    this.transService.adicionar($event)

  }
}
