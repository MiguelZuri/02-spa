import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { HeroesService, Heroe } from '../../services/heroes.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
})
export class SearchComponent implements OnInit{

  heroes:any[] = [];
  termino:string;

  constructor(private activatedRoute: ActivatedRoute,
              private router:Router,
              private _heroesService: HeroesService) {
              }

  ngOnInit() {

    this.activatedRoute.params.subscribe(params =>{
      this.termino = params['termino'];
      this.heroes = this._heroesService.buscarHeroes( params['termino']);
      console.log(this.heroes);
    });

  }

  verHeroe( idx:number ){
    this.router.navigate( ['/heroe', idx] );
  }

}
