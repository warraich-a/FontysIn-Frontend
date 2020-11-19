import { MessageService } from './../../services/message/message.service';
import { Conversation } from './../../classes/Message/Conversation';
import { AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { FormControl } from '@angular/forms';
import * as moment from 'moment';


@Component({
  selector: 'app-selected-message',
  templateUrl: './selected-message.component.html',
  styleUrls: ['./selected-message.component.css']
})
export class SelectedMessageComponent implements OnInit, AfterViewInit {
	conversation: Conversation;
	id: number;
	currentUser;
	friend;
	loggedInUser = 1;

	@ViewChild('scrollable') private scrollable: ElementRef;
	private shouldScrollDown: boolean;

	position = new FormControl('below');

	constructor(private messageService: MessageService,
			  private router: Router,
			  private route: ActivatedRoute) { }

  	ngOnInit(): void {
		this.route.params
			.subscribe(
				(params: Params) => {
					this.id = +params['conversationId'];
	
					this.getConversation();
				}
		)
	
  }

  	ngAfterViewInit() {
		// Scroll to bottom
		this.scrollable.nativeElement.scrollIntoView({ behavior: "auto", block: "end" });
	}

	// Format tooltip date as (Nov 19, 2020 2:42 AM)
	getTooltipDate(date) {
		date = moment(date).format('lll');
		return date;
	}

	// Convert date and time from UTC to local
	getLocalDate(date) {
		var gmtDateTime = moment.utc(date, "YYYY-MM-DD HH:mm")
		var local = gmtDateTime.local().format('YYYY-MMM-DD h:mm A');

		return local;
	}


	getConversation() {
		this.messageService.get(this.id)
			.subscribe((data) => {
				this.conversation = <Conversation>data;

				// Get users
				this.currentUser = (this.conversation.messages[0].receiver.id == this.loggedInUser) ? this.conversation.messages[0].receiver : this.conversation.messages[0].sender;
				this.friend = (this.conversation.messages[0].receiver.id != this.loggedInUser) ? this.conversation.messages[0].receiver : this.conversation.messages[0].sender;
			})
	}


	// Send message
	submit(f) {
		let newMessage = {
			conversationId: this.conversation.id,
			sender: this.currentUser,
			receiver: this.friend,
			content: f.value.message
		}

		this.messageService.create(newMessage)
			.subscribe(() => {
				this.getConversation();

				f.reset();
			});
	}
}
