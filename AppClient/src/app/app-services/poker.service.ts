import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs/Rx';


@Injectable()
export class PokerService {

  private deck: Array<any> = [];
  private size: any;
  public deckObservable: BehaviorSubject<any[]> = new BehaviorSubject(null);
  public sizeObservable: BehaviorSubject<any> = new BehaviorSubject(null);

  constructor() { }

  public getSize(): Observable<any> {
    return this.sizeObservable.asObservable();
  }

  public getDeck(): Observable<any> {
    return this.deckObservable.asObservable();
  }

  public setSize(size) {
    this.size = size;
    this.sizeObservable.next(size);
  }

  public setDeck(deck) {
    this.deck = deck;
    this.deckObservable.next(deck);
  }

}
