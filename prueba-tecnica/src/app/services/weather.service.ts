import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { environment } from 'src/environments/environment';

const apiWeaKey=environment.apiWeaKey;

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private HttpClient: HttpClient) { }

    getWeather(){
      return this.HttpClient.get(`https://api.openweathermap.org/data/2.5/weather?q=Cali,co&appid=${apiWeaKey}&units=metric`);
    }
 
}
