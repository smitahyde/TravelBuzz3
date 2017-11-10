import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-signup--spec',
  templateUrl: './signup--spec.component.html',
  styleUrls: ['./signup--spec.component.css']
})
export class SignupSpecComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
 onSignup(form: NgForm) {
   const email = form.value.email;
   const password = form.value.password;
 }
}
