import { ProfileComponent } from './profile/profile.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {UserComponent} from './user/user.component';
import {UpdateProfileComponent} from './update-profile/update-profile.component';

import {PostComponent} from './post/post.component';

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
{
  path: 'users/:id/profiles/:profileId', 
  component: ProfileComponent
},{
  path: 'posts', 
  component: PostComponent
}]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
