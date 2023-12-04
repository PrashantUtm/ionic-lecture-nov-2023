import { Component, OnInit } from '@angular/core';
import { ForecastTypes } from 'src/app/enums/forecast-types';
import { Forecast } from 'src/app/models/forecast';

@Component({
  selector: 'app-forecasts',
  templateUrl: './forecasts.page.html',
  styleUrls: ['./forecasts.page.scss'],
})
export class ForecastsPage implements OnInit {

  public forecastTypes = ForecastTypes;

  public forecasts: Forecast[] = [
    {
      date: new Date(2023, 11, 2),
      region: "Center",
      type: ForecastTypes.Rainy,
      rainfall: 10
    },
    {
      date: new Date(2023, 11, 2),
      region: "North",
      type: ForecastTypes.Sunny
    },
    {
      date: new Date(2023, 11, 3),
      region: "South",
      type: ForecastTypes.Cloudy
    }
  ];

  constructor() { 
    console.log(this.forecasts);
  }

  ngOnInit() {
    console.log('forecast: ngOnInit');
  }

  ngOnChanges() {
    console.log('forecast: change');
  }

  ngOnDestroy() {
    console.log('forecast: destroy');
  }
}
