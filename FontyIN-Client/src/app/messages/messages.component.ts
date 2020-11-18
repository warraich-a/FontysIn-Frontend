import { Conversation } from './../classes/Message/Conversation';
import { MessageService } from './../services/message/message.service';
import { AfterViewChecked, AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit, AfterViewInit {
	conversations: Conversation[];

    loggedInUser = 1;

	defaultElevation = 3;
	raisedElevation = 5;    
	position = new FormControl('below');


	@ViewChild('scrollable') private scrollable: ElementRef;
	private shouldScrollDown: boolean;



	constructor(private messageService: MessageService) { 

	}
	
	ngOnInit(): void {
		this.messageService.getAll()
			.subscribe((data) => {
				this.conversations = <Conversation[]>data;
				console.log("Conversations");
				console.log(data);
			})
	}
	
	ngAfterViewInit() {
		// Scroll to bottom
		this.scrollable.nativeElement.scrollIntoView({ behavior: "auto", block: "end" });
	}


	public get width() {
	  return window.innerWidth;
	}
}
