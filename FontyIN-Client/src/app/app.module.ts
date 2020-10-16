import { DataService } from './services/data.service';
import { ContactService } from './services/contact/contact.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { PostComponent } from './post/post.component';

import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatListModule} from '@angular/material/list';
import {MatDividerModule} from '@angular/material/divider';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatIconModule} from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material/input';
import {MatDialogModule} from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatTabsModule} from '@angular/material/tabs';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatBadgeModule} from '@angular/material/badge';


import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './header/header.component';
import { UserSettingsComponent } from './user-settings/user-settings.component';
import { UpdateProfileEducationComponent } from './update-profile-education/update-profile-education.component';
import { UpdateProfileExperienceComponent } from './update-profile-experience/update-profile-experience.component';
import { UpdateProfileAboutComponent } from './update-profile-about/update-profile-about.component';
import { ConnectionComponent } from './connection/connection.component';
import { DeleteConnectionComponent } from './delete-connection/delete-connection.component';
import { DeleteSkillComponent } from './delete-skill/delete-skill.component';


import { FilterPipe } from './pipes/filter.pipe';
import { MaterialElevationDirective } from './directives/material-elevation.directive'; // -> imported filter pipe


@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    HomeComponent,
    ProfileComponent,
    PostComponent,
    HeaderComponent,
    UserSettingsComponent,
    UpdateProfileEducationComponent,
    UpdateProfileExperienceComponent,
    UpdateProfileAboutComponent,
    PostComponent,
    ConnectionComponent,
    DeleteConnectionComponent,
    FilterPipe, // -> added filter pipe to use it inside the component
    MaterialElevationDirective,  // -> adds shadow
    DeleteSkillComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule,
    MDBBootstrapModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatButtonModule,
    MatListModule,
    MatDividerModule,
    MatGridListModule,
    MatInputModule,
    MatIconModule,
    MatDialogModule,
    MatFormFieldModule,
    // MatAutocompleteModule,
    MatTabsModule,
    MatTooltipModule,
    MatBadgeModule,
    BrowserAnimationsModule,
    ],
  providers: [
    DataService,
    ContactService,
    FormsModule,
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
