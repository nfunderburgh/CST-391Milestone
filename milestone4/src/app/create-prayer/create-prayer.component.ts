import { Component, NgModule, OnInit } from '@angular/core';
import { Prayer } from '../models/Prayer';
import { PrayerServiceService } from '../service/prayer-service.service';

@Component({
  selector: 'app-create-prayer',
  templateUrl: './create-prayer.component.html',
  styleUrls: ['./create-prayer.component.css']
})
export class CreatePrayerComponent implements OnInit{
  prayer: Prayer = new Prayer(Math.floor(Math.random() * 1000000), '', false, '');
  wasSubmitted: boolean = false;

  constructor(private service: PrayerServiceService) { }

  ngOnInit() { }

  public onSubmit() {
    this.service.createPrayer(this.prayer, this.test);
    console.log('The return from createPrayer() was ' + status);
    this.wasSubmitted = true;
  }

  test() {

  }
}
