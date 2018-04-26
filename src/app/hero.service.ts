import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { MessageService } from './message.service';

@Injectable()
export class HeroService {

  constructor(private messageService: MessageService) { }

  /**
   * 获取所有hero列表
   */
  getHeroes(): Observable<Hero[]> {
    // TODO: send the message after fetching the heroes
    this.messageService.add("HelloSevice: fetched heroes");
    return of(HEROES); // return Observable<Hero[]>
    // Observable<Hero[]> heroes = HttpClient.get<Hero[]>();
  }
}
