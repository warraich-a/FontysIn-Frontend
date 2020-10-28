import { ConnectionComponent } from './connection/connection.component';
import { ProfileComponent } from './profile/profile.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {UserComponent} from './user/user.component';

import {PostComponent} from './post/post.component';
import {UpdatePostComponent} from './update-post/update-post.component';
import {PostDetailsComponent} from './post-details/post-details.component'


import {UserSettingsComponent} from './user-settings/user-settings.component';
import { UpdateProfileEducationComponent} from './update-profile-education/update-profile-education.component';
import { UpdateProfileExperienceComponent} from './update-profile-experience/update-profile-experience.component';
import { UpdateProfileAboutComponent} from './update-profile-about/update-profile-about.component';
import { FilterUsersComponent } from './filter-users/filter-users.component';


const routes: Routes = [{
  path: '',
  component: HomeComponent
},
{
  path: 'profile',
  component: UserComponent
},
{
  path: 'education/:id',
  component: UpdateProfileEducationComponent
},
{
  path: 'experience/:id',
  component: UpdateProfileExperienceComponent
},
{
  path: 'about/:id',
  component: UpdateProfileAboutComponent
},
{
  path: 'users/:id/profiles/:profileId', 
  component: ProfileComponent
},{
  path: 'posts', 
  component: PostComponent
},
{
  path: 'update-post/:id',
  component: UpdatePostComponent
},
{
  path: 'post/:id',
  component: PostDetailsComponent
},
  {
    path: 'users/:id/connections',
    component: ConnectionComponent
  },
  {
    path: 'users/:id/messages',
    component: HomeComponent // MessageComponent
},
{
  path: 'settings',
  component: UserSettingsComponent
},

{
  path: 'users/filter',
  component: FilterUsersComponent
},
]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
