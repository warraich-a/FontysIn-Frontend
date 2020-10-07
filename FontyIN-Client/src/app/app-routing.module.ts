import { ProfileComponent } from './profile/profile.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {UserComponent} from './user/user.component';

const routes: Routes = [{
  path: '',
  component: HomeComponent
},
{
  path: 'profile',
  component: UserComponent
},
{
  path: 'users/:id/profiles/:profileId', 
  component: ProfileComponent
}]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

