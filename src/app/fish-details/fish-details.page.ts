import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-fish-details',
  templateUrl: './fish-details.page.html',
  styleUrls: ['./fish-details.page.scss'],
})
export class FishDetailsPage implements OnInit {
  dataFish: any;

  constructor(private actRouter: ActivatedRoute, private route: Router) {
    this.actRouter.queryParams.subscribe(param => {
      if (this.route.getCurrentNavigation().extras.state) {
        this.dataFish = this.route.getCurrentNavigation().extras.state.data;
        console.log(this.dataFish);
        console.log(param);
      }
      else {
        this.route.navigate(['fish-page']);
      }
    });
  }

  ngOnInit() {}
}
