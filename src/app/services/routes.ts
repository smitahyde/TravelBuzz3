import { HomeComponent } from '../home/home.component';
import { HotelsComponent } from '../hotels/hotels.component';
import { HotelsUpdateComponent } from '../hotels-update/hotels-update.component';
import { HotelsCreateComponent } from '../hotels-create/hotels-create.component';
import { SignupComponent } from '../auth/signup/signup.component';
import { SigninComponent } from '../auth/signin/signin.component';

export const routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'hotels',
    component: HotelsComponent
  },
  {
    path: 'hotels/create',
    component: HotelsCreateComponent
  },
  {
    path: 'hotels/update/:key',
    component: HotelsUpdateComponent
  },

  {
    path: 'signup',
    component: SignupComponent
  },
  {
    path: 'signin',
    component: SigninComponent
  },
  {
    path: '**',
    redirectTo: '/'
  }
];
