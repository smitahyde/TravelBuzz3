import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AngularFireDatabase } from 'angularfire2/database';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-hotels-create',
  templateUrl: './hotels-create.component.html',
  styleUrls: ['./hotels-create.component.css']
})
export class HotelsCreateComponent implements OnInit {
  constructor(
    private db: AngularFireDatabase,
    private router: Router,
    private route: ActivatedRoute
  ) {}
  key;
  hotel;

  hotelsForm = new FormGroup({
    name: new FormControl(),
    rating: new FormControl(),
    price: new FormControl(),
    destination: new FormControl()
  });

  ngOnInit() {
    const sub = this.route.params.subscribe(params => {
      this.key = params['key'];
      console.log(this.key);
    });

  if (this.key) {
   this.hotel = this.db.object('hotels/' + this.key).valueChanges();

      console.log(this.hotel);
  }
  }
  submit() {
    console.log(this.hotelsForm.value);
    const newHotel = this.hotelsForm.value;
    const ref = this.db.list('hotels');
    ref.push(newHotel);
    this.router.navigate(['/hotels']);
  }
}

export class Item {
  $key: string;
  title: string;
  body: string;
  timeStamp: number;
}
