import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';


@Component({
  selector: 'app-hotels',
  templateUrl: './hotels.component.html',
  styleUrls: ['./hotels.component.css']
})
export class HotelsComponent implements OnInit {
  hotelList = this.db.list('hotels').valueChanges();

  hotelsRef: AngularFireList<any>;
  hotels: Observable<any[]>;



  constructor(public db: AngularFireDatabase) {
    this.hotelsRef = db.list('hotels');
    // Use snapshotChanges().map() to store the key
    this.hotels = this.hotelsRef.snapshotChanges().map(changes => {
      return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
    });
  }



  ngOnInit() {
  }



  deleteStatus(hotel) {
    console.log (hotel);
    console.log(this.hotels);
  }



}



