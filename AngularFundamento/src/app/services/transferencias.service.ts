import { Transferencia } from './../transferenciaModels';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({ //Injectable está dizendo que posso chama ela através de uma instancia no construtor
  providedIn: 'root' //
})
export class TransferenciasService {
  private url = 'http://localhost:3000/transferencias'
  private listatransferencia: any[];

  constructor(private http: HttpClient) {
    this.listatransferencia = []
  }

  get transferencias(){
    return this.listatransferencia
  }

  adicionar(transferencia: Transferencia): Observable<Transferencia>{
    this.hidratar(transferencia)
    return this.http.post<Transferencia>(this.url, transferencia)
  }

  private hidratar(transferencia: any){
    transferencia.data = new Date();
  }

  todas(): Observable<Transferencia[]>{
    return this.http.get<Transferencia[]>(this.url);
  }
}
