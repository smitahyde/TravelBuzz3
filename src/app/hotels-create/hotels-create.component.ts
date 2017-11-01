import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AngularFireDatabase } from 'angularfire2/database';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hotels-create',
  templateUrl: './hotels-create.component.html',
  styleUrls: ['./hotels-create.component.css']
})
export class HotelsCreateComponent implements OnInit {
  constructor(private db: AngularFireDatabase, private router: Router ) {}


  hotelsForm = new FormGroup({
    name: new FormControl(),
    rating: new FormControl(),
    price: new FormControl(),
    destination: new FormControl()
  });



  ngOnInit() {}



  submit() {
    console.log(this.hotelsForm.value);
    const newHotel = this.hotelsForm.value;
    const ref = this.db.list('hotels');
    ref.push(newHotel);
    this.router.navigate( [ '/hotels']);
  }



}

export class Item {
  $key: string;
  title: string;
  body: string;
  timeStamp: number;
}
