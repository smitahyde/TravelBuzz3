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
      this.hotel = this.db.object('hotels/' + this.key).valueChanges();

      console.log('hello', this.key, this.hotel);
    }


  }

  updateItem(hotel) {
    console.log('update hotel');
    this.db.database.ref('/hotels/' + hotel.actualKey).set(hotel).then(function() {
      console.log('entry updated in firebase!!');
      });
    }

}
