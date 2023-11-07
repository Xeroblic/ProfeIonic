import { Component, OnInit } from '@angular/core';
import { Plato } from 'src/app/interfaces/plato';
import { FirestoreService } from 'src/app/service/firestore.service';
import { ServJSONService } from 'src/app/service/serv-json.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  constructor(
    private fireServ: FirestoreService, 
    private sJson:ServJSONService) 
    {}

  ngOnInit() {
      this.fireServ.recuperarTodo();
      console.log("OK");
  }
  platos: Plato[]=[
    {imagen:'../../../assets/img/image_2.png',titulo:"cazuela",descripcion:"papas, agua, sal, choclo"},
    {imagen:'../../../assets/img/image_3.png',titulo:"pescado",descripcion:"rico"},
    {imagen:'../../../assets/img/image_4.png',titulo:"arroz",descripcion:"rico pero no"},
    {imagen:'../../../assets/img/image_9.png',titulo:"pure",descripcion:"despues de la paga"},
    {imagen:'../../../assets/img/image_10.png',titulo:"vegano",descripcion:"queda con hambre"},
  ]
  grabar(){
    let mi_plato:Plato={
      titulo:'churrasco palta mayo',
      descripcion:'tiene muchas calorias',
      imagen:'curra.jpg',
    }
    this.fireServ.agregarFirestore(mi_plato).then(() =>{
      console.log("Grabado");
    }).catch((e)=>{
      console.log(e);
    });
    }
    eliminar(){
      let id='qBa8I96DbhHBzeSPuSGf';
      this.fireServ.eliminarFirestore(id).then(()=> {
        console.log("Elimino")
      })
  }
  grabarJSON(){
    let mi_plato:Plato={
      descripcion:'es super rico, pero no me gusta',
      titulo:'patitas de chancho',
      imagen:'pat.jpg'
    };
    this.sJson.agregar(mi_plato).subscribe((res)=>{
      console.log("Grabo plato");
    });
  }
  
}
