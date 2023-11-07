import { Component, OnInit } from '@angular/core';
import { RecetaAPI } from 'src/app/interface/receta-api';
import { ServicioAPIDjangoService } from 'src/app/service/servicio-apidjango.service';

@Component({
  selector: 'app-codigo-qr',
  templateUrl: './codigo-qr.page.html',
  styleUrls: ['./codigo-qr.page.scss'],
})
export class CodigoQrPage implements OnInit {

  constructor(private servApi:ServicioAPIDjangoService) { }

  qrData:string="idcurso:1,idprofe:003,fecha:11-09"
  listado:RecetaAPI[]=[]

  ngOnInit() {
  }
  listar(){(
    this.servApi.listar().subscribe((data)=>{
      console.log(data)
      this.listado=JSON.parse(JSON.stringify(data))
    })
    )}

  grabar(){
    let miReceta:RecetaAPI={
      id: 5,
      titulo: 'chorrillana',
      descripcion: 'chorrillana ionic',
      imagen: 'ionic.png',
      categoria_idcategoria: 2
    }
    this.servApi.grabar(miReceta).subscribe(()=>{
      console.log("Grabo API")
    })
  }

}
