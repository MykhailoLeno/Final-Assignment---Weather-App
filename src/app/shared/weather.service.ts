import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, pipe } from 'rxjs';

import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(
    private http: HttpClient
  ) { }

  getData(lat: number, lon: number) {
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${environment.apiKey}&units=metric`;

    return this.http.get(url).pipe(
      map((res: any) => {
      return {
        coord: res.coord,
        temperature: res.main.temp,
        description: res.weather[0].description,
        wind: res.wind.speed,
        city: res.name
      };
    }));
  }
}
