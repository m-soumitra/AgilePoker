import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PokerService } from '../app-services/poker.service';


@Component({
  selector: 'app-poker',
  templateUrl: './poker.component.html',
  styleUrls: ['./poker.component.css']
})
export class PokerComponent implements OnInit {

  public deck: any[];

  private _normalPokerDeck = ['0', '1/2', '1', '2', '3', '5', '8', '13', '20', '40', '100', '?'];

  private _tShirtSizingDeck = ['0', 'XS', 'S', 'M', 'L', 'XL', 'XXL', '3XL', '4XL', '5XL', '6XL', '?'];

  private _tshirtPoker = false;

  constructor(private pokerService: PokerService, private router: Router) {
    this._tshirtPoker = (this.router.url).endsWith('t-shirt');
    if (this._tshirtPoker) {
      this.deck = this._tShirtSizingDeck;
    } else {
      this.deck = this._normalPokerDeck;
    }
  }

  ngOnInit() { }


  setSize(size) {
    this.pokerService.setSize(size);
    if (this._tshirtPoker) {
      this.router.navigate(['/card/t-shirt']);
    } else {
      this.router.navigate(['/card/poker']);
    }
  }


}
