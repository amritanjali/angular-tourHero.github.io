import { Injectable } from '@angular/core';
import {Hero} from './hero'
import {HEROES} from './mock-heroes'
import { Observable, of } from 'rxjs';
import {MessageService } from './message.service'


@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private messageServiece : MessageService){

  }
  getHeroes(): Observable <Hero[]> {
    this.messageServiece.add('HeroService: fetched heroes')
    return of (HEROES);
  }
  // getHeroes(): Hero[] {
  //   return HEROES;
  // }
}
