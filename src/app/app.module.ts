import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {environment} from '../environments/environment';
import {AngularFireModule} from 'angularfire2';
import {AngularFireDatabaseModule} from 'angularfire2/database';
import {ReactiveFormsModule} from '@angular/forms';


import {AppComponent} from './app.component';
import {HotelsComponent} from './hotels/hotels.component';


import {NavbarComponent} from './navbar/navbar.component';
import {FooterComponent} from './footer/footer.component';

import {HomeComponent} from './home/home.component';
import {SearchComponent} from './search/search.component';

import {routes} from './services/routes';
import {HotelsCreateComponent} from './hotels-create/hotels-create.component';
import {HotelsUpdateComponent} from './hotels-update/hotels-update.component';
import {SigninComponent} from './auth/signin/signin.component';
import {SignupComponent} from './auth/signup/signup.component';
import {AuthService} from './auth/auth.service';
import {AngularFireAuth, AngularFireAuthModule} from 'angularfire2/auth';

@NgModule({
    declarations: [
        AppComponent,
        HotelsComponent,
        NavbarComponent,
        FooterComponent,
        HomeComponent,
        SearchComponent,
        HotelsCreateComponent,
        HotelsUpdateComponent,
        SigninComponent,
        SignupComponent
    ],
    imports: [
        BrowserModule,
        RouterModule.forRoot(routes),
        FormsModule,
        AngularFireModule.initializeApp(environment.firebase),
        AngularFireDatabaseModule,
        AngularFireAuthModule,
        ReactiveFormsModule,

    ],
    providers: [AppComponent, AuthService, AngularFireAuth],
    bootstrap: [AppComponent]
})
export class AppModule {
}
