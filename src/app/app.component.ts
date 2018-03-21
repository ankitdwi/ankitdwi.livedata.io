import { Component, OnInit, OnDestroy } from '@angular/core';
import { DataService} from './data.service'
import {Tweet} from './tweet'
import {Observable} from 'rxjs/Rx'
import { timer } from 'rxjs/observable/timer';
import {Subscription} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'app';
  tweetData: Tweet[];
  private subscription: Subscription;

  constructor(private dataService: DataService){}

  ngOnInit() {
    let timer = Observable.timer(0,10000);
    this.subscription=timer.subscribe(t=>this.getTweets());
  }

  getTweets(): void {
    this.dataService.getTweets()
    .subscribe(data => this.tweetData = data);
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }
}
