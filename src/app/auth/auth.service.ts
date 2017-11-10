
import {Router} from '@angular/router';
import {Injectable} from '@angular/core';
import {AngularFireAuth} from 'angularfire2/auth';

@Injectable()
export class AuthService {
    constructor(private router: Router, private afa: AngularFireAuth) {
    }

    token: string;

    signupUser(email: string, password: string) {

        this.afa.auth.createUserWithEmailAndPassword(email, password)
        .then(
          response => {
              console.log(response);
              this.router.navigate(['/signin']);
          }
      )
            .catch(
                error => console.log(error)
            );
    }

    signinUser(email: string, password: string) {
        this.afa.auth.signInWithEmailAndPassword(email, password)
            .then(
                response => {
                    console.log(response);
                    this.router.navigate(['/']);
                }
            )
            .catch(
                error => console.log(error)
            );
    }

    logout() {
        this.afa.auth.signOut()
        .then(
          response => {
              console.log(response);
              this.router.navigate(['/'])
              .then(function(){alert('You are now logged out')});
          }
      )
      .catch(
          error => console.log(error)
      );
    }

    getToken() {
        this.afa.auth.currentUser.getToken()
            .then(
                (token: string) => this.token = token
            );
        return this.token;
    }

    isAuthenticated() {
        return this.token != null;
    }
}
