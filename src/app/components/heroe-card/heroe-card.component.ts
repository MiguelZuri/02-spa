import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroe-card',
  templateUrl: './heroe-card.component.html',
  styleUrls: ['./heroe-card.component.css']
})
export class HeroeCardComponent implements OnInit {

  @Input() heroe:any = {};
  @Input() index:number;

  @Output() heroeSeleccionado: EventEmitter<number>;

  constructor( private router:Router) {
    this.heroeSeleccionado = new EventEmitter();
  }

  ngOnInit() {
  }

  verHeroe(){

    // this.heroeSeleccionado.emit( this.index );

    this.router.navigate( ['/heroe', this.index] );

  }

}
