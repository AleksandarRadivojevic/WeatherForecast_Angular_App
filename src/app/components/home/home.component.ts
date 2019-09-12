import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/services/app.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public currentDate = new Date();
  public dataWeather: any;
  public currentDay: any;
  public weekData = [];
  public src: string;
  public location: string;

  public showModal = false;
  public showSpinner = false;

  constructor(private http: AppService) { }

  ngOnInit() {
    this.insertData('belgrade');

  }

  insertData(location) {
    this.showSpinner = true;
    this.weekData = [];
    this.http.getWeatherData(location).subscribe(
      data => {
        this.showSpinner = false;
        this.dataWeather = data;
        this.currentDay = data['list'][0];
        this.src = 'http://openweathermap.org/img/wn/' + this.currentDay.weather[0].icon + '@2x.png';
        console.log(this.dataWeather);

        for (let i = 0; i < 8; i++) {
          // set week days
          const tomorrow = new Date();
          tomorrow.setDate(tomorrow.getDate() + i);
          const day = tomorrow.toString().substring(0, 10);

          const daysData = data['list'][i];

          const dataObj = {
            dayName: day,
            description: daysData.weather[0].description,
            temp: daysData.temp.day,
            humidity: daysData.humidity,
            pressure: daysData.pressure
          };

          this.weekData.push(dataObj);
        }
        console.log(this.weekData);
      },
      error => {
        this.showModal = true;
      }
    );
  }

  closeModal() {
    this.showModal = false;
    this.insertData('belgrade');
  }
}
