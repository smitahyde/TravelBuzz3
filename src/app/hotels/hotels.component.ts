import {Component, OnInit} from '@angular/core';
import {AngularFireDatabase} from 'angularfire2/database';
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
        this.db.database.ref('/hotels/').once('value').then(function (hotelsListFromDatabase) {
            if (hotelsListFromDatabase.val()) {
                const hotelsListAsObject = hotelsListFromDatabase.val();
                Object.keys(hotelsListAsObject).forEach(function (key) {
                    hotelsListAsObject[key].actualKey = key;
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
        this.db.database.ref('/hotels/' + hotel.actualKey).remove().then(function () {
            console.log('entry removed from firebase!!');
            let counter = 0;
            thisSaved.hotelsArray.forEach(function (entry) {
                if (entry.actualKey === hotel.actualKey) {
                    thisSaved.hotelsArray.splice(counter, 1);
                }
                counter++;
            });

        });
    }

}

