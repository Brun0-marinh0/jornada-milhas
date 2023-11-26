import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Promocao } from '../types/types';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PromocaoService {

  private apiUrl: string = environment.apiUrl

  constructor(
    private httpCliente: HttpClient
  ) { }

  listar() : Observable<Promocao[]> {
    return this.httpCliente.get<Promocao[]>(`${this.apiUrl}/promocoes`)
  }
}
