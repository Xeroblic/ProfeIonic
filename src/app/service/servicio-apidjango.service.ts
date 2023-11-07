import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RecetaAPI } from '../interface/receta-api';


@Injectable({
  providedIn: 'root'
})
export class ServicioAPIDjangoService {

  constructor(private http:HttpClient) { 
    
    
  }
  url: string = "http://127.0.0.1:8000/"
  urlRecetaRec:string=this.url+"api/receta/"
  listar(){
    return this.http.get<RecetaAPI[]>(this.urlRecetaRec)
  }
  grabar(miReceta: RecetaAPI){
    return this.http.post(this.urlRecetaRec,miReceta)
  }
}
