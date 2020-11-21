import { MessageService } from './../../services/message/message.service';
import { Conversation } from './../../classes/Message/Conversation';
import { AfterViewChecked, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { FormControl } from '@angular/forms';
import * as moment from 'moment';


@Component({
  selector: 'app-selected-message',
  templateUrl: './selected-message.component.html',
  styleUrls: ['./selected-message.component.css'],
})
export class SelectedMessageComponent implements OnInit, AfterViewChecked {
	conversation: Conversation;
	id: number;
	currentUser;
	friend;

    userId : number = parseInt(localStorage.getItem("userId"));

	@ViewChild('scrollable') private scrollable: ElementRef;
    disableScrollDown = false;


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


    ngAfterViewChecked() {
        this.scrollToBottom();
    }

	// Format tooltip date as (Nov 19, 2020 2:42 AM)
	getTooltipDate(date) {
		date = moment(date).format('lll');
		return date;
	}

	// Convert date and time from UTC to local
	getLocalDate(date) {
		var gmtDateTime = moment.utc(date, "YYYY-MM-DD HH:mm")
		var local = gmtDateTime.local().format('YYYY-MMM-DD HH:mm');

		return local;
	}


	getConversation() {
		this.messageService.get(this.id)
			.subscribe((data) => {
				this.conversation = <Conversation>data;

				// Get users
				this.currentUser = (this.conversation.messages[0].receiver.id == this.userId) ? this.conversation.messages[0].receiver : this.conversation.messages[0].sender;
				this.friend = (this.conversation.messages[0].receiver.id != this.userId) ? this.conversation.messages[0].receiver : this.conversation.messages[0].sender;
			})
	}


    // Scroll
    onScroll() {
        let element = this.scrollable.nativeElement;
        let atBottom = element.scrollHeight - element.scrollTop === element.clientHeight;
        if (this.disableScrollDown && atBottom) {
            this.disableScrollDown = false;
        } else {
            this.disableScrollDown = true;
        }
    }


    private scrollToBottom(): void {
        if (this.disableScrollDown) {
            return
        }
        try {
            this.scrollable.nativeElement.scrollTop = this.scrollable.nativeElement.scrollHeight;
        } catch(err) { }
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

                this.scrollable.nativeElement.scrollTop = this.scrollable.nativeElement.scrollHeight;
			});
	}

}
