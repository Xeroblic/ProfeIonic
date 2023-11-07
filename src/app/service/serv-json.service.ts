import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Plato } from '../interfaces/plato';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ServJSONService {

  constructor(private http: HttpClient) { }

  agregar(plato: Plato):Observable<any>{ //el observable hace que el sistema espere hasta que termine la petición
    return this.http.post<Plato>(environment.apiReceta,plato);
  }
  listar(){}
  buscar(){}
  modificar(){}
  eliminar(){}

}
