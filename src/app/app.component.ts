import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/Http';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  loadedFeature = 'hotels';

  ngOnInit() {
    firebase.initializeApp({
      apiKey: 'AIzaSyDIXQTLSiii5Mtz5HfvWOfUpNm2Shb8tlk',
      authDomain: 'travelbuzz-3.firebaseapp.com'
    });
  }
  onNavigate (feature: string) {
    this.loadedFeature = feature;
  }


}
