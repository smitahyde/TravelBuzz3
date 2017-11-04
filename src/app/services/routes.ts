import { HomeComponent } from '../home/home.component';
import { HotelsComponent } from '../hotels/hotels.component';

import { HotelsCreateComponent } from '../hotels-create/hotels-create.component';


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
    {path: 'hotels/update/:key',
    component: HotelsCreateComponent
},

  {
    path: '**',
    redirectTo: '/'
  }
];

