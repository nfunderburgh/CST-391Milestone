import { Injectable } from '@angular/core';
import { Prayer } from '../models/Prayer';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class PrayerServiceService {
  private host = "http://localhost:5000"

  constructor(private http: HttpClient) { }

  public getPrayers(callback: (prayers: Prayer[]) => void): void {
    this.http.get<Prayer[]>(this.host + "/prayers")
      .subscribe((prayers: Prayer[]) => {
        callback(prayers);
    });
  }

  public createPrayer(prayer: Prayer, callback: () => void): void {
    this.http.post<Prayer>(this.host + "/prayers", prayer).subscribe((data) => {
      callback();
    });
  }

  public updatePrayer(prayer: Prayer, callback: () => void): void {
    this.http.put<Prayer>(this.host + "/prayers", prayer).subscribe((data) => {
      callback();
    });
  }

  public deletePrayer(id: number, callback: () => void ): void {
    this.http.delete(this.host + "/prayers/" + id).subscribe((data) => {
      callback();
    });
  }
}
