import { Component, Input, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-fish-card',
  templateUrl: './fish-card.component.html',
  styleUrls: ['./fish-card.component.scss'],
})
export class FishCardComponent implements OnInit {
  @Input() dataFish: any;

  constructor(private route: Router) {}

  ngOnInit() {}

  fistDetails(fishData) {
    let dtoDataFish = {
      img: fishData['Species Illustration Photo']?.src,
      name: fishData['Species Name'],
      rate: fishData['Fishing Rate'],
      protein: fishData['Protein'],
    };
    let navigationExtras: NavigationExtras = {
      state: {
        data: dtoDataFish,
      },
    };

    this.route.navigate(['fish-details'], navigationExtras);
  }
}
