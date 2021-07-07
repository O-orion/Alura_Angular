export interface Transferencia {
    id?: string | number; //estou dizendo que esse atributo é opcional
    valor: number;
    destino: string | number;
    data?: Date;
}
