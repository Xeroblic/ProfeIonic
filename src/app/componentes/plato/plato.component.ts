import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-plato',
  templateUrl: './plato.component.html',
  styleUrls: ['./plato.component.scss'],
})
export class PlatoComponent  implements OnInit {
  @Input() imagen:string='';
  @Input() titulo:string='';
  @Input() descripcion:string='';
  
  constructor() { }

  ngOnInit() {}

}
