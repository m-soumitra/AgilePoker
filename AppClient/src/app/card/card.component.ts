import { Component, OnInit } from '@angular/core';
import { PokerService } from '../app-services/poker.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  public size: any;
  public path = '/poker/';

  constructor(private pokerService: PokerService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      const pathParam = params['type'];
      if (this.path === 't-shirt') {
        this.path = this.path + pathParam;
      }
    });
    this.pokerService.getSize()
      .subscribe(size => {
        this.size = size;
      });
  }

}
