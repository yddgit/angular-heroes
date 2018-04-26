import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';

@Component({
  selector: 'app-heroes', // element-selector
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
/**
 * export component, 这样就可以在其他地方import这个component
 */
export class HeroesComponent implements OnInit {
  /*
  hero: Hero = {
    id: 1,
    name: "Windstorm"
  };
  */

  heroes = HEROES;

  selectedHero: Hero;

  constructor() { }

  ngOnInit() {
    // 进行初始化操作
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
}
