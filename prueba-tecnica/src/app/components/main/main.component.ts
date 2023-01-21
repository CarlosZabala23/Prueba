import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Article } from 'src/app/interfaces/main';
import { NewsService } from 'src/app/services/news.service';
import { WeatherService } from 'src/app/services/weather.service';
import { Router } from '@angular/router';
import {AngularFireAuth} from '@angular/fire/compat/auth';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit{
weather:any;
  public articles: Article[]=[];

  constructor (private newService: NewsService, private weatherService: WeatherService,private router: Router,private afAuth: AngularFireAuth){}
  ngOnInit(){
    this.newService.getPopular()
    .subscribe(articles => this.articles.push(...articles));

    this.weatherService.getWeather()
    .subscribe(resp => this.weather=resp);
  
  }
  singOut(){
    this.afAuth.signOut().then(()=>{
      this.router.navigate(['/login']);
    });

  }
}
