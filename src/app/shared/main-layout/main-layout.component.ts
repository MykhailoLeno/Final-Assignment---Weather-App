import { Component, OnInit } from '@angular/core';

import { HeaderPageComponent } from '../../header-page/header-page.component';
import { InputCoordinateComponent } from '../../input-coordinate/input-coordinate.component';
import { DisplayWeatherComponent } from '../../display-weather/display-weather.component';

@Component({
  selector: 'app-main-layout',
  standalone: true,
  imports: [HeaderPageComponent, InputCoordinateComponent, DisplayWeatherComponent],
  templateUrl: './main-layout.component.html',
  styleUrl: './main-layout.component.scss'
})
export class MainLayoutComponent implements OnInit {

  weatherData: any = {}

  constructor() {}

  ngOnInit(): void {
    
  }

  updateWeatherDate(data: any) {
    this.weatherData = data
  }
}
