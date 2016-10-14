import {IKategori} from '../bransjer/kategori';

export interface IMedlem {
    medlem_id: number,
    navn: string,
    logoUrl: string,
    kategorier: IKategori[]
}