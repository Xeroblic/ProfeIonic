import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Plato } from '../interfaces/plato';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {
  // declara el objeto de manejo de coleccion
  private coleccionRecetas: AngularFirestoreCollection<Plato>
  
  constructor(private firestore: AngularFirestore) {
    //instanciar 
    this.coleccionRecetas=firestore.collection<Plato>('receta');
  }

  crearConexion(){
    this.firestore.collection('receta')
  }
  recuperarTodo(){
    //se usa para recuperar los valores, y si los cambiamos tambien nos entregara los cambios
    return this.firestore.collection('receta').valueChanges().subscribe((resp)=>{
        console.log("OK2")
        console.log(resp);
    })
  }
  agregarFirestore(receta: Plato){
    return this.coleccionRecetas.add(receta);
  }

  eliminarFirestore(id:string){
    return this.coleccionRecetas.doc(id).delete();
  }
}
