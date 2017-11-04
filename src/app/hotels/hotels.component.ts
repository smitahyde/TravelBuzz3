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
  hotelsArray = [];

  constructor(public db: AngularFireDatabase) {

  }



  ngOnInit() {
    const thisSaved = this;
    // Make a call to the database to get the value of hotels
    this.db.database.ref('/hotels/').once('value').then(function (hotelsListFromDatabase) {
      // If there is actually a value returned from the database (so, the database wasn't completely empty...)
      if (hotelsListFromDatabase.val()) {
        const hotelsListAsObject = hotelsListFromDatabase.val();
        // Iterate over object and turn it into an array of hotels
        Object.keys(hotelsListAsObject).forEach(function (key) {
          // Include the hotel's key inside that object
          hotelsListAsObject[key].actualKey = key;
          // Push it to the hotelsArray
          thisSaved.hotelsArray.push(hotelsListAsObject[key]);
        });
        console.log('hotelsArray is now:');
        console.log(thisSaved.hotelsArray);
      }
    });
  }



  deleteItem(hotel) {
    console.log('Inside the deleteItem function, "hotel" is:');
    console.log(hotel);
    const thisSaved = this;
    // Remove the entry from Firebase
    this.db.database.ref('/hotels/' + hotel.actualKey).remove().then(function() {
      console.log('entry removed from firebase!!');
      // After the entry in Firebase has been deleted, we also need to delete it from the local hotelsArray
      let counter = 0;
      // Loop over array of hotels, get each entry
      thisSaved.hotelsArray.forEach(function (entry) {
        // If the entry's actualKey is the same as the just-deleted's actualKey
        if (entry.actualKey === hotel.actualKey) {
          // Then we need to splice out that entry from the hotelsArray
          thisSaved.hotelsArray.splice(counter, 1);
        }
        counter++;
      });

    });
  }

updateItem(hotel) {
  console.log (hotel);
}


}

