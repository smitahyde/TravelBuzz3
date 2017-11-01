import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { environment } from '../environments/environment';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { ReactiveFormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { HotelsComponent } from './hotels/hotels.component';


import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';

import { HomeComponent } from './home/home.component';
import { SearchComponent } from './search/search.component';

import { routes } from './services/routes';
import { HotelsCreateComponent } from './hotels-create/hotels-create.component';

@NgModule({
  declarations: [
    AppComponent,
    HotelsComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    SearchComponent,
    HotelsCreateComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    ReactiveFormsModule,

  ],
  providers: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
