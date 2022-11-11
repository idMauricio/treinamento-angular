import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../services/api-service/api.service';



@Component({
  selector: 'app-fish-page',
  templateUrl: './fish-page.page.html',
  styleUrls: ['./fish-page.page.scss'],
})
export class FishPagePage implements OnInit {
  fishItens: any;

  constructor(private apiServ: ApiService, private route: Router) {}

  ngOnInit() {
    this.getFishSpecies();
  }

  getFishSpecies() {
    this.apiServ.getFishSpecies().subscribe((res) => {
      this.fishItens = res;
      console.log('dataMenu: ', res);
    });
  }

  irUserScreen() {
    this.route.navigate(['user-screen']);
  }
}
