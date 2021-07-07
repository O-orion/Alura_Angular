import { Transferencia } from './../transferenciaModels';
import { TransferenciasService } from './../services/transferencias.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-extrato',
  templateUrl: './extrato.component.html',
  styleUrls: ['./extrato.component.scss']
})
export class ExtratoComponent implements OnInit {
  //@Input() transferencias: any
  //@Input() transferencias: any
  transferencias: any[] = [];
  constructor(private transService: TransferenciasService) { }

  ngOnInit(): void {
    this.transService.todas().subscribe((transferencias: Transferencia[]) =>{
      console.table(transferencias)
      this.transferencias = transferencias
    });
  }

}
