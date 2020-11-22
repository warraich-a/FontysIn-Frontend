import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Conversation } from '../classes/Message/Conversation';
import { UserDTO } from '../classes/Profile/UserDTO';
import { FilterService } from '../services/filter/filter.service';
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

  // @ViewChild('scrollable') private scrollable: ElementRef;


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

  // Send message
	addNewConversation() {
      
    // let newMessage = {
		// 	sender: this.currentUser,
		// 	receiver: this.friend,
		// }

		// this.messageService.create(newMessage)
		// 	.subscribe(() => {
    //     console.log("New conversation is added to my list");
    //   });
      
      this.Close();
	}

}
