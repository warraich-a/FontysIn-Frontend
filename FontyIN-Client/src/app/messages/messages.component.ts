import { AfterViewChecked, AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit, AfterViewInit {

	defaultElevation = 3;
	raisedElevation = 5;    
	position = new FormControl('below');

	@ViewChild('scrollable') private scrollable: ElementRef;
	private shouldScrollDown: boolean;



	constructor() { }
	
	ngOnInit(): void {
	
	}
	
	ngAfterViewInit() {
		// Scroll to bottom
		this.scrollable.nativeElement.scrollIntoView({ behavior: "auto", block: "end" });
	}


	public get width() {
	  return window.innerWidth;
	}
}
