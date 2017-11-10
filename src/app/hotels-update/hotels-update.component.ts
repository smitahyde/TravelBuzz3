import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AngularFireDatabase } from 'angularfire2/database';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-hotels-update',
  templateUrl: './hotels-update.component.html',
  styleUrls: ['./hotels-update.component.css']
})
export class HotelsUpdateComponent implements OnInit {

  constructor(
    private db: AngularFireDatabase,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  key;
  hotel;

  hotelsUpdateForm = new FormGroup({
    name: new FormControl(),
    interestLevel: new FormControl()
  });

  ngOnInit() {
    const sub = this.route.params.subscribe(params => {
      this.key = params['key'];
      console.log(this.key);
    });

    if (this.key) {
      this.hotel = this.db.database.ref('hotels/' + this.key)
          .once('value')
          .then(
              (snapshot) => {
                  this.hotel = snapshot.val();
          });
      console.log('hotel: ', this.key, this.hotel);
    }

    // take the param :key and query the database for the specific hotel
    // prepopulate input fields with that information
    // allow user to update input fields
    // when the user clicks update button, the database should update
    // Then the user should be routed back to the listview 'My Bucket List'

  }

  submit = () => {
      this.db.database.ref('hotels/' + this.key).set(this.hotel).then(
          () => {
              this.router.navigate(['/hotels']);
          }
      )
  }

}
