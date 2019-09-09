import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http: HttpClient) { }

  private url = 'https://api.openweathermap.org/data/2.5/forecast/';

  getWeatherData(location) {
    return this.http.get(this.url + 'daily?q=' + location + '&units=metric&cnt=7&mode=json&appid=1b1d0ad1ab386b48e8311d1e61b27554');
  }
}
