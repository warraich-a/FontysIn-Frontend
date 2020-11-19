import { Conversation } from './../classes/Message/Conversation';
import { MessageService } from './../services/message/message.service';
import { AfterViewChecked, AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {
	conversations: Conversation[];

    loggedInUser = 1;

	defaultElevation = 3;
	raisedElevation = 5;    
	position = new FormControl('below');

    // Selected conversation
    selectedConversation: Conversation;
    selectedIndex = -1;



	// @ViewChild('scrollable') private scrollable: ElementRef;
	// private shouldScrollDown: boolean;



	constructor(private messageService: MessageService,
                private router: Router,
              private route: ActivatedRoute) { 

	}
	
	ngOnInit(): void {
		this.messageService.getAll()
			.subscribe((data) => {
				this.conversations = <Conversation[]>data;
				console.log("Conversations");
				console.log(data);
			})
	}
	
	// ngAfterViewInit() {
	// 	// Scroll to bottom
	// 	this.scrollable.nativeElement.scrollIntoView({ behavior: "auto", block: "end" });
	// }


	public get width() {
	  return window.innerWidth;
	}

    // When a conversation is selected
    onSelected(conversation, index) {
        this.selectedConversation = conversation;
        this.selectedIndex = index;

        // Redirect and pass the cselected conversation object
        this.router.navigate([conversation.id], {relativeTo: this.route});
    }
}
