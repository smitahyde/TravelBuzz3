import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  hotelsArray = [];

  constructor() { }

  ngOnInit() {
  }

  submitSearch(box) {
    // var temp = document.getElementById('location-search');
    console.log('it worked', box);
    const self = this;

    fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${box}&key=AIzaSyAKxZtGsQS7nCV9VA1OSqu3ZQjTmnDRsHk`)
      .then((res) => {
        return res.json();
      }).then(function (data) {
        const location = data.results[0].geometry.location;
        const lat = location.lat;
        const lng = location.lng;
        return fetch(`https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${lat},${lng}&radius=5000&name=hotel&key=AIzaSyDLALWvUzhLVjM75F18_Jt9ZMKorO4THu8`)
      })
      .then((res) => {
        return res.json();
      })
      .then((hotels) => {
        console.log(hotels);
        self.hotelsArray = hotels.results;
      });
  }

}
