import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {UserComponent} from './user/user.component';
import {UpdateProfileComponent} from './update-profile/update-profile.component';


const routes: Routes = [{
  path: '',
  component: HomeComponent
},
{
  path: 'profile',
  component: UserComponent
},
{
  path: 'update',
  component: UpdateProfileComponent
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
