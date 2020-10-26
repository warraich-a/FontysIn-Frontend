
export class User {
    id: number;
    userFirstName: string;
    userLastName: string;
    userEmail: string;
    password: string;; 
    phoneNumbar: string;; 
    addressId: number;
    locationId: number;
    departmentId: number; 
    userNumber: string;; 
    img: string;; 
    //UserType userType;
    constructor(
        public id: number,
        public userPhoneNumber: string,
    ) {  }
}