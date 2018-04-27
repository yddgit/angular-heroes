import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes', // element-selector
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
/**
 * export component, 这样就可以在其他地方import这个component
 */
export class HeroesComponent implements OnInit {
  heroes: Hero[];

  // 创建HeroeComponent时，DI模块就会把HeroService的实例通过这个参数注入
  constructor(private heroService: HeroService) {
    // 构造函数可用于初始化属性
    // 尽量不要再有其他逻辑，特别是发起HTTP请求获取数据的逻辑
  }

  ngOnInit() {
    // 进行初始化操作
    this.getHeroes();
  }

  /*
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
  */

  getHeroes(): void {
    // this.heroes = this.heroService.getHeroes();
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes);
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.heroService.addHero({ name } as Hero)
      .subscribe(hero => {
        this.heroes.push(hero);
      });
  }

  delete(hero: Hero): void {
    this.heroes = this.heroes.filter(h => h !== hero);
    this.heroService.deleteHero(hero).subscribe();
  }
}
