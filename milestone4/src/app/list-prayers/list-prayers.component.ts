import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Prayer } from '../models/Prayer';
import { PrayerServiceService } from '../service/prayer-service.service';

@Component({
  selector: 'app-list-prayers',
  templateUrl: './list-prayers.component.html',
  styleUrls: ['./list-prayers.component.css']
})
export class ListPrayersComponent {
  selectedPrayer: Prayer| null = null;
  prayers: Prayer[] = [];
  constructor(private route: ActivatedRoute, private service: PrayerServiceService) { }

  ngOnInit() {
    console.log("Getting data ....");
    this.service.getPrayers((prayers: Prayer[]) => {
      this.prayers = prayers;
      console.log('this.prayers', this.prayers);
      for (let i = 0; i < prayers.length; i++) {
        this.prayers[i].Name = String(Object.values(prayers[i]));
      }
    });
  }
}
