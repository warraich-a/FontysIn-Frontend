import { ProfileComponent } from './profile/profile.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {UserComponent} from './user/user.component';

import {PostComponent} from './post/post.component';

import {UserSettingsComponent} from './user-settings/user-settings.component';
import { UpdateProfileEducationComponent} from './update-profile-education/update-profile-education.component';
import { UpdateProfileExperienceComponent} from './update-profile-experience/update-profile-experience.component';
import { UpdateProfileAboutComponent} from './update-profile-about/update-profile-about.component';

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
  path: 'settings',
  component: UserSettingsComponent
},]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
