import { Injectable } from '@angular/core';
import {Hero} from './hero'
import {HEROES} from './mock-heroes'
import { Observable, of } from 'rxjs';
import {MessageService } from './message.service'
// import { HEROES } from './mock-heroes';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private messageServiece : MessageService){

  }
  
  getHero(id: number): Observable<Hero> {
    // TODO: send the message _after_ fetching the hero
    this.messageServiece.add('HeroService: fetched hero id=${id}');
    return of(HEROES.find(hero => hero.id === id));
  }

  getHeroes(): Observable <Hero[]> {
    this.messageServiece.add('HeroService: fetched heroes')
    return of (HEROES);
  }
  // getHeroes(): Hero[] {
  //   return HEROES;
  // }
}
