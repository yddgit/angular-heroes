import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { Observable } from 'rxjs/Observable'
import { of } from 'rxjs/observable/of'

@Injectable()
export class HeroService {

  constructor() { }

  /**
   * 获取所有hero列表
   */
  getHeroes(): Observable<Hero[]> {
    return of(HEROES); // return Observable<Hero[]>
    // Observable<Hero[]> heroes = HttpClient.get<Hero[]>();
  }
}
