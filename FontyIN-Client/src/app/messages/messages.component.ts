import { Conversation } from './../classes/Message/Conversation';
import { MessageService } from './../services/message/message.service';
import { AfterViewChecked, AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { StartConversationComponent } from '../start-conversation/start-conversation.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {
	conversations: Conversation[];

	defaultElevation = 3;
	raisedElevation = 5;    
	position = new FormControl('below');

    // Selected conversation
    selectedConversation: Conversation;
    selectedIndex = -1;

    userId : number = parseInt(localStorage.getItem("userId"));

	// @ViewChild('scrollable') private scrollable: ElementRef;
	// private shouldScrollDown: boolean;



	constructor(private messageService: MessageService,
		private router: Router,
		private route: ActivatedRoute,
		public dialog: MatDialog) { }
	
	ngOnInit(): void {
		this.messageService.getAll()
			.subscribe((data) => {
				this.conversations = <Conversation[]>data;

                // Show first conversation
                if(this.conversations.length > 0) {
                    this.router.navigate([this.conversations[0].id], {relativeTo: this.route});
                }
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
		console.log(conversation.id);
	}
	
	// Start new Conversation Dialog
	openDialogStartConversation(){

		const dialogRef = this.dialog.open(StartConversationComponent, {
			maxWidth: '50%',
			}); 
			dialogRef.afterClosed()
			.subscribe(res => {
				this.ngOnInit();
			});

	}
}
