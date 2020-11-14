import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  defaultElevation = 3;
  raisedElevation = 5;    
  position = new FormControl('below');



  constructor() { }

  ngOnInit(): void {
  }

}
