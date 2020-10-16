import { AddInformationComponent } from './profile/add-information/add-information.component';
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
import { UpdateProfileComponent } from './update-profile/update-profile.component';
import { PostComponent } from './post/post.component';
import { DeleteSkillComponent } from './delete-skill/delete-skill.component';

import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatDialogModule} from '@angular/material/dialog';
import { HttpClientModule } from '@angular/common/http';
import { MatIconModule } from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { DeleteEducationComponent } from './delete-education/delete-education.component';


@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    HomeComponent,
    ProfileComponent,
    UpdateProfileComponent,
    PostComponent,
    AddInformationComponent,
    DeleteSkillComponent,
    DeleteEducationComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule,
    MDBBootstrapModule.forRoot(),
    ReactiveFormsModule,
    HttpClientModule,
    MatButtonModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatDialogModule,
    FormsModule,
    MatListModule,
    MatFormFieldModule
    
  ],
  providers: [
    DataService,
    ContactService,
    FormsModule,
    
  ],
  bootstrap: [AppComponent]
  
})
export class AppModule { }
