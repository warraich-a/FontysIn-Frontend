import { Conversation } from './../classes/Message/Conversation';
import { FilterService } from './../services/filter/filter.service';
import { Component, ElementRef, Inject, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { UserDTO } from '../classes/Profile/UserDTO';
import { MessageService } from '../services/message/message.service';

@Component({
  selector: 'app-start-conversation',
  templateUrl: './start-conversation.component.html',
  styleUrls: ['./start-conversation.component.css']
})
export class StartConversationComponent implements OnInit {

  searchText= "";
  users: UserDTO[]; 
  user: UserDTO;
  conversation: Conversation;
  currentUser;
  friend;
  id: number;
  loggedInUser: 1;

  
  constructor(
    private messageService: MessageService,
    private filterService: FilterService,
    public dialogRef: MatDialogRef<StartConversationComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
      console.log(data);
    }

  ngOnInit(): void {
  }

  @ViewChild('scrollable') private scrollable: ElementRef;


  //get user by type letters of his/her name
  getUsersByFirstNameChars(){

    if (this.searchText != null){
      this.filterService.filterUsersByName(this.searchText).subscribe((data)=>
      {
       this.users=<UserDTO[]>data;
        console.log(this.users);     
      });
    }

  }

  //close dialog
  Close(){
    this.dialogRef.close();
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
          this.scrollable.nativeElement.scrollTop = this.scrollable.nativeElement.scrollHeight;
      });
      
      this.Close();
	}

}
